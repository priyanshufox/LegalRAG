"use client";
import React from "react";
import { motion } from "motion/react";
import { FileText, Gavel, Building, BookOpen } from "lucide-react";

type Props = Record<string, never>;

export default function ForWhom(_props: Props): React.JSX.Element {
  const userTypes = [
    {
      title: "AI for Legal Consumers",
      description:
        "From deciphering complex terms to understanding rights, we've got you covered.",
      icon: FileText,
    },
    {
      title: "AI for Lawyers",
      description:
        "From deciphering complex terms to understanding rights, we've got you covered.",
      icon: Gavel,
    },
    {
      title: "AI for Law Firms",
      description:
        "From deciphering complex terms to understanding rights, we've got you covered.",
      icon: Building,
    },
    {
      title: "AI for Law Students",
      description:
        "From deciphering complex terms to understanding rights, we've got you covered.",
      icon: BookOpen,
    },
  ];

  return (
    <section className="relative bg-gray-900 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Main Heading */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Who is Legal RAG for?
          </h2>

          {/* Subtitle */}
          <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Whether you&apos;re a consumer, a student, a solo lawyer, or a full
            law firm - Legal RAG adapts to your legal needs and boosts your
            productivity.
          </p>
        </motion.div>

        {/* User Type Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {userTypes.map((userType, index) => (
            <motion.div
              key={userType.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-2xl p-8 relative group hover:bg-gray-750 transition-colors"
            >
              {/* Content */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {userType.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {userType.description}
                </p>
              </div>

              {/* Icon */}
              <div className="absolute bottom-6 left-6">
                <div className="w-12 h-12 border border-gray-600 rounded-lg flex items-center justify-center group-hover:border-gray-500 transition-colors">
                  <userType.icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
