'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { X, FileText, MessageSquare, Settings, Calendar, FileCheck, BookOpen, Search, User, Crown } from 'lucide-react';
import DocumentUpload from '@/components/DocumentUpload';
import PdfToolsSidebar from '@/components/PdfToolsSidebar';
import { UploadResponse } from '@/lib/api';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface RAGLayoutProps {
    children: React.ReactNode;
}

export default function RAGLayout({ children }: RAGLayoutProps) {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [rightSidebarOpen, setRightSidebarOpen] = useState(true);
    const [uploadedDocuments, setUploadedDocuments] = useState<UploadResponse[]>([]);
    const [activeView, setActiveView] = useState<'left' | 'main' | 'right'>('main');
    const pathname = usePathname();

    const handleUploadSuccess = (response: UploadResponse) => {
        setUploadedDocuments(prev => [...prev, response]);
    };

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const toggleRightSidebar = () => {
        setRightSidebarOpen(!rightSidebarOpen);
    };


    const getPageIcon = () => {
        switch (pathname) {
            case '/rag':
                return <MessageSquare className="h-6 w-6 text-primary" />;
            case '/rag/legal_guide':
                return <BookOpen className="h-6 w-6 text-primary" />;
            case '/rag/pdf_summarizer':
                return <FileCheck className="h-6 w-6 text-primary" />;
            case '/rag/relevant_cases':
                return <Search className="h-6 w-6 text-primary" />;
            case '/rag/timeline_extract':
                return <Calendar className="h-6 w-6 text-primary" />;
            default:
                return <MessageSquare className="h-6 w-6 text-primary" />;
        }
    };

    return (
        <div className="h-screen flex flex-col bg-slate-50">
            {/* Header */}
            <div className="bg-white border-b border-slate-200 p-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <Link href="/">
                            <h1 className="text-xl font-bold text-slate-900 hover:text-primary transition-colors cursor-pointer">LegalRAG</h1>
                        </Link>
                    </div>

                    <div className="flex items-center space-x-3">
                        <Button
                            variant="outline"
                            size="sm"
                            className="hidden sm:flex items-center space-x-1"
                        >
                            <Crown className="h-4 w-4" />
                            <span>Upgrade</span>
                        </Button>
                        <Button
                            variant="ghost"
                            size="sm"
                            className="w-8 h-8 p-0 rounded-full"
                        >
                            <User className="h-5 w-5" />
                        </Button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Bar */}
            <div className="xl:hidden bg-white p-2">
                <div className="flex space-x-1 bg-slate-100 rounded-lg p-1">
                    <Button
                        variant={activeView === 'left' ? 'default' : 'ghost'}
                        size="sm"
                        onClick={() => setActiveView('left')}
                        className="text-xs flex-1"
                    >
                        <FileText className="h-3 w-3 mr-1" />
                        Documents
                    </Button>
                    <Button
                        variant={activeView === 'main' ? 'default' : 'ghost'}
                        size="sm"
                        onClick={() => setActiveView('main')}
                        className="text-xs flex-1"
                    >
                        {getPageIcon()}
                        <span className="ml-1">Main</span>
                    </Button>
                    <Button
                        variant={activeView === 'right' ? 'default' : 'ghost'}
                        size="sm"
                        onClick={() => setActiveView('right')}
                        className="text-xs flex-1"
                    >
                        <Settings className="h-3 w-3 mr-1" />
                        Tools
                    </Button>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex overflow-hidden">
                {/* Left Sidebar - Documents */}
                <div className={`${activeView === 'left' ? 'w-full' : 'w-0'} xl:w-[20%] transition-all duration-300 overflow-hidden bg-white border-r border-slate-200 flex flex-col`}>
                    {/* Sidebar Header */}
                    <div className="p-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <FileText className="h-6 w-6 text-primary" />
                                <h2 className="font-semibold text-slate-900">Documents</h2>
                            </div>
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={toggleSidebar}
                                className="xl:hidden"
                            >
                                <X className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>

                    {/* Document Upload */}
                    <div className="flex-1 overflow-y-auto p-4 pt-0">
                        <DocumentUpload onUploadSuccess={handleUploadSuccess} />
                    </div>

                    {/* Sidebar Footer */}
                    <div className="p-4 border-t border-slate-200">
                        <div className="text-sm text-slate-500">
                            Uploaded: {uploadedDocuments.length} documents
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className={`${activeView === 'main' ? 'w-full' : 'w-0'} xl:w-[60%] transition-all duration-300 overflow-hidden`}>
                    {children}
                </div>

                {/* Right Sidebar - Tools */}
                <div className={`${activeView === 'right' ? 'w-full' : 'w-0'} xl:w-[20%] transition-all duration-300 overflow-hidden`}>
                    <PdfToolsSidebar
                        isOpen={true}
                        onToggle={toggleRightSidebar}
                    />
                </div>
            </div>
        </div>
    );
}
