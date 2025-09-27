"use client";
import React from "react";
import { motion } from "motion/react";

type Props = {};

export default function Feature_2({}: Props) {
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
            Why our AI in law is better?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-4xl mx-auto"
          >
            In contrast to others, our LegalTech software is quick, easy, and
            wallet-friendly.
          </motion.p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Private */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Private</h3>
            <p className="text-gray-600 mb-6">
              We stand firm on privacy, ensuring that users' conversations
              remain secure and anonymous.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Your legal documents are encrypted end-to-end with no data stored
              on our servers. Complete privacy for confidential legal matters.
            </p>
          </motion.div>

          {/* 75% Time Saved */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              75% Time saved
            </h3>
            <p className="text-gray-600 mb-6">On routine tasks.</p>

            {/* Efficiency Chart */}
            <div className="space-y-4">
              <div className="flex items-end space-x-4">
                <div className="text-center">
                  <div className="w-16 h-8 bg-gray-300 rounded-t mb-2"></div>
                  <div className="text-xs text-gray-600">Without AI</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-24 bg-gray-800 rounded-t mb-2"></div>
                  <div className="text-xs text-gray-600">With AI</div>
                </div>
              </div>
              <div className="text-center text-sm text-gray-500">
                25% → 100% efficiency
              </div>
            </div>
          </motion.div>

          {/* Fast / 5 Seconds */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Fast</h3>
            <p className="text-gray-600 mb-4">
              The fastest online lawyer service, ideal for avoiding expenses and
              appointments.
            </p>

            {/* File Processing Demo */}
            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-6 h-6 bg-gray-300 rounded"></div>
                <div>
                  <div className="text-sm font-medium text-gray-800">
                    Legal_claim2.pdf
                  </div>
                  <div className="text-xs text-gray-500">854KB</div>
                </div>
              </div>
              <div className="text-sm text-gray-600 mb-2">Summarizing...</div>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: "75%" }}
                ></div>
              </div>
              <div className="text-xs text-gray-500">Remaining: 3s</div>
            </div>

            <h4 className="text-xl font-bold text-gray-900 mb-2">5 Seconds</h4>
            <p className="text-gray-600">To summarize any document.</p>
          </motion.div>

          {/* 24/7 Support */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              24/7 Support
            </h3>
            <p className="text-gray-600 mb-6">
              Our customer support team is always available to assist you with
              any questions about the platform.
            </p>

            {/* Support Icons Grid */}
            <div className="grid grid-cols-3 gap-3">
              {[...Array(9)].map((_, i) => (
                <div
                  key={i}
                  className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center"
                >
                  <div className="w-4 h-4 bg-gray-300 rounded"></div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 90% Cost Reduction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              90% Cost reduction
            </h3>
            <p className="text-gray-600 mb-6">In legal services.</p>

            {/* Cost Comparison */}
            <div className="space-y-4">
              <div className="flex items-end space-x-2">
                <div className="w-8 h-6 bg-gray-200 rounded-t"></div>
                <div className="w-8 h-6 bg-gray-200 rounded-t"></div>
                <div className="w-8 h-6 bg-gray-200 rounded-t"></div>
                <div className="text-xs text-gray-500 ml-2">Other</div>
              </div>

              <div className="flex items-center justify-center">
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">A</span>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 text-blue-600 rounded-full px-3 py-1 text-sm font-medium inline-block">
                  -90%
                </div>
              </div>
            </div>
          </motion.div>

          {/* Accessible to All */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Accessible to All
            </h3>
            <p className="text-gray-600 mb-6">
              No matter your firm size or budget, our AI-powered legal tools are
              designed to be accessible and affordable for everyone.
            </p>

            {/* Accessibility Features */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">
                  Free tier available
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">No setup fees</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">
                  Pay-as-you-go pricing
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
