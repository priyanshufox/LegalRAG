// "use client";
import React from "react";
import { motion } from "motion/react";
import Spline from "@splinetool/react-spline";

type Props = Record<string, never>;

export default function Hero(_props: Props): React.JSX.Element {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[90vh] overflow-hidden bg-gray-100 text-black">
      {/* Main Grid Layout */}
      <div className="relative z-10 w-full max-w-[1920px] mx-auto px-8">
        {/* Spline Background Canvas */}
        <div className="absolute inset-0 w-full h-full flex items-center justify-center z-50">
          <div className="w-[55%] h-[70%]">
            <Spline scene="https://prod.spline.design/x30ib95ud4vyhp81/scene.splinecode" />
          </div>
        </div>

        {/* Main Content Row */}
        <div className="relative z-10 flex justify-between items-center h-[80vh]">
          {/* Left Side - LEGAL. RESEARCH. */}
          <div className="text-left">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl lg:text-8xl font-bold tracking-tight text-black"
            >
              LEGAL
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl lg:text-7xl font-bold tracking-tight text-black"
            >
              RESEARCH
            </motion.h2>
          </div>

          {/* Right Side - AI. POWERED. */}
          <div className="text-right">
            <motion.h3
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl lg:text-8xl font-bold tracking-tight text-black"
            >
              AI
            </motion.h3>
            <motion.h4
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl lg:text-7xl font-bold tracking-tight text-black"
            >
              POWERED
            </motion.h4>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col justify-center items-center pb-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-md text-lg text-gray-600 mb-8 text-center"
        >
          Legal RAG brings AI to a new era of legal research and document
          analysis, revolutionizing how legal professionals work.
        </motion.p>

        <motion.a
          href="/rag"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
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
    </section>
  );
}
