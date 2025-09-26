'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Calendar, Upload, Loader2, FileText, Download, Copy, Clock } from 'lucide-react';
import { apiClient, ExtractEventsDatesResponse } from '@/lib/api';
import { Response } from '@/components/ai-elements/response';

export default function TimelineExtractPage() {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [timeline, setTimeline] = useState<ExtractEventsDatesResponse | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file && file.type === 'application/pdf') {
            setSelectedFile(file);
            setTimeline(null);
            setError(null);
        } else {
            setError('Please select a valid PDF file');
        }
    };

    const handleExtractTimeline = async () => {
        if (!selectedFile) return;

        setIsLoading(true);
        setError(null);

        try {
            const result = await apiClient.extractEventsDates(selectedFile);

            // Handle the timeline response format
            let parsedResult;
            if (typeof result.events === 'string') {
                // Check if it's JSON format and convert to timeline
                let timelineText = result.events;

                try {
                    // Try to parse as JSON first
                    const jsonData = JSON.parse(result.events);
                    if (jsonData.events && Array.isArray(jsonData.events)) {
                        // Convert JSON to timeline format
                        timelineText = "📅 Case Timeline\n\n";
                        jsonData.events.forEach((event: { date: string; event: string }) => {
                            if (event.date && event.event) {
                                timelineText += `${event.date} – ${event.event}\n\n`;
                            }
                        });
                    }
                } catch {
                    // If not JSON, use the string as is
                    timelineText = result.events;
                }

                parsedResult = {
                    timeline: timelineText,
                    events: [],
                    dates: []
                };
            } else if (result.events && Array.isArray(result.events)) {
                // Handle direct JSON response (not stringified)
                let timelineText = "📅 Case Timeline\n\n";
                result.events.forEach((event: { date: string; event: string }) => {
                    if (event.date && event.event) {
                        timelineText += `${event.date} – ${event.event}\n\n`;
                    }
                });

                parsedResult = {
                    timeline: timelineText,
                    events: result.events,
                    dates: []
                };
            } else {
                parsedResult = result;
            }

            setTimeline(parsedResult);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to extract timeline');
        } finally {
            setIsLoading(false);
        }
    };

    const handleCopyTimeline = () => {
        if (timeline?.timeline) {
            navigator.clipboard.writeText(timeline.timeline);
        }
    };

    const handleDownloadTimeline = () => {
        if (timeline?.timeline) {
            const blob = new Blob([timeline.timeline], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `${selectedFile?.name?.replace('.pdf', '') || 'document'}_timeline.txt`;
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
                    <Calendar className="h-8 w-8 text-primary" />
                    <div>
                        <h1 className="text-2xl font-bold text-slate-900">Timeline Extractor</h1>
                        <p className="text-slate-600">Extract chronological events and dates from legal documents</p>
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
                                <span>Upload Document</span>
                            </CardTitle>
                            <CardDescription>
                                Select a PDF document to extract chronological events and dates
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
                                onClick={handleExtractTimeline}
                                disabled={!selectedFile || isLoading}
                                className="w-full"
                            >
                                {isLoading ? (
                                    <>
                                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                                        Extracting Timeline...
                                    </>
                                ) : (
                                    <>
                                        <Calendar className="h-4 w-4 mr-2" />
                                        Extract Timeline
                                    </>
                                )}
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Timeline Results */}
                    {timeline && (
                        <Card>
                            <CardHeader>
                                <div className="flex items-center justify-between">
                                    <CardTitle className="flex items-center space-x-2">
                                        <Clock className="h-5 w-5 text-primary" />
                                        <span>Extracted Timeline</span>
                                    </CardTitle>
                                    <div className="flex space-x-2">
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={handleCopyTimeline}
                                        >
                                            <Copy className="h-4 w-4 mr-1" />
                                            Copy
                                        </Button>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={handleDownloadTimeline}
                                        >
                                            <Download className="h-4 w-4 mr-1" />
                                            Download
                                        </Button>
                                    </div>
                                </div>
                                <CardDescription>
                                    Timeline for: {selectedFile?.name}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {timeline.timeline ? (
                                        <div className="bg-slate-50 p-4 rounded-lg">
                                            <Response className="whitespace-pre-wrap font-mono text-sm">
                                                {timeline.timeline}
                                            </Response>
                                        </div>
                                    ) : Array.isArray(timeline.events) ? (
                                        <div className="space-y-3">
                                            {timeline.events.map((event: { date: string; event: string }, index: number) => (
                                                <div key={index} className="flex items-start space-x-3 p-3 bg-slate-50 rounded-lg">
                                                    <div className="flex-shrink-0 w-20 text-sm font-medium text-primary">
                                                        {event.date}
                                                    </div>
                                                    <div className="flex-1 text-sm">
                                                        {event.event}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="bg-slate-50 p-4 rounded-lg">
                                            <pre className="text-sm whitespace-pre-wrap">
                                                {JSON.stringify(timeline, null, 2)}
                                            </pre>
                                        </div>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    )}

                    {/* Instructions */}
                    {!selectedFile && !timeline && (
                        <Card>
                            <CardContent className="p-6 text-center">
                                <Calendar className="h-16 w-16 text-slate-300 mx-auto mb-4" />
                                <h3 className="text-lg font-medium text-slate-900 mb-2">Timeline Extractor</h3>
                                <p className="text-slate-600 max-w-md mx-auto">
                                    Upload a legal document to automatically extract chronological events,
                                    important dates, and create a structured timeline of the case or legal matter.
                                </p>
                            </CardContent>
                        </Card>
                    )}
                </div>
            </div>
        </div>
    );
}
