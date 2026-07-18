"use client";

import React from "react";
import NeuralBackground from "@/components/ui/flow-field-background";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

export default function Home() {
  return (
    <div className="relative w-full h-screen">
      <NeuralBackground
        color="#818cf8"
        trailOpacity={0.1}
        speed={0.8}
        particleCount={600}
      />

      {/* Content overlay */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white px-6 -mt-12">
        <div className="max-w-2xl w-full space-y-8 text-center">
          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-900 bg-clip-text text-transparent">
              hi, i'm ＠ulacoder
            </h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Software &amp; Hardware Engineer
            </p>
          </div>

          {/* Resume link */}
          <div className="pt-6">
            <a
              href="/resume.pdf"
              className="text-xl font-semibold text-white hover:text-gray-300 transition-colors underline underline-offset-4"
            >
              Resume
            </a>
          </div>

          {/* Contact section */}
          <div className="pt-8 space-y-4">
            <h2 className="text-xl font-bold text-white">Contact Me</h2>
            <div className="flex items-center justify-center gap-2 text-white text-lg font-semibold">
              <a
                href="https://t.me/anntts"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors"
              >
                @anntts
              </a>
              <span>•</span>
              <a
                href="mailto:nurtasulagat@gmail.com"
                className="hover:text-gray-300 transition-colors"
              >
                nurtasulagat@gmail.com
              </a>
            </div>
          </div>

          {/* Social links */}
          <div className="flex items-center justify-center gap-6 pt-4">
            <a
              href="https://github.com/ulacoder"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm"
              aria-label="GitHub"
            >
              <GitHubLogoIcon className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/ulagat-nurtas-395017393/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm"
              aria-label="LinkedIn"
            >
              <LinkedInLogoIcon className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
