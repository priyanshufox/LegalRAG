'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { FileText, Calendar, FileCheck, Loader2, X } from 'lucide-react';
import { apiClient, ExtractEventsDatesResponse, SummarizePdfResponse } from '@/lib/api';

interface PdfToolsSidebarProps {
    isOpen: boolean;
    onToggle: () => void;
}

export default function PdfToolsSidebar({ isOpen, onToggle }: PdfToolsSidebarProps) {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [eventsDatesResult, setEventsDatesResult] = useState<ExtractEventsDatesResponse | null>(null);
    const [summaryResult, setSummaryResult] = useState<SummarizePdfResponse | null>(null);
    const [isLoadingEvents, setIsLoadingEvents] = useState(false);
    const [isLoadingSummary, setIsLoadingSummary] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file && file.type === 'application/pdf') {
            setSelectedFile(file);
            setEventsDatesResult(null);
            setSummaryResult(null);
            setError(null);
        } else {
            setError('Please select a valid PDF file');
        }
    };

    const handleExtractEventsDates = async () => {
        if (!selectedFile) return;

        setIsLoadingEvents(true);
        setError(null);

        try {
            const result = await apiClient.extractEventsDates(selectedFile);
            console.log('Extract Events Dates Result:', result);

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
                        jsonData.events.forEach((event: any) => {
                            if (event.date && event.event) {
                                timelineText += `${event.date} – ${event.event}\n\n`;
                            }
                        });
                    }
                } catch (e) {
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
                result.events.forEach((event: any) => {
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

            console.log('Parsed Result:', parsedResult);
            setEventsDatesResult(parsedResult);
        } catch (err) {
            console.error('Extract Events Dates Error:', err);
            setError(err instanceof Error ? err.message : 'Failed to extract events and dates');
        } finally {
            setIsLoadingEvents(false);
        }
    };

    const handleSummarizePdf = async () => {
        if (!selectedFile) return;

        setIsLoadingSummary(true);
        setError(null);

        try {
            const result = await apiClient.summarizePdf(selectedFile);
            setSummaryResult(result);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to summarize PDF');
        } finally {
            setIsLoadingSummary(false);
        }
    };

    const clearResults = () => {
        setEventsDatesResult(null);
        setSummaryResult(null);
        setSelectedFile(null);
        setError(null);
    };

    return (
        <div className={`${isOpen ? 'w-80' : 'w-0'} transition-all duration-300 overflow-hidden bg-white border-l border-slate-200 flex flex-col`}>
            {/* Sidebar Header */}
            <div className="p-4 border-b border-slate-200">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <FileText className="h-6 w-6 text-primary" />
                        <h2 className="font-semibold text-slate-900">PDF Tools</h2>
                    </div>
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={onToggle}
                        className="lg:hidden"
                    >
                        <X className="h-4 w-4" />
                    </Button>
                </div>
            </div>

            {/* PDF Tools Content */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                <Card className="border-0 shadow-sm">
                    <CardHeader className="pb-3">
                        <CardTitle className="text-sm font-medium">Upload PDF</CardTitle>
                        <CardDescription className="text-xs">
                            Select a PDF file to process
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        <div className="space-y-2">
                            <Input
                                type="file"
                                accept=".pdf"
                                onChange={handleFileSelect}
                                className="cursor-pointer text-xs"
                            />
                            {selectedFile && (
                                <p className="text-xs text-green-600 dark:text-green-400">
                                    Selected: {selectedFile.name}
                                </p>
                            )}
                        </div>

                        {error && (
                            <div className="p-2 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md">
                                <p className="text-xs text-red-600 dark:text-red-400">{error}</p>
                            </div>
                        )}

                        <div className="space-y-2">
                            <Button
                                onClick={handleExtractEventsDates}
                                disabled={!selectedFile || isLoadingEvents}
                                size="sm"
                                className="w-full text-xs"
                            >
                                {isLoadingEvents ? (
                                    <Loader2 className="h-3 w-3 mr-2 animate-spin" />
                                ) : (
                                    <Calendar className="h-3 w-3 mr-2" />
                                )}
                                Extract Events & Dates
                            </Button>
                            <Button
                                onClick={handleSummarizePdf}
                                disabled={!selectedFile || isLoadingSummary}
                                size="sm"
                                className="w-full text-xs"
                            >
                                {isLoadingSummary ? (
                                    <Loader2 className="h-3 w-3 mr-2 animate-spin" />
                                ) : (
                                    <FileCheck className="h-3 w-3 mr-2" />
                                )}
                                Summarize PDF
                            </Button>
                        </div>

                        {(eventsDatesResult || summaryResult) && (
                            <Button
                                onClick={clearResults}
                                variant="outline"
                                size="sm"
                                className="w-full text-xs"
                            >
                                Clear Results
                            </Button>
                        )}
                    </CardContent>
                </Card>

               x

                {(eventsDatesResult && (eventsDatesResult.timeline || eventsDatesResult.events)) && (
                    <Card className="border-0 shadow-sm">
                        <CardHeader className="pb-3">
                            <div className="flex items-center space-x-2">
                                <Calendar className="h-4 w-4 text-primary" />
                                <CardTitle className="text-sm font-medium">Events & Dates</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <div>
                                {eventsDatesResult.timeline ? (
                                    <div className="space-y-2">
                                        <div className="text-xs text-black dark:text-black whitespace-pre-wrap font-sans leading-relaxed">
                                            {eventsDatesResult.timeline}
                                        </div>
                                    </div>
                                ) : Array.isArray(eventsDatesResult.events) ? (
                                    <div>
                                        <h4 className="font-medium text-xs mb-2">Events & Dates:</h4>
                                        <div className="space-y-2">
                                            {eventsDatesResult.events.map((event, index) => (
                                                <div key={index} className="text-xs text-black dark:text-black">
                                                    <div className="font-medium text-green-600 dark:text-green-400">{event.date}</div>
                                                    <div className="ml-2 text-black dark:text-slate-400">{event.event}</div>
                                                    <br />
                                                
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <div>
                                        <h4 className="font-medium text-xs mb-2">Raw Response:</h4>
                                        <pre className="text-xs text-black dark:text-black whitespace-pre-wrap">
                                            {JSON.stringify(eventsDatesResult, null, 2)}
                                        </pre>
                                    </div>
                                )}
                            </div>
                        </CardContent>
                    </Card>
                )}

                {summaryResult && (
                    <Card className="border-0 shadow-sm">
                        <CardHeader className="pb-3">
                            <div className="flex items-center space-x-2">
                                <FileCheck className="h-4 w-4 text-primary" />
                                <CardTitle className="text-sm font-medium">PDF Summary</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="prose prose-xs max-w-none dark:prose-invert">
                                <p className="text-xs text-black dark:text-black whitespace-pre-wrap">
                                    {summaryResult.summary}
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                )}
            </div>
        </div>
    );
}
