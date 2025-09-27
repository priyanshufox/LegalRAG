"use client";
import React from "react";
import { motion } from "motion/react";

type Props = Record<string, never>;

export default function Feature_1(_props: Props): React.JSX.Element {
  return (
    <section className="relative py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Focus on your legal practice.
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-8"
          >
            We&apos;ve got your legal research covered.
          </motion.h3>
        </div>

        {/* Subheading */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Explore features that boost your productivity. From document
            automation to advanced research, we&apos;ve got the hard work
            covered.
          </motion.p>
        </div>

        {/* Integration Hub */}
        <div className="relative flex items-center justify-center min-h-[500px]">
          {/* Connecting Lines */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Left side lines */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 800 500"
            >
              {/* ATS line */}
              <line
                x1="100"
                y1="150"
                x2="400"
                y2="250"
                stroke="#f97316"
                strokeWidth="2"
                strokeDasharray="5,5"
              />
              {/* HRIS line */}
              <line
                x1="100"
                y1="250"
                x2="400"
                y2="250"
                stroke="#f97316"
                strokeWidth="2"
                strokeDasharray="5,5"
              />
              {/* Accounting line */}
              <line
                x1="100"
                y1="350"
                x2="400"
                y2="250"
                stroke="#f97316"
                strokeWidth="2"
                strokeDasharray="5,5"
              />

              {/* Right side lines */}
              {/* Ticketing line */}
              <line
                x1="700"
                y1="150"
                x2="400"
                y2="250"
                stroke="#f97316"
                strokeWidth="2"
                strokeDasharray="5,5"
              />
              {/* CRM line */}
              <line
                x1="700"
                y1="250"
                x2="400"
                y2="250"
                stroke="#f97316"
                strokeWidth="2"
                strokeDasharray="5,5"
              />
              {/* File storage line */}
              <line
                x1="700"
                y1="350"
                x2="400"
                y2="250"
                stroke="#f97316"
                strokeWidth="2"
                strokeDasharray="5,5"
              />
            </svg>
          </div>

          {/* Central Hub */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <div className="w-32 h-32 bg-gray-100 rounded-3xl border-2 border-gray-200 flex items-center justify-center shadow-lg">
              {/* Central Logo - Placeholder for SVG */}
              <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center">
                <div className="text-white font-bold text-xl">M</div>
              </div>
            </div>
          </motion.div>

          {/* Left Side Integrations */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 space-y-8">
            {/* ATS */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4"
            >
              <div className="bg-white border border-gray-200 rounded-2xl px-6 py-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3">
                  <span className="text-lg font-semibold text-gray-800">
                    Case Summarizer
                  </span>
                  <div className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* HRIS */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4"
            >
              <div className="bg-white border border-gray-200 rounded-2xl px-6 py-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3">
                  <span className="text-lg font-semibold text-gray-800">
                    Timeline Extractor
                  </span>
                  <div className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <div className="w-2 h-2 bg-white rounded-full ml-1"></div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Accounting */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4"
            >
              <div className="bg-white border border-gray-200 rounded-2xl px-6 py-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3">
                  <span className="text-lg font-semibold text-gray-800">
                    Relevant Cases
                  </span>
                  <div className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center">
                    <div className="text-white text-xs">$</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side Integrations */}
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 space-y-8">
            {/* Ticketing */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4"
            >
              <div className="bg-white border border-gray-200 rounded-2xl px-6 py-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3">
                  <span className="text-lg font-semibold text-gray-800">
                    Legal Guide
                  </span>
                  <div className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CRM */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4"
            >
              <div className="bg-white border border-gray-200 rounded-2xl px-6 py-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3">
                  <span className="text-lg font-semibold text-gray-800">
                    Secure Session
                  </span>
                  <div className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* File storage */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4"
            >
              <div className="bg-white border border-gray-200 rounded-2xl px-6 py-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3">
                  <span className="text-lg font-semibold text-gray-800">
                    Accessible to All
                  </span>
                  <div className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
