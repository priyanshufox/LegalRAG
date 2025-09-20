'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Menu, X, Home, FileText, MessageSquare, Settings } from 'lucide-react';
import DocumentUpload from './DocumentUpload';
import ChatInterface from './ChatInterface';
import PdfToolsSidebar from './PdfToolsSidebar';
import { UploadResponse } from '@/lib/api';
import Link from 'next/link';

export default function RAGLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [rightSidebarOpen, setRightSidebarOpen] = useState(true);
    const [uploadedDocuments, setUploadedDocuments] = useState<UploadResponse[]>([]);

    const handleUploadSuccess = (response: UploadResponse) => {
        setUploadedDocuments(prev => [...prev, response]);
    };

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const toggleRightSidebar = () => {
        setRightSidebarOpen(!rightSidebarOpen);
    };

    return (
        <div className="h-screen flex bg-slate-50">
            {/* Sidebar */}
            <div className={`${sidebarOpen ? 'w-80' : 'w-0'} transition-all duration-300 overflow-hidden bg-white border-r border-slate-200 flex flex-col`}>
                {/* Sidebar Header */}
                <div className="p-4 border-b border-slate-200">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <FileText className="h-6 w-6 text-primary" />
                            <h2 className="font-semibold text-slate-900">Documents</h2>
                        </div>
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={toggleSidebar}
                            className="lg:hidden"
                        >
                            <X className="h-4 w-4" />
                        </Button>
                    </div>
                </div>

                {/* Document Upload */}
                <div className="flex-1 overflow-y-auto p-4">
                    <DocumentUpload onUploadSuccess={handleUploadSuccess} />
                </div>

                {/* Sidebar Footer */}
                <div className="p-4 border-t border-slate-200">
                    <div className="space-y-2">
                        <div className="text-sm text-slate-500">
                            Uploaded: {uploadedDocuments.length} documents
                        </div>
                        <Link href="/">
                            <Button
                                variant="outline"
                                size="sm"
                                className="w-full"
                            >
                                <Home className="h-4 w-4 mr-2" />
                                Home
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Main Header */}
                <div className="bg-white border-b border-slate-200 p-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={toggleSidebar}
                                className="lg:hidden"
                            >
                                <Menu className="h-5 w-5" />
                            </Button>
                            <div className="flex items-center space-x-2">
                                <MessageSquare className="h-6 w-6 text-primary" />
                                <h1 className="text-xl font-semibold text-slate-900">Legal Research Assistant</h1>
                            </div>
                        </div>
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={toggleRightSidebar}
                        >
                            <Settings className="h-5 w-5" />
                        </Button>
                    </div>
                </div>

                {/* Chat Interface */}
                <div className="flex-1 overflow-hidden">
                    <Card className="h-full border-0 rounded-none shadow-none">
                        <ChatInterface />
                    </Card>
                </div>
            </div>

            {/* Right Sidebar - PDF Tools */}
            <PdfToolsSidebar
                isOpen={rightSidebarOpen}
                onToggle={toggleRightSidebar}
            />
        </div>
    );
}
