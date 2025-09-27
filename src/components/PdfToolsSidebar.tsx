"use client";

import { Button } from "@/components/ui/button";
import {
  FileText,
  Calendar,
  FileCheck,
  X,
  BookOpen,
  Search,
  Settings,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface PdfToolsSidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

type ToolTab = "chat" | "guide" | "cases" | "timeline" | "summarizer";

export default function PdfToolsSidebar({
  isOpen,
  onToggle,
}: PdfToolsSidebarProps): React.JSX.Element {
  const pathname = usePathname();

  const getActiveTab = (): ToolTab => {
    switch (pathname) {
      case "/rag":
        return "chat";
      case "/rag/legal_guide":
        return "guide";
      case "/rag/relevant_cases":
        return "cases";
      case "/rag/timeline_extract":
        return "timeline";
      case "/rag/pdf_summarizer":
        return "summarizer";
      default:
        return "chat";
    }
  };

  const activeTab = getActiveTab();

  return (
    <div className="h-full bg-white border-l border-slate-200 flex flex-col">
      {/* Sidebar Header */}
      <div className="p-4 border-b border-slate-200">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <Settings className="h-6 w-6 text-primary" />
            <h2 className="font-semibold text-slate-900">Tools</h2>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onToggle}
            className="xl:hidden"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Navigation Tabs */}
        <div className="space-y-2">
          <Link href="/rag">
            <Button
              variant={activeTab === "chat" ? "default" : "ghost"}
              size="sm"
              className="w-full justify-start text-xs"
            >
              <FileText className="h-3 w-3 mr-2" />
              Chat Assistant
            </Button>
          </Link>

          <Link href="/rag/legal_guide">
            <Button
              variant={activeTab === "guide" ? "default" : "ghost"}
              size="sm"
              className="w-full justify-start text-xs"
            >
              <BookOpen className="h-3 w-3 mr-2" />
              Legal Guide
            </Button>
          </Link>

          <Link href="/rag/relevant_cases">
            <Button
              variant={activeTab === "cases" ? "default" : "ghost"}
              size="sm"
              className="w-full justify-start text-xs"
            >
              <Search className="h-3 w-3 mr-2" />
              Relevant Cases
            </Button>
          </Link>

          <Link href="/rag/timeline_extract">
            <Button
              variant={activeTab === "timeline" ? "default" : "ghost"}
              size="sm"
              className="w-full justify-start text-xs"
            >
              <Calendar className="h-3 w-3 mr-2" />
              Timeline Extractor
            </Button>
          </Link>

          <Link href="/rag/pdf_summarizer">
            <Button
              variant={activeTab === "summarizer" ? "default" : "ghost"}
              size="sm"
              className="w-full justify-start text-xs"
            >
              <FileCheck className="h-3 w-3 mr-2" />
              PDF Summarizer
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
