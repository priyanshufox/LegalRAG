"use client";
import React, { useState } from "react";
import { motion } from "motion/react";

type Props = {};

export default function Header({}: Props) {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

  return (
    <header className="sticky top-0 z-50 py-4">
      <div className="max-w-7xl mx-auto px-8">
        <div className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-full shadow-lg">
          <div className="flex items-center justify-between h-16 px-8">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center space-x-3"
            >
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <div className="grid grid-cols-3 gap-px">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-1 h-1 bg-white rounded-full"
                    ></div>
                  ))}
                </div>
              </div>
              <span className="text-xl font-bold text-gray-900">LegalRAG</span>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {/* Products Dropdown */}
              <div className="relative">
                <button
                  onMouseEnter={() => {
                    if (hoverTimeout) clearTimeout(hoverTimeout);
                    setHoverTimeout(
                      setTimeout(() => setIsProductsOpen(true), 300)
                    );
                  }}
                  onMouseLeave={() => {
                    if (hoverTimeout) clearTimeout(hoverTimeout);
                    setHoverTimeout(
                      setTimeout(() => setIsProductsOpen(false), 150)
                    );
                  }}
                  className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 transition-colors"
                >
                  <span>Products</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {isProductsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    onMouseEnter={() => {
                      if (hoverTimeout) clearTimeout(hoverTimeout);
                      setIsProductsOpen(true);
                    }}
                    onMouseLeave={() => {
                      if (hoverTimeout) clearTimeout(hoverTimeout);
                      setHoverTimeout(
                        setTimeout(() => setIsProductsOpen(false), 150)
                      );
                    }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                  >
                    <a
                      href="/rag"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      <div className="font-medium">Document Chat</div>
                      <div className="text-gray-500 text-xs">
                        Upload and chat with legal documents
                      </div>
                    </a>
                    <a
                      href="/rag/legal_guide"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      <div className="font-medium">Legal Guide</div>
                      <div className="text-gray-500 text-xs">
                        AI-powered legal research assistant
                      </div>
                    </a>
                    <a
                      href="/rag/relevant_cases"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      <div className="font-medium">Case Research</div>
                      <div className="text-gray-500 text-xs">
                        Find similar cases and precedents
                      </div>
                    </a>
                    <a
                      href="/rag/timeline_extract"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      <div className="font-medium">Timeline Extraction</div>
                      <div className="text-gray-500 text-xs">
                        Extract chronological events from documents
                      </div>
                    </a>
                  </motion.div>
                )}
              </div>

              {/* Pricing */}
              <a
                href="/#pricing"
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                Pricing
              </a>

              {/* Security */}
              <a
                href="/#security"
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                Security
              </a>
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Book Demo Button */}
              <motion.a
                href="#demo"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gray-900 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
              >
                Book demo
              </motion.a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-gray-700 hover:text-gray-900"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 bg-white/80 backdrop-blur-md border border-gray-200 rounded-3xl shadow-lg py-4 space-y-4"
          >
            <div className="space-y-2">
              <div className="font-medium text-gray-900 px-4 py-2">
                Products
              </div>
              <a href="/rag" className="block px-6 py-2 text-sm text-gray-700">
                Document Chat
              </a>
              <a
                href="/rag/legal_guide"
                className="block px-6 py-2 text-sm text-gray-700"
              >
                Legal Guide
              </a>
              <a
                href="/rag/relevant_cases"
                className="block px-6 py-2 text-sm text-gray-700"
              >
                Case Research
              </a>
              <a
                href="/rag/timeline_extract"
                className="block px-6 py-2 text-sm text-gray-700"
              >
                Timeline Extraction
              </a>
            </div>

            <a href="/#pricing" className="block px-4 py-2 text-gray-700">
              Pricing
            </a>
            <a href="/#security" className="block px-4 py-2 text-gray-700">
              Security
            </a>

            <div className="px-4 pt-4 border-t border-gray-200">
              <div className="space-y-2">
                <a
                  href="#demo"
                  className="block bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium text-center"
                >
                  Book demo
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
}
