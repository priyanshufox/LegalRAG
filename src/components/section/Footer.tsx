"use client";
import React from "react";
import { motion } from "motion/react";
import WorldMap from "@/components/ui/world-map";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="relative bg-gray-100 py-20 overflow-hidden">
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
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-2">
                Introducing Legal-AI
              </h2>
              <h3 className="text-4xl md:text-6xl font-light text-gray-500 mb-8">
                Our smartest models
              </h3>
              <h4 className="text-4xl md:text-6xl font-light text-gray-500 mb-2">
                capable of{" "}
                <span className="font-bold text-gray-900">analyzing</span>
              </h4>
              <h5 className="text-4xl md:text-6xl font-bold text-gray-900">
                how law works
              </h5>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                A new category of models built to understand and predict how
                legal systems behave in complex, real-world scenarios
              </p>

              <motion.a
                href="/rag"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="inline-flex items-center justify-center rounded-2xl bg-red-600 px-8 py-4 text-lg font-medium text-white shadow-lg hover:bg-red-500 transition-all duration-300"
              >
                <span className="flex items-center space-x-2">
                  <span className="w-4 h-4 bg-white/20 rounded-sm flex items-center justify-center">
                    <div className="w-2 h-2 bg-orange-400 rounded-sm"></div>
                  </span>
                  <span>Start Research</span>
                </span>
              </motion.a>
            </div>
          </motion.div>

          {/* Right Side - World Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative flex-1 h-full"
          >
            <div className="w-full h-full">
              <WorldMap
                dots={[
                  {
                    start: {
                      lat: 64.2008,
                      lng: -149.4937,
                    }, // Alaska (Fairbanks)
                    end: {
                      lat: 34.0522,
                      lng: -118.2437,
                    }, // Los Angeles
                  },
                  {
                    start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
                    end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
                  },
                  {
                    start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
                    end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
                  },
                  {
                    start: { lat: 51.5074, lng: -0.1278 }, // London
                    end: { lat: 28.6139, lng: 77.209 }, // New Delhi
                  },
                  {
                    start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                    end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
                  },
                  {
                    start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                    end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
                  },
                ]}
                lineColor="#ef4444"
              />
            </div>
          </motion.div>
        </div>

        {/* Large LEGALRAG Typography */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 pt-12 border-t border-gray-300"
        >
          <div className="mx-auto text-center space-y-8">
            {/* Large LEGALRAG Typography */}
            <div className="relative -mx-8 md:-mx-16 lg:-mx-32 flex justify-center">
              <h1 className="text-9xl md:text-[10rem] lg:text-[14rem] xl:text-[18rem] font-bold text-gray-900 leading-none overflow-hidden text-center">
                LEGALRAG
              </h1>
            </div>

            {/* Developers Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                Developers
              </h3>
              <div className="flex justify-center items-center space-x-8">
                <div className="text-center">
                  <p className="text-gray-700 font-medium">Raghav Goel</p>
                  <a
                    href="https://twitter.com/raaaghavvvvv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors text-sm"
                  >
                    @raghavgoel
                  </a>
                </div>
                <div className="text-center">
                  <p className="text-gray-700 font-medium">Priyanshu Rathore</p>
                  <a
                    href="https://twitter.com/priyanshufox"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors text-sm"
                  >
                    @priyanshurathore
                  </a>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="mt-12 pt-8 border-t border-gray-200 text-center">
              <p className="text-sm text-gray-500">
                © {new Date().getFullYear()} Legal RAG. All rights reserved.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
