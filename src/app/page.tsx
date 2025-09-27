"use client";

import React from "react";
import { ArrowRight, Sparkles, Zap, Shield, Brain } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/section/Hero";
import Feature_1 from "@/components/section/Feature_1";
import Feature_2 from "@/components/section/Feature_2";
import Feature_3 from "@/components/section/Feature_3";
import Security from "@/components/section/Security";
import Testimonial from "@/components/section/Testimonial";
import Footer from "@/components/section/Footer";
import Header from "@/components/section/Header";
import Pricing from "@/components/section/Pricing";
import ForWhom from "@/components/section/ForWhom";

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <Header />
      <Hero />
      <Feature_1 />
      <ForWhom />
      <Feature_2 />
      <Feature_3 />
      <Security />
      <Pricing />
      <Testimonial />
      <Footer />
    </>
  );

  // return (
  //   <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
  //     {/* Navigation */}
  //     <nav className="fixed top-0 w-full z-50 bg-white shadow-lg border-b border-slate-200">
  //       <div className="container mx-auto px-6 py-4">
  //         <div className="flex justify-between items-center">
  //           <div className="flex items-center space-x-3">
  //             <div className="p-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg">
  //               <Scale className="h-6 w-6 text-white" />
  //             </div>
  //             <span className="text-xl font-bold text-gray-700">
  //               Legal RAG
  //             </span>
  //           </div>
  //           <div className="hidden md:flex items-center space-x-8">
  //             <ul className="flex space-x-8">
  //               <li>
  //                 <button
  //                   onClick={() => scrollToSection('home')}
  //                   className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium relative group"
  //                 >
  //                   Home
  //                   <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
  //                 </button>
  //               </li>
  //               <li>
  //                 <button
  //                   onClick={() => scrollToSection('features')}
  //                   className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium relative group"
  //                 >
  //                   Features
  //                   <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
  //                 </button>
  //               </li>
  //               <li>
  //                 <button
  //                   onClick={() => scrollToSection('how-it-works')}
  //                   className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium relative group"
  //                 >
  //                   How it Works
  //                   <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
  //                 </button>
  //               </li>
  //             </ul>
  //             <div className="flex items-center space-x-4">
  //               <button
  //                 onClick={() => scrollToSection('team')}
  //                 className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium relative group"
  //               >
  //                 Meet Our Team
  //                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
  //               </button>
  //               <Link href="/rag">
  //                 <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full px-6 py-2 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium">
  //                   Get Started
  //                 </button>
  //               </Link>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </nav>

  //     {/* Hero Section */}
  //     <section
  //       id="home"
  //       className="min-h-screen flex flex-col justify-center items-center text-center relative overflow-hidden"
  //     >
  //       {/* Modern gradient background */}
  //       <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-slate-900"></div>
  //       <div className="absolute inset-0 bg-cover bg-center opacity-20">
  //         <img src="/banner.jpg" alt="banner" className="w-full h-full object-cover" />
  //       </div>

  //       {/* Animated background elements */}
  //       <div className="absolute inset-0 overflow-hidden">
  //         <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
  //         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
  //       </div>

  //       <div className="container mx-auto px-6 relative z-10">
  //         {/* Badge */}
  //         <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
  //           <Sparkles className="h-4 w-4 text-yellow-400" />
  //           <span className="text-sm font-medium text-white">AI-Powered Legal Assistant</span>
  //         </div>

  //         <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent leading-tight">
  //           Welcome to Legal RAG
  //         </h1>
  //         <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-12 leading-relaxed text-slate-200">
  //           Your AI-powered legal assistant with encrypted document handling, case summarization, and intelligent past case search.
  //         </p>

  //         <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
  //           <Link href="/rag">
  //             <Button
  //               size="lg"
  //               className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-8 py-4 rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 group"
  //             >
  //               Get Started
  //               <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
  //             </Button>
  //           </Link>
  //           <Button
  //             size="lg"
  //             variant="outline"
  //             className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 font-bold px-8 py-4 rounded-xl backdrop-blur-sm transition-all duration-300"
  //             onClick={() => scrollToSection('features')}
  //           >
  //             Explore Features
  //           </Button>
  //         </div>

  //         {/* Stats */}

  //       </div>
  //     </section>

  //     {/* Features Section */}
  //     <section id="features" className="py-24 bg-gradient-to-b from-white to-slate-50">
  //       <div className="container mx-auto px-6">
  //         <div className="text-center mb-20">
  //           <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 rounded-full px-4 py-2 mb-6">
  //             <Zap className="h-4 w-4" />
  //             <span className="text-sm font-medium">Powerful Features</span>
  //           </div>
  //           <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-6">
  //             Everything You Need
  //           </h2>
  //           <p className="text-xl text-slate-600 max-w-3xl mx-auto">
  //             Advanced AI-powered tools designed specifically for legal professionals
  //           </p>
  //         </div>

  //         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
  //           <Card className="group border-0 shadow-lg bg-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden">
  //             <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
  //             <CardHeader className="text-center relative z-10">
  //               <div className="flex justify-center mb-6">
  //                 <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
  //                   <Shield className="h-8 w-8 text-white" />
  //                 </div>
  //               </div>
  //               <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
  //                 Encrypted File Handling
  //               </CardTitle>
  //             </CardHeader>
  //             <CardContent className="relative z-10">
  //               <p className="text-slate-600 text-center leading-relaxed">
  //                 Securely upload and manage your confidential case files with bank-level encryption.
  //               </p>
  //             </CardContent>
  //           </Card>

  //           <Card className="group border-0 shadow-lg bg-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden">
  //             <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
  //             <CardHeader className="text-center relative z-10">
  //               <div className="flex justify-center mb-6">
  //                 <div className="p-4 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 shadow-lg group-hover:shadow-green-500/25 transition-all duration-300">
  //                   <Brain className="h-8 w-8 text-white" />
  //                 </div>
  //               </div>
  //               <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-green-600 transition-colors duration-300">
  //                 AI PDF Summarizer
  //               </CardTitle>
  //             </CardHeader>
  //             <CardContent className="relative z-10">
  //               <p className="text-slate-600 text-center leading-relaxed">
  //                 Quickly extract and summarize lengthy legal documents with advanced AI analysis.
  //               </p>
  //             </CardContent>
  //           </Card>

  //           <Card className="group border-0 shadow-lg bg-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden">
  //             <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
  //             <CardHeader className="text-center relative z-10">
  //               <div className="flex justify-center mb-6">
  //                 <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-600 shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300">
  //                   <Calendar className="h-8 w-8 text-white" />
  //                 </div>
  //               </div>
  //               <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors duration-300">
  //                 Timeline Extractor
  //               </CardTitle>
  //             </CardHeader>
  //             <CardContent className="relative z-10">
  //               <p className="text-slate-600 text-center leading-relaxed">
  //                 Generate clear chronological case timelines automatically from complex documents.
  //               </p>
  //             </CardContent>
  //           </Card>

  //           <Card className="group border-0 shadow-lg bg-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden">
  //             <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
  //             <CardHeader className="text-center relative z-10">
  //               <div className="flex justify-center mb-6">
  //                 <div className="p-4 rounded-2xl bg-gradient-to-r from-orange-500 to-red-600 shadow-lg group-hover:shadow-orange-500/25 transition-all duration-300">
  //                   <Search className="h-8 w-8 text-white" />
  //                 </div>
  //               </div>
  //               <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors duration-300">
  //                 Smart Case Finder
  //               </CardTitle>
  //             </CardHeader>
  //             <CardContent className="relative z-10">
  //               <p className="text-slate-600 text-center leading-relaxed">
  //                 AI-powered search and analysis for relevant past cases and legal precedents.
  //               </p>
  //             </CardContent>
  //           </Card>
  //         </div>
  //       </div>
  //     </section>

  //     {/* How it Works Section */}
  //     <section id="how-it-works" className="py-24 bg-gradient-to-b from-slate-50 to-white">
  //       <div className="container mx-auto px-6">
  //         <div className="text-center mb-20">
  //           <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 rounded-full px-4 py-2 mb-6">
  //             <FileText className="h-4 w-4" />
  //             <span className="text-sm font-medium">Simple Process</span>
  //           </div>
  //           <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-6">
  //             How It Works
  //           </h2>
  //           <p className="text-xl text-slate-600 max-w-3xl mx-auto">
  //             Get started in minutes with our streamlined workflow
  //           </p>
  //         </div>

  //         <div className="max-w-5xl mx-auto">
  //           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
  //             <div className="text-center group">
  //               <div className="relative mb-6">
  //                 <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300 transform group-hover:scale-110">
  //                   <span className="text-2xl font-bold text-white">1</span>
  //                 </div>
  //                 <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform translate-x-4"></div>
  //               </div>
  //               <h3 className="text-lg font-bold text-slate-900 mb-3">Upload Documents</h3>
  //               <p className="text-slate-600 leading-relaxed">
  //                 Securely upload your confidential legal documents with end-to-end encryption.
  //               </p>
  //             </div>

  //             <div className="text-center group">
  //               <div className="relative mb-6">
  //                 <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300 transform group-hover:scale-110">
  //                   <span className="text-2xl font-bold text-white">2</span>
  //                 </div>
  //                 <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transform translate-x-4"></div>
  //               </div>
  //               <h3 className="text-lg font-bold text-slate-900 mb-3">AI Analysis</h3>
  //               <p className="text-slate-600 leading-relaxed">
  //                 Advanced AI extracts summaries, timelines, and key insights from your documents.
  //               </p>
  //             </div>

  //             <div className="text-center group">
  //               <div className="relative mb-6">
  //                 <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-pink-500/25 transition-all duration-300 transform group-hover:scale-110">
  //                   <span className="text-2xl font-bold text-white">3</span>
  //                 </div>
  //                 <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-pink-500 to-orange-500 transform translate-x-4"></div>
  //               </div>
  //               <h3 className="text-lg font-bold text-slate-900 mb-3">Smart Search</h3>
  //               <p className="text-slate-600 leading-relaxed">
  //                 Search and compare past cases with intelligent matching algorithms.
  //               </p>
  //             </div>

  //             <div className="text-center group">
  //               <div className="relative mb-6">
  //                 <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-orange-500/25 transition-all duration-300 transform group-hover:scale-110">
  //                   <span className="text-2xl font-bold text-white">4</span>
  //                 </div>
  //               </div>
  //               <h3 className="text-lg font-bold text-slate-900 mb-3">Export Results</h3>
  //               <p className="text-slate-600 leading-relaxed">
  //                 Download or share comprehensive reports ready for legal proceedings.
  //               </p>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </section>

  //     {/* Team Section */}
  //     <section id="team" className="py-24 bg-gradient-to-b from-white to-slate-50">
  //       <div className="container mx-auto px-6">
  //         <div className="text-center mb-20">
  //           <div className="inline-flex items-center gap-2 bg-green-100 text-green-600 rounded-full px-4 py-2 mb-6">
  //             <Users className="h-4 w-4" />
  //             <span className="text-sm font-medium">Our Team</span>
  //           </div>
  //           <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-6">
  //             Meet Our Team
  //           </h2>
  //           <p className="text-xl text-slate-600 max-w-3xl mx-auto">
  //             The brilliant minds behind Legal RAG&apos;s innovative technology
  //           </p>
  //         </div>

  //         <div className="flex flex-wrap justify-center gap-8">
  //           <Card className="w-72 border-0 shadow-lg bg-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group">
  //             <CardContent className="text-center p-8">
  //               <div className="relative mb-6">
  //                 <Image
  //                   src="/profile.png"
  //                   alt="Priyanshu Rathore"
  //                   width={112}
  //                   height={112}
  //                   className="w-28 h-28 rounded-full mx-auto object-cover border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-300"
  //                 />
  //                 <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
  //                   <span className="text-white text-sm font-bold">P</span>
  //                 </div>
  //               </div>
  //               <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">Priyanshu Rathore</h3>
  //               <p className="text-slate-600 font-medium">Co-Creator, Software Engineer</p>
  //               <div className="mt-4 flex justify-center space-x-3">
  //                 <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
  //                 <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
  //                 <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
  //               </div>
  //             </CardContent>
  //           </Card>

  //           <Card className="w-72 border-0 shadow-lg bg-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group">
  //             <CardContent className="text-center p-8">
  //               <div className="relative mb-6">
  //                 <Image
  //                   src="/ragh.jpg"
  //                   alt="Raghav Goel"
  //                   width={112}
  //                   height={112}
  //                   className="w-28 h-28 rounded-full mx-auto object-cover border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-300"
  //                 />
  //                 <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
  //                   <span className="text-white text-sm font-bold">R</span>
  //                 </div>
  //               </div>
  //               <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-green-600 transition-colors duration-300">Raghav Goel</h3>
  //               <p className="text-slate-600 font-medium">Co-Creator, AI Engineer</p>
  //               <div className="mt-4 flex justify-center space-x-3">
  //                 <div className="w-2 h-2 bg-green-500 rounded-full"></div>
  //                 <div className="w-2 h-2 bg-green-500 rounded-full"></div>
  //                 <div className="w-2 h-2 bg-green-500 rounded-full"></div>
  //               </div>
  //             </CardContent>
  //           </Card>

  //         </div>
  //       </div>
  //     </section>

  //     {/* Footer */}
  //     <footer className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-16">
  //       <div className="container mx-auto px-6">
  //         <div className="text-center">
  //           <div className="flex items-center justify-center space-x-3 mb-6">
  //             <div className="p-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg">
  //               <Scale className="h-8 w-8 text-white" />
  //             </div>
  //             <span className="text-2xl font-bold">Legal RAG</span>
  //           </div>
  //           <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
  //             Empowering legal professionals with AI-driven insights and secure document management.
  //           </p>
  //           <div className="flex items-center justify-center space-x-2 text-slate-400">
  //             <span>© 2025 Legal RAG</span>
  //             <span>•</span>
  //             <span>Built with</span>
  //             <Heart className="h-4 w-4 text-red-500 fill-current" />
  //             <span>by Team Teapot 201</span>
  //           </div>
  //         </div>
  //       </div>
  //     </footer>
  //   </div>
  // );
}
