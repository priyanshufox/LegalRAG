"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { Check, X, Info, Server, Shield, Lock, Users, Zap } from "lucide-react";

type Props = {};

export default function Pricing({}: Props) {
  const [currency, setCurrency] = useState<"USD" | "INR">("INR");
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "yearly"
  );

  const pricingData = {
    USD: {
      free: { price: "0", period: "Forever" },
      subscription: { monthly: "29", yearly: "24" },
      license: { price: "299" },
    },
    INR: {
      free: { price: "0", period: "Forever" },
      subscription: { monthly: "2,499", yearly: "1,999" },
      license: { price: "24,999" },
    },
  };

  const currentPricing = pricingData[currency];

  return (
    <section id="pricing" className="relative bg-gray-50 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Our pricing
          </h1>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Working as a solo practitioner? Part of a law firm? We&apos;ve got
            you covered. Choose a subscription to get all collaborative
            features, along with a <strong>30-day free trial</strong> — no
            credit card needed. Or, buy a one-time license if you work alone and
            need maximum security.
          </p>
        </motion.div>

        {/* Currency Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center items-center space-x-4 mb-12"
        >
          <span className="text-gray-600">Show prices in</span>
          <div className="flex bg-gray-200 rounded-lg p-1">
            <button
              onClick={() => setCurrency("USD")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                currency === "USD"
                  ? "bg-gray-900 text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              🇺🇸 US Dollar
            </button>
            <button
              onClick={() => setCurrency("INR")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                currency === "INR"
                  ? "bg-gray-900 text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              🇮🇳 Indian Rupee
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Free Tier */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-200 rounded-2xl p-8 relative"
          >
            {/* Plan Type Label */}
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full">
                INDIVIDUALS
              </span>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Free Tier
              </h3>
              <div className="flex items-baseline">
                <span className="text-5xl font-bold text-gray-900">
                  {currency === "USD" ? "$" : "₹"}
                  {currentPricing.free.price}
                </span>
                <span className="text-gray-600 ml-2">
                  /{currentPricing.free.period}
                </span>
              </div>
            </div>

            <div className="space-y-6 mb-8">
              {/* Limited Queries */}
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <p className="text-gray-900 font-medium">Limited Queries</p>
                  <p className="text-sm text-gray-600">50 queries per month</p>
                </div>
              </div>

              {/* Public Models */}
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <p className="text-gray-900 font-medium">Public Models</p>
                  <p className="text-sm text-gray-600">
                    Access to standard legal AI models
                  </p>
                </div>
              </div>

              {/* Basic Support */}
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <p className="text-gray-900 font-medium">Community Support</p>
                  <p className="text-sm text-gray-600">
                    Help via community forums
                  </p>
                </div>
              </div>

              {/* Limitations */}
              <div className="border-t border-gray-100 pt-6">
                <h4 className="text-sm font-semibold text-gray-500 mb-4">
                  LIMITATIONS
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <X className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">
                      No private infrastructure
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <X className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">
                      No document management
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <X className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">
                      No advanced analytics
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <button className="w-full bg-gray-100 text-gray-900 py-3 px-6 rounded-xl font-medium hover:bg-gray-200 transition-colors">
              Get Started Free
            </button>
          </motion.div>

          {/* Subscription Tier */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white border-2 border-orange-500 rounded-2xl p-8 relative"
          >
            {/* Billing Toggle */}
            <div className="mb-6 flex items-center justify-between">
              <span className="text-sm text-gray-600">
                Save {currency === "USD" ? "$" : "₹"}500 with yearly billing
              </span>
              <div className="flex items-center space-x-2">
                <span
                  className={`text-sm ${
                    billingCycle === "monthly"
                      ? "text-gray-900"
                      : "text-gray-500"
                  }`}
                >
                  Monthly
                </span>
                <button
                  onClick={() =>
                    setBillingCycle(
                      billingCycle === "monthly" ? "yearly" : "monthly"
                    )
                  }
                  className="relative inline-flex h-6 w-11 items-center rounded-full bg-orange-500 transition-colors"
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      billingCycle === "yearly"
                        ? "translate-x-6"
                        : "translate-x-1"
                    }`}
                  />
                </button>
                <span
                  className={`text-sm ${
                    billingCycle === "yearly"
                      ? "text-gray-900"
                      : "text-gray-500"
                  }`}
                >
                  Yearly
                </span>
              </div>
            </div>

            {/* Plan Type Labels */}
            <div className="mb-6 flex space-x-2">
              <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full">
                SOLO PRACTITIONERS
              </span>
              <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full">
                SMALL FIRMS
              </span>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Professional Subscription
              </h3>
              <div className="flex items-baseline">
                <span className="text-5xl font-bold text-gray-900">
                  {currency === "USD" ? "$" : "₹"}
                  {billingCycle === "monthly"
                    ? currentPricing.subscription.monthly
                    : currentPricing.subscription.yearly}
                </span>
                <span className="text-gray-600 ml-2">
                  /{billingCycle === "monthly" ? "month" : "month"} per seat
                </span>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                {billingCycle === "monthly"
                  ? "Billed monthly"
                  : "Billed yearly"}
              </p>
            </div>

            <div className="space-y-6 mb-8">
              {/* Virtual Machine Deployment */}
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Server className="w-4 h-4 text-orange-600" />
                </div>
                <div>
                  <p className="text-gray-900 font-medium">
                    Virtual Machine Deployment
                  </p>
                  <p className="text-sm text-gray-600">
                    Deploy on AWS, Azure, or your preferred cloud
                  </p>
                </div>
              </div>

              {/* Private Data */}
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Lock className="w-4 h-4 text-orange-600" />
                </div>
                <div>
                  <p className="text-gray-900 font-medium">
                    Private Data Processing
                  </p>
                  <p className="text-sm text-gray-600">
                    Your data never leaves your infrastructure
                  </p>
                </div>
              </div>

              {/* Team Collaboration */}
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Users className="w-4 h-4 text-orange-600" />
                </div>
                <div>
                  <p className="text-gray-900 font-medium">
                    Team Collaboration
                  </p>
                  <p className="text-sm text-gray-600">
                    Share documents and insights with your team
                  </p>
                </div>
              </div>

              {/* Advanced Analytics */}
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Zap className="w-4 h-4 text-orange-600" />
                </div>
                <div>
                  <p className="text-gray-900 font-medium">
                    Advanced Analytics
                  </p>
                  <p className="text-sm text-gray-600">
                    Detailed insights and performance metrics
                  </p>
                </div>
              </div>

              {/* Priority Support */}
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-orange-600" />
                </div>
                <div>
                  <p className="text-gray-900 font-medium">Priority Support</p>
                  <p className="text-sm text-gray-600">
                    24/7 email and chat support
                  </p>
                </div>
              </div>
            </div>

            <button className="w-full bg-orange-500 text-white py-3 px-6 rounded-xl font-medium hover:bg-orange-600 transition-colors">
              Start Subscription
            </button>
          </motion.div>

          {/* One-time License */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-200 rounded-2xl p-8 relative"
          >
            {/* Plan Type Label */}
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-gray-900 text-white text-xs font-semibold rounded-full">
                INDIVIDUALS
              </span>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                One-time License
              </h3>
              <div className="flex items-baseline">
                <span className="text-5xl font-bold text-gray-900">
                  {currency === "USD" ? "$" : "₹"}
                  {currentPricing.license.price}
                </span>
                <span className="text-gray-600 ml-2">/one-time</span>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Includes 1 year of updates
              </p>
            </div>

            <div className="space-y-6 mb-8">
              {/* Pure Offline */}
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Shield className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <p className="text-gray-900 font-medium">
                    Pure Offline Operation
                  </p>
                  <p className="text-sm text-gray-600">
                    Complete air-gapped security
                  </p>
                </div>
              </div>

              {/* OSS Models */}
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <p className="text-gray-900 font-medium">
                    Open Source Models
                  </p>
                  <p className="text-sm text-gray-600">
                    Full access to OSS legal AI models
                  </p>
                </div>
              </div>

              {/* No Token Limits */}
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <p className="text-gray-900 font-medium">No Token Limits</p>
                  <p className="text-sm text-gray-600">
                    Limited only by your device resources
                  </p>
                </div>
              </div>

              {/* Confidential Data */}
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <p className="text-gray-900 font-medium">
                    Confidential Data Safe
                  </p>
                  <p className="text-sm text-gray-600">
                    Perfect for sensitive legal matters
                  </p>
                </div>
              </div>

              {/* Yours Forever */}
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <p className="text-gray-900 font-medium">
                    Yours to keep, forever
                  </p>
                  <p className="text-sm text-gray-600 underline">
                    No recurring fees
                  </p>
                </div>
              </div>
            </div>

            {/* Exclusions */}
            <div className="border-t border-gray-100 pt-6 mb-8">
              <h4 className="text-sm font-semibold text-gray-500 mb-4">
                LICENSE EXCLUDES
              </h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <X className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">
                    Cloud synchronization
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <X className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">
                    Team collaboration features
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <X className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">
                    Online model updates
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <X className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">
                    Priority support
                  </span>
                </div>
              </div>
            </div>

            <button className="w-full bg-gray-900 text-white py-3 px-6 rounded-xl font-medium hover:bg-gray-800 transition-colors">
              Buy Now
            </button>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-sm text-gray-500">
            For a 30-day free trial,{" "}
            <a href="/rag" className="text-gray-900 hover:underline">
              download the app
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
