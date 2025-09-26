'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Search, Loader2, FileText, Calendar, Scale, ExternalLink, Upload } from 'lucide-react';

interface CaseResult {
    id: string;
    title: string;
    court: string;
    publish_date: string;
    citation: string;
    link: string;
}

export default function RelevantCasesPage() {
    const [query, setQuery] = useState('');
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [results, setResults] = useState<CaseResult[]>([]);
    const [keywords, setKeywords] = useState<string[]>([]);
    const [totalCases, setTotalCases] = useState<number>(0);
    const [error, setError] = useState<string | null>(null);

    const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file && file.type === 'application/pdf') {
            setSelectedFile(file);
            setError(null);
        } else {
            setError('Please select a valid PDF file');
        }
    };

    const handleSearch = async () => {
        console.log(query, selectedFile);

        if (!query.trim() && !selectedFile) return;

        setIsLoading(true);
        setError(null);

        try {
            const formData = new FormData();
            if (selectedFile) {
                formData.append('file', selectedFile);
            }
            formData.append('query', query.trim() || 'string');

            const response = await fetch('http://localhost:8000/api/tools/similar-cases', {
                method: 'POST',
                headers: {
                    'accept': 'application/json',
                },
                body: formData
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            if (data.success) {
                setKeywords(data.keywords || []);
                setTotalCases(data.total_cases || 0);
                const cases: CaseResult[] = (data.cases || []).map((caseItem: { title: string; court: string; publish_date: string; citation: string; link: string }, index: number) => ({
                    id: (index + 1).toString(),
                    title: caseItem.title,
                    court: caseItem.court,
                    publish_date: caseItem.publish_date,
                    citation: caseItem.citation,
                    link: caseItem.link
                }));
                setResults(cases);
            } else {
                throw new Error('Failed to find similar cases');
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to search relevant cases');
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !isLoading) {
            handleSearch();
        }
    };


    return (
        <div className="h-full flex flex-col bg-white">
            {/* Header */}
            <div className="p-6 border-b border-slate-200">
                <div className="flex items-center space-x-3 mb-4">
                    <Search className="h-8 w-8 text-primary" />
                    <div>
                        <h1 className="text-2xl font-bold text-slate-900">Relevant Cases</h1>
                        <p className="text-slate-600">Find similar legal cases and precedents</p>
                    </div>
                </div>

                {/* File Upload Section */}
                <Card className="mb-4">
                    <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                            <Upload className="h-5 w-5 text-primary" />
                            <span>Upload Document (Optional)</span>
                        </CardTitle>
                        <CardDescription>
                            Upload a PDF document to find similar cases based on document content
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Input
                            type="file"
                            accept=".pdf"
                            onChange={handleFileSelect}
                            className="cursor-pointer"
                        />
                        {selectedFile && (
                            <div className="flex items-center space-x-2 text-sm text-green-600 mt-2">
                                <FileText className="h-4 w-4" />
                                <span>Selected: {selectedFile.name}</span>
                            </div>
                        )}
                    </CardContent>
                </Card>

                {/* Search Bar */}
                <div className="flex space-x-2">
                    <Input
                        type="text"
                        placeholder="Describe your case or legal issue (optional if file uploaded)..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyPress={handleKeyPress}
                        className="flex-1"
                        disabled={isLoading}
                    />
                    <Button
                        onClick={handleSearch}
                        disabled={(!query.trim() && !selectedFile) || isLoading}
                        className="px-6"
                    >
                        {isLoading ? (
                            <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                            <Search className="h-4 w-4" />
                        )}
                        Find Cases
                    </Button>
                </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto p-6">
                {error && (
                    <Card className="mb-4 border-red-200 bg-red-50">
                        <CardContent className="p-4">
                            <p className="text-red-600">{error}</p>
                        </CardContent>
                    </Card>
                )}

                {keywords.length > 0 && (
                    <Card className="mb-4">
                        <CardHeader>
                            <CardTitle className="text-sm">Extracted Keywords</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap gap-2">
                                {keywords.map((keyword, index) => (
                                    <span key={index} className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">
                                        {keyword}
                                    </span>
                                ))}
                            </div>
                            {totalCases > 0 && (
                                <p className="text-sm text-slate-600 mt-2">
                                    Found {totalCases} total cases
                                </p>
                            )}
                        </CardContent>
                    </Card>
                )}

                {results.length === 0 && !isLoading && (
                    <div className="text-center py-12">
                        <Scale className="h-16 w-16 text-slate-300 mx-auto mb-4" />
                        <h3 className="text-lg font-medium text-slate-900 mb-2">Case Law Search</h3>
                        <p className="text-slate-600 max-w-md mx-auto">
                            Upload a PDF document or describe your legal issue to find relevant precedents,
                            similar cases, and legal authorities that can support your argument.
                        </p>
                    </div>
                )}

                {results.map((caseResult) => (
                    <Card key={caseResult.id} className="mb-4">
                        <CardHeader>
                            <CardTitle className="flex items-center space-x-2 mb-2">
                                <FileText className="h-5 w-5 text-primary" />
                                <span>{caseResult.title}</span>
                            </CardTitle>
                            <div className="flex items-center space-x-4 text-sm text-slate-600">
                                <div className="flex items-center space-x-1">
                                    <Scale className="h-4 w-4" />
                                    <span>{caseResult.court}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                    <Calendar className="h-4 w-4" />
                                    <span>{new Date(caseResult.publish_date).toLocaleDateString()}</span>
                                </div>
                                <div className="text-xs font-medium bg-slate-100 px-2 py-1 rounded">
                                    {caseResult.citation}
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center space-x-2">
                                <ExternalLink className="h-4 w-4 text-primary" />
                                <a
                                    href={caseResult.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary hover:underline text-sm"
                                >
                                    View Full Case on Indian Kanoon
                                </a>
                            </div>
                        </CardContent>
                    </Card>
                ))}

                {isLoading && (
                    <Card>
                        <CardContent className="p-6 text-center">
                            <Loader2 className="h-8 w-8 animate-spin mx-auto mb-2 text-primary" />
                            <p className="text-slate-600">Searching case law database...</p>
                        </CardContent>
                    </Card>
                )}
            </div>
        </div>
    );
}
