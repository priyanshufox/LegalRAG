'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Scale, MessageSquare, FileText, Home, User, Calendar, FileCheck, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { apiClient, ExtractEventsDatesResponse, SummarizePdfResponse } from '@/lib/api';


function PdfToolsSection() {
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

    return (
        <div className="space-y-6">
            <Card className="border-0 shadow-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                <CardHeader>
                    <div className="flex items-center space-x-2">
                        <FileText className="h-5 w-5 text-primary" />
                        <CardTitle className="text-lg">PDF Processing Tools</CardTitle>
                    </div>
                    <CardDescription>
                        Upload a PDF to extract events, dates, or get a summary
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <label htmlFor="pdf-upload" className="text-sm font-medium">
                            Select PDF File
                        </label>
                        <Input
                            id="pdf-upload"
                            type="file"
                            accept=".pdf"
                            onChange={handleFileSelect}
                            className="cursor-pointer"
                        />
                        {selectedFile && (
                            <p className="text-sm text-green-600 dark:text-green-400">
                                Selected: {selectedFile.name}
                            </p>
                        )}
                    </div>

                    {error && (
                        <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md">
                            <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
                        </div>
                    )}

                    <div className="flex gap-3">
                        <Button
                            onClick={handleExtractEventsDates}
                            disabled={!selectedFile || isLoadingEvents}
                            className="flex-1"
                        >
                            {isLoadingEvents ? (
                                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                            ) : (
                                <Calendar className="h-4 w-4 mr-2" />
                            )}
                            Extract Events & Dates
                        </Button>
                        <Button
                            onClick={handleSummarizePdf}
                            disabled={!selectedFile || isLoadingSummary}
                            className="flex-1"
                        >
                            {isLoadingSummary ? (
                                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                            ) : (
                                <FileCheck className="h-4 w-4 mr-2" />
                            )}
                            Summarize PDF
                        </Button>
                    </div>
                </CardContent>
            </Card>

            {eventsDatesResult && (
                <Card className="border-0 shadow-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                    <CardHeader>
                        <div className="flex items-center space-x-2">
                            <Calendar className="h-5 w-5 text-primary" />
                            <CardTitle className="text-lg">Extracted Events & Dates</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            {eventsDatesResult.timeline ? (
                                <div className="space-y-2">
                                    <div className="text-sm text-slate-600 dark:text-slate-400 whitespace-pre-wrap font-sans leading-relaxed">
                                        {eventsDatesResult.timeline}
                                    </div>
                                </div>
                            ) : Array.isArray(eventsDatesResult.events) ? (
                                <div>
                                    <h4 className="font-medium text-sm mb-2">Events & Dates:</h4>
                                    <div className="space-y-2">
                                        {eventsDatesResult.events.map((event, index) => (
                                            <div key={index} className="text-sm text-slate-600 dark:text-slate-400">
                                                <div className="font-medium">{event.date}</div>
                                                <div className="ml-2">{event.event}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <h4 className="font-medium text-sm mb-2">Raw Response:</h4>
                                    <pre className="text-sm text-slate-600 dark:text-slate-400 whitespace-pre-wrap">
                                        {JSON.stringify(eventsDatesResult, null, 2)}
                                    </pre>
                                </div>
                            )}
                        </div>
                    </CardContent>
                </Card>
            )}

            {summaryResult && (
                <Card className="border-0 shadow-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                    <CardHeader>
                        <div className="flex items-center space-x-2">
                            <FileCheck className="h-5 w-5 text-primary" />
                            <CardTitle className="text-lg">PDF Summary</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="prose prose-sm max-w-none dark:prose-invert">
                            <p className="text-slate-600 dark:text-slate-400 whitespace-pre-wrap">
                                {summaryResult.summary}
                            </p>
                        </div>
                    </CardContent>
                </Card>
            )}
        </div>
    );
}

function DashboardContent() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
            <div className="container mx-auto px-4 py-8">
                <div className="flex justify-between items-center mb-8">
                    <div className="flex items-center space-x-3">
                        <div className="p-2 rounded-lg bg-primary/10 dark:bg-primary/20">
                            <Scale className="h-6 w-6 text-primary" />
                        </div>
                        <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                            Legal RAG Dashboard
                        </h1>
                    </div>
                    <Link href="/">
                        <Button
                            variant="outline"
                            className="flex items-center space-x-2"
                        >
                            <Home className="h-4 w-4" />
                            <span>Home</span>
                        </Button>
                    </Link>
                </div>

                <div className="grid gap-6 lg:grid-cols-3">
                    <div className="lg:col-span-2">
                        <div className="grid gap-6 md:grid-cols-2">
                            <Card className="border-0 shadow-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                                <CardHeader>
                                    <div className="flex items-center space-x-2">
                                        <User className="h-5 w-5 text-primary" />
                                        <CardTitle className="text-lg">Welcome</CardTitle>
                                    </div>
                                    <CardDescription>
                                        Welcome to Legal RAG
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">
                                        Welcome to your Legal RAG dashboard
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="border-0 shadow-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                                <CardHeader>
                                    <div className="flex items-center space-x-2">
                                        <MessageSquare className="h-5 w-5 text-primary" />
                                        <CardTitle className="text-lg">Legal Research</CardTitle>
                                    </div>
                                    <CardDescription>
                                        Ask questions about your documents
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Link href="/rag">
                                        <Button className="w-full">
                                            <MessageSquare className="h-4 w-4 mr-2" />
                                            Start Research
                                        </Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    <div className="lg:col-span-1">
                        <PdfToolsSection />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function DashboardPage() {
    return (

        <DashboardContent />

    );
}
