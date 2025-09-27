"use client";
import React from "react";
import { motion } from "motion/react";

type Props = {};

export default function Testimonial({}: Props) {
  return (
    <section className="relative py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Stories from teams who've
          </h2>
          <h3 className="text-4xl md:text-6xl font-bold text-gray-400 mb-8">
            leveled up with our support.
          </h3>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how we helped organizations streamline workflows, boost
            performance, and scale faster.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Maria Davis Testimonial */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-yellow-100 via-orange-100 to-red-100 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
          >
            {/* Background Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>

            {/* Background Image */}
            <div className="absolute inset-0">
              <div className="w-full h-full bg-gradient-to-br from-yellow-200 via-orange-200 to-red-200 opacity-30"></div>
              {/* Placeholder for actual image */}
              <div className="absolute right-0 top-0 w-2/3 h-full">
                <div className="w-full h-full bg-gradient-to-l from-black/20 to-transparent flex items-center justify-end pr-8">
                  {/* Silhouette placeholder - would be replaced with actual image */}
                  <div className="w-48 h-48 bg-black/10 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="relative z-10 p-8 h-full flex flex-col justify-between min-h-[400px]">
              {/* User Info */}
              <div className="mb-8">
                <div className="inline-flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-lg">M</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800">
                      Maria Davis
                    </h4>
                    <p className="text-gray-600">Consumer Rights Advocate</p>
                  </div>
                </div>
              </div>

              {/* Testimonial Quote */}
              <div className="mb-8">
                <p className="text-gray-700 text-lg leading-relaxed max-w-sm">
                  "I've been able to draft consumer complaint letters
                  effortlessly. It's amazing how it simplifies the process and
                  provides a professional touch to all my correspondence."
                </p>
              </div>
            </div>
          </motion.div>

          {/* Elizabeth Martin Testimonial */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
          >
            {/* Background Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/60 to-transparent"></div>

            {/* Background Image */}
            <div className="absolute inset-0">
              <div className="w-full h-full bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 opacity-40"></div>
              {/* Placeholder for actual image */}
              <div className="absolute right-0 top-0 w-2/3 h-full">
                <div className="w-full h-full bg-gradient-to-l from-gray-300/30 to-transparent flex items-center justify-end pr-8">
                  {/* Geometric pattern placeholder */}
                  <div className="w-32 h-32 bg-gray-400/20 transform rotate-45"></div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="relative z-10 p-8 h-full flex flex-col justify-between min-h-[400px]">
              {/* User Info */}
              <div className="mb-8">
                <div className="inline-flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-lg">E</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800">
                      Elizabeth Martin
                    </h4>
                    <p className="text-gray-600">Litigation Lawyer</p>
                  </div>
                </div>
              </div>

              {/* Testimonial Quote */}
              <div className="mb-8">
                <p className="text-gray-700 text-lg leading-relaxed max-w-sm">
                  "The litigation analysis feature is a godsend. It has helped
                  me in identifying trends and preparing better for my cases.
                  The app is a true companion for any modern-day lawyer."
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          <div>
            <div className="text-4xl font-bold text-gray-900 mb-2">500+</div>
            <p className="text-gray-600">Legal documents processed daily</p>
          </div>

          <div>
            <div className="text-4xl font-bold text-gray-900 mb-2">95%</div>
            <p className="text-gray-600">Accuracy in legal document analysis</p>
          </div>

          <div>
            <div className="text-4xl font-bold text-gray-900 mb-2">10x</div>
            <p className="text-gray-600">
              Faster research compared to manual methods
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
