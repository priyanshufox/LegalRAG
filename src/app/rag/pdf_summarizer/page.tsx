'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { FileCheck, Upload, Loader2, FileText, Download, Copy } from 'lucide-react';
import { apiClient, SummarizePdfResponse } from '@/lib/api';
import { Response } from '@/components/ai-elements/response';

export default function PdfSummarizerPage() {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [summary, setSummary] = useState<SummarizePdfResponse | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file && file.type === 'application/pdf') {
            setSelectedFile(file);
            setSummary(null);
            setError(null);
        } else {
            setError('Please select a valid PDF file');
        }
    };

    const handleSummarize = async () => {
        if (!selectedFile) return;

        setIsLoading(true);
        setError(null);

        try {
            const result = await apiClient.summarizePdf(selectedFile);
            setSummary(result);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to summarize PDF');
        } finally {
            setIsLoading(false);
        }
    };

    const handleCopySummary = () => {
        if (summary?.summary) {
            navigator.clipboard.writeText(summary.summary);
        }
    };

    const handleDownloadSummary = () => {
        if (summary?.summary) {
            const blob = new Blob([summary.summary], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `${selectedFile?.name?.replace('.pdf', '') || 'document'}_summary.txt`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }
    };

    return (
        <div className="h-full flex flex-col bg-white">
            {/* Header */}
            <div className="p-6 border-b border-slate-200">
                <div className="flex items-center space-x-3 mb-4">
                    <FileCheck className="h-8 w-8 text-primary" />
                    <div>
                        <h1 className="text-2xl font-bold text-slate-900">PDF Summarizer</h1>
                        <p className="text-slate-600">Extract key information and create summaries from PDF documents</p>
                    </div>
                </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto p-6">
                <div className="max-w-4xl mx-auto space-y-6">
                    {/* File Upload Section */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center space-x-2">
                                <Upload className="h-5 w-5 text-primary" />
                                <span>Upload PDF Document</span>
                            </CardTitle>
                            <CardDescription>
                                Select a PDF file to generate a comprehensive summary
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Input
                                    type="file"
                                    accept=".pdf"
                                    onChange={handleFileSelect}
                                    className="cursor-pointer"
                                />
                                {selectedFile && (
                                    <div className="flex items-center space-x-2 text-sm text-green-600">
                                        <FileText className="h-4 w-4" />
                                        <span>Selected: {selectedFile.name}</span>
                                    </div>
                                )}
                            </div>

                            {error && (
                                <div className="p-3 bg-red-50 border border-red-200 rounded-md">
                                    <p className="text-sm text-red-600">{error}</p>
                                </div>
                            )}

                            <Button
                                onClick={handleSummarize}
                                disabled={!selectedFile || isLoading}
                                className="w-full"
                            >
                                {isLoading ? (
                                    <>
                                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                                        Summarizing...
                                    </>
                                ) : (
                                    <>
                                        <FileCheck className="h-4 w-4 mr-2" />
                                        Generate Summary
                                    </>
                                )}
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Summary Results */}
                    {summary && (
                        <Card>
                            <CardHeader>
                                <div className="flex items-center justify-between">
                                    <CardTitle className="flex items-center space-x-2">
                                        <FileText className="h-5 w-5 text-primary" />
                                        <span>Document Summary</span>
                                    </CardTitle>
                                    <div className="flex space-x-2">
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={handleCopySummary}
                                        >
                                            <Copy className="h-4 w-4 mr-1" />
                                            Copy
                                        </Button>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={handleDownloadSummary}
                                        >
                                            <Download className="h-4 w-4 mr-1" />
                                            Download
                                        </Button>
                                    </div>
                                </div>
                                <CardDescription>
                                    Summary for: {selectedFile?.name}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="prose prose-sm max-w-none">
                                    <div className="bg-slate-50 p-4 rounded-lg">
                                        <Response className="whitespace-pre-wrap">{summary.summary}</Response>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    )}

                    {/* Instructions */}
                    {!selectedFile && !summary && (
                        <Card>
                            <CardContent className="p-6 text-center">
                                <FileCheck className="h-16 w-16 text-slate-300 mx-auto mb-4" />
                                <h3 className="text-lg font-medium text-slate-900 mb-2">PDF Summarizer</h3>
                                <p className="text-slate-600 max-w-md mx-auto">
                                    Upload a PDF document to generate a comprehensive summary.
                                    The AI will extract key information, main points, and create an organized summary.
                                </p>
                            </CardContent>
                        </Card>
                    )}
                </div>
            </div>
        </div>
    );
}
