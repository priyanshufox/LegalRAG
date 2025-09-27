"use client";
import React from "react";
import { motion } from "motion/react";

type Props = {};

export default function Security({}: Props) {
  return (
    <section id="security" className="relative py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Security and compliance are our foundation
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Designed from the ground up to safeguard your customer data,
                Legal RAG adheres to the industry's highest standards of
                security and privacy.
              </p>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-gray-900 text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors"
              >
                Security at Legal RAG
              </motion.button>
            </div>
          </motion.div>

          {/* Right Side - Security Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Solution 1 - Website Based Shared Resource */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Website Based Shared Resource
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Cloud-hosted solution with enterprise-grade security.
                    Perfect for teams needing quick access and collaboration
                    with industry-standard data protection.
                  </p>
                  <div className="flex items-center mt-3 space-x-2">
                    <span className="inline-flex items-center px-2 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full">
                      99.9% Uptime
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Solution 2 - Virtual Machine (AWS) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-purple-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Virtual Machine Deployment
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Private cloud instances on AWS/Azure for law firms handling
                    confidential data. Complete isolation with dedicated
                    resources and enhanced security controls.
                  </p>
                  <div className="flex items-center mt-3 space-x-2">
                    <span className="inline-flex items-center px-2 py-1 bg-orange-50 text-orange-700 text-xs font-medium rounded-full">
                      Dedicated Infrastructure
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Solution 3 - Complete Offline OSS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Complete Offline OSS Solution
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    On-premise deployment using open-source models. Maximum
                    security with zero data transmission - your sensitive data
                    never leaves your device.
                  </p>
                  <div className="flex items-center mt-3 space-x-2">
                    <span className="inline-flex items-center px-2 py-1 bg-amber-100 text-gray-700 text-xs font-medium rounded-full">
                      Open Source Models
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Compliance Section */}
      </div>
    </section>
  );
}
