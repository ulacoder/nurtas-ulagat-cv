"use client";

import React from "react";
import NeuralBackground from "@/components/ui/flow-field-background";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Mail, FileText } from "lucide-react";

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
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white px-6">
        <div className="max-w-2xl w-full space-y-8 text-center">
          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              hi, i'm <span className="text-indigo-400">@ulacoder</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              Software & Hardware Engineer
            </p>
          </div>

          {/* Resume button */}
          <div className="pt-6">
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition-colors duration-300"
            >
              <FileText className="h-5 w-5" />
              View Resume
            </a>
          </div>

          {/* Contact section */}
          <div className="pt-8 space-y-4">
            <h2 className="text-lg font-semibold text-gray-400">Contact Me</h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <a
                href="mailto:your.email@example.com"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>your.email@example.com</span>
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
              href="https://linkedin.com/in/yourprofile"
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
