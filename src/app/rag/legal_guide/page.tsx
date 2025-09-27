"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  BookOpen,
  Search,
  Loader2,
  FileText,
  Calendar,
  Scale,
} from "lucide-react";
import { Response } from "@/components/ai-elements/response";

export default function LegalGuidePage() {
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  interface LegalResult {
    id: string;
    question: string;
    answer: string;
    sources: string[];
    timestamp: Date;
  }
  const [results, setResults] = useState<LegalResult[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    if (!query.trim()) return;

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/proxy/tools/legal-guide", {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: query.trim(),
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      setResults([
        {
          id: Date.now().toString(),
          question: query,
          answer: data.legal_advice,
          sources: [],
          timestamp: new Date(),
        },
      ]);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to search legal guide"
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !isLoading) {
      handleSearch();
    }
  };

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Header */}
      <div className="p-6 border-b border-slate-200">
        <div className="flex items-center space-x-3 mb-4">
          <BookOpen className="h-8 w-8 text-primary" />
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Legal Guide</h1>
            <p className="text-slate-600">
              Search for legal information and guidance
            </p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex space-x-2">
          <Input
            type="text"
            placeholder="Ask about legal procedures, regulations, or case law..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1"
            disabled={isLoading}
          />
          <Button
            onClick={handleSearch}
            disabled={!query.trim() || isLoading}
            className="px-6"
          >
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Search className="h-4 w-4" />
            )}
            Search
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

        {results.length === 0 && !isLoading && (
          <div className="text-center py-12">
            <Scale className="h-16 w-16 text-slate-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-slate-900 mb-2">
              Legal Research Assistant
            </h3>
            <p className="text-slate-600 max-w-md mx-auto">
              Ask questions about legal procedures, regulations, case law, or
              any legal topic. I&apos;ll help you find relevant information from
              your uploaded documents.
            </p>
          </div>
        )}

        {results.map((result) => (
          <Card key={result.id} className="mb-4">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="h-5 w-5 text-primary" />
                <span>Legal Guidance</span>
              </CardTitle>
              <CardDescription>Question: {result.question}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="prose prose-sm max-w-none">
                <Response className="whitespace-pre-wrap">
                  {result.answer}
                </Response>
              </div>

              {result.sources && result.sources.length > 0 && (
                <div>
                  <h4 className="font-medium text-sm mb-2">Sources:</h4>
                  <div className="space-y-1">
                    {result.sources.map((source: string, index: number) => (
                      <div
                        key={index}
                        className="text-sm text-slate-600 bg-slate-50 p-2 rounded"
                      >
                        {source}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex items-center space-x-2 text-xs text-slate-500">
                <Calendar className="h-3 w-3" />
                <span>{result.timestamp.toLocaleString()}</span>
              </div>
            </CardContent>
          </Card>
        ))}

        {isLoading && (
          <Card>
            <CardContent className="p-6 text-center">
              <Loader2 className="h-8 w-8 animate-spin mx-auto mb-2 text-primary" />
              <p className="text-slate-600">Searching legal database...</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
