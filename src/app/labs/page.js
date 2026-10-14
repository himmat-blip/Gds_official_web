"use client";

import { useState } from "react";
import Link from "next/link";

export default function LabsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Voice Agents",
    "n8n Automation",
    "AI Chatbots",
    "Autonomous Agents",
    "Document AI",
  ];

  const labProjects = [
    {
      id: "ai-voice-agent",
      category: "Voice Agents",
      badge: "Real-Time Telephony & Audio",
      title: "Conversational Inbound & Outbound Voice Agents",
      subtitle: "Ultra-low latency (<500ms) human-like voice agents for inbound support, lead qualification, and appointment booking.",
      metric: "450ms avg latency · 98% accuracy",
      description:
        "Engineered with real-time streaming audio pipelines, our voice agents hold seamless, interruptions-aware conversations. They handle objections, query your live CRM via function calls, and book meetings directly into your calendar.",
      features: [
        "Human-like turn-taking & smart interruption handling",
        "Direct telephony integration via Twilio, Telnyx & LiveKit SIP",
        "Dynamic tool calling to retrieve order status & schedule appointments",
        "Multilingual support across 30+ languages with emotional inflection",
      ],
      techStack: ["Deepgram Nova-2", "ElevenLabs", "LiveKit", "Twilio", "OpenAI Realtime", "FastAPI"],
      highlight: "Voice AI",
    },
    {
      id: "n8n-enterprise-automation",
      category: "n8n Automation",
      badge: "Event-Driven Multi-API Hub",
      title: "Self-Hosted Enterprise n8n Automation Pipelines",
      subtitle: "Autonomous multi-step workflows connecting complex SaaS ecosystems, databases, and AI models with zero SaaS task limits.",
      metric: "10x throughput · 100% self-hosted & secure",
      description:
        "We build complex event-driven pipelines using self-hosted n8n clusters. From multi-source lead enrichment and scoring to automated invoice reconciliations, our workflows eliminate hundreds of hours of manual operations.",
      features: [
        "Complex webhook-driven logic with branching and retry queues",
        "Autonomous lead scoring & instant CRM sync (HubSpot, Salesforce)",
        "Automated accounting & payment reconciliation with Stripe and Xero",
        "Zero per-task SaaS subscription costs on private Docker servers",
      ],
      techStack: ["n8n", "PostgreSQL", "Docker", "Stripe API", "HubSpot", "Redis"],
      highlight: "Automation",
    },
    {
      id: "enterprise-rag-chatbot",
      category: "AI Chatbots",
      badge: "Hybrid Semantic RAG",
      title: "Enterprise Knowledge-Base AI Chatbot & Copilot",
      subtitle: "Context-aware AI assistant powered by hybrid vector search that provides verifiable answers from company documents.",
      metric: "0.0% Hallucination · Sub-second answers",
      description:
        "Trained on your private documentation, PDF guidelines, and Notion databases, our RAG chatbots answer customer and team inquiries with exact source citations and strict guardrails preventing hallucinations.",
      features: [
        "Hybrid dense + sparse semantic search with re-ranking",
        "Source citations with clickable document references",
        "Multi-platform deployment: Web Widget, Slack, WhatsApp, and Microsoft Teams",
        "Role-based access control ensuring users only see authorized data",
      ],
      techStack: ["LangChain", "Qdrant", "OpenAI GPT-4o", "Next.js", "Python", "Tailwind CSS"],
      highlight: "RAG & Chat",
    },
    {
      id: "autonomous-ai-sdr",
      category: "Autonomous Agents",
      badge: "Multi-Agent Reasoning",
      title: "Autonomous Sales & Prospecting Agent",
      subtitle: "Multi-agent swarm that researches target prospects, generates personalized value propositions, and initiates outreach sequences.",
      metric: "3.8x higher reply rate · 24/7 lead mining",
      description:
        "Leveraging multi-agent frameworks (CrewAI & LangGraph), our AI SDR researches company websites and news, finds decision-makers, crafts contextual cold emails, and manages automated replies via n8n workflows.",
      features: [
        "Autonomous account research and buying-signal detection",
        "Hyper-personalized email copy adapted to prospect seniority",
        "Automated inbox warm-up, deliverability verification & sentiment triage",
        "Automatic calendar invite generation upon positive response",
      ],
      techStack: ["LangGraph", "CrewAI", "n8n", "Apollo API", "Claude 3.5 Sonnet", "Google Workspace"],
      highlight: "AI Agents",
    },
    {
      id: "clinic-voice-dispatcher",
      category: "Voice Agents",
      badge: "HIPAA-Compliant Audio AI",
      title: "Healthcare Clinic Voice Receptionist",
      subtitle: "Specialized 24/7 voice AI trained on medical scheduling, insurance intake, and patient follow-ups.",
      metric: "100% HIPAA compliant · 24/7 coverage",
      description:
        "Built to alleviate clinic front-desk overload, this agent answers inbound patient calls, checks doctor availability in real time, collects insurance details, and routes emergency inquiries to on-call doctors.",
      features: [
        "Compliant streaming audio pipeline with zero data persistence",
        "Real-time integration with EHR calendars (Athena, Epic, Google)",
        "SMS confirmation & reminder dispatch with patient reschedule links",
        "Gentle, human-sounding empathy with natural speech pacing",
      ],
      techStack: ["Deepgram", "OpenAI Realtime", "Twilio SIP", "LiveKit", "Node.js"],
      highlight: "Healthcare AI",
    },
    {
      id: "intelligent-document-ai",
      category: "Document AI",
      badge: "Multimodal Vision OCR",
      title: "Intelligent Document Parsing & Computer Vision",
      subtitle: "Vision-language models that extract structured data from unstructured invoices, receipts, and contracts with 99.4% precision.",
      metric: "99.4% precision · Structured JSON output",
      description:
        "Eliminate manual data entry. Our multimodal vision pipelines process messy scanned PDFs, handwritten forms, and complex multi-page tables, validating schema against your ERP before ingestion.",
      features: [
        "Zero-shot schema adaptation for any document format",
        "Multi-page table extraction with nested JSON exports",
        "Automated anomaly and fraud detection on signatures and stamps",
        "Direct export to PostgreSQL, ERP systems, and Google Sheets",
      ],
      techStack: ["GPT-4o Vision", "Claude 3.5 Sonnet", "OpenCV", "Python", "AWS S3", "n8n"],
      highlight: "Vision AI",
    },
  ];

  const filteredProjects =
    activeCategory === "All"
      ? labProjects
      : labProjects.filter((p) => p.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <div className="bg-[#fafafa] text-slate-900 min-h-screen pt-8 md:pt-10 pb-20 selection:bg-amber-100 selection:text-amber-900">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* 1. Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.15] text-slate-900">
            <span className="font-serif">Next-gen intelligence.</span>
            <br />
            <span className="font-serif italic text-[#d97706]">Engineered for production.</span>
          </h1>

          <p className="text-slate-600 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-10">
            We design, prototype, and deploy high-impact AI systems — from ultra-low latency voice agents and automated n8n workflows to intelligent chatbots and custom LLM solutions.
          </p>

          {/* Capability Pills Bar */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-amber-50/70 border border-amber-200/60 text-amber-900">
              ✦ AI Voice Agents
            </span>
            <span className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-amber-50/70 border border-amber-200/60 text-amber-900">
              ✦ n8n Workflow Automation
            </span>
            <span className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-amber-50/70 border border-amber-200/60 text-amber-900">
              ✦ RAG &amp; Intelligent Chatbots
            </span>
            <span className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-amber-50/70 border border-amber-200/60 text-amber-900">
              ✦ Multi-Agent Swarms
            </span>
          </div>
        </div>

        {/* 2. Interactive Audio Waveform / Live Voice Agent Showcase Banner */}
        <div className="mb-20 bg-white border border-amber-200/70 rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-lg">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#d97706] mb-3">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                LIVE DEMO ARCHITECTURE
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 mb-3">
                Experience Real-Time Voice &amp; n8n Pipeline
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Our voice agents operate with sub-500 millisecond response times, handling real-time interruptions, speech synthesis, and live backend tool calls.
              </p>
            </div>

            {/* Waveform graphic & CTA */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
              <div className="flex items-center gap-1.5 bg-amber-50/70 border border-amber-200/60 px-5 py-3 rounded-2xl">
                <div className="w-1 h-6 bg-[#d97706] rounded-full animate-pulse" />
                <div className="w-1 h-10 bg-[#d97706] rounded-full animate-pulse delay-75" />
                <div className="w-1 h-4 bg-[#d97706] rounded-full animate-pulse delay-150" />
                <div className="w-1 h-8 bg-[#d97706] rounded-full animate-pulse delay-100" />
                <div className="w-1 h-12 bg-[#d97706] rounded-full animate-pulse" />
                <div className="w-1 h-7 bg-[#d97706] rounded-full animate-pulse delay-200" />
                <div className="w-1 h-3 bg-[#d97706] rounded-full animate-pulse delay-75" />
                <span className="ml-3 text-xs font-mono text-amber-900 font-semibold">&lt; 450ms Latency</span>
              </div>

              <Link
                href="/contact-us"
                className="w-full sm:w-auto text-center bg-[#d97706] hover:bg-[#b45309] text-white px-7 py-3 rounded-xl font-semibold shadow-md hover:shadow-xl transition-all text-sm active:scale-95 whitespace-nowrap"
              >
                Schedule Live Demo &rarr;
              </Link>
            </div>
          </div>
        </div>

        {/* 3. Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-16">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#d97706] text-white shadow-md scale-105"
                    : "bg-white text-slate-700 hover:text-[#d97706] border border-slate-200 hover:border-amber-300 hover:bg-amber-50/30"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* 4. Lab Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-28">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white border border-slate-100 rounded-2xl p-7 sm:p-9 hover:border-amber-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between shadow-sm hover:-translate-y-1"
            >
              <div>
                {/* Header Badge & Category */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 border border-amber-200/80 text-[#d97706]">
                    {project.badge}
                  </span>
                  <span className="text-xs font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                    {project.metric}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold font-serif text-slate-900 mb-3 group-hover:text-[#d97706] transition-colors leading-snug">
                  {project.title}
                </h3>

                {/* Subtitle / Description */}
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Feature Bullet Points */}
                <div className="mb-6 space-y-2.5 pt-4 border-t border-slate-100">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    Key Capabilities
                  </div>
                  {project.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <span className="text-[#d97706] mt-0.5 select-none">✦</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Tech Stack & Action */}
              <div className="pt-6 border-t border-slate-100">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-amber-50/70 border border-amber-200/60 text-amber-900"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <Link
                    href={`/contact-us?interest=${encodeURIComponent(project.title)}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#d97706] hover:text-[#b45309] transition-colors"
                  >
                    <span>Request Custom Build</span>
                    <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                  </Link>
                  <span className="text-xs font-medium text-slate-400">
                    Production Ready
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 5. How We Build AI Systems Section (4 Step Pipeline) */}
        <div className="mb-28">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-xs font-semibold text-[#d97706] uppercase tracking-wider mb-6 shadow-sm">
              ENGINEERING METHODOLOGY
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              <span className="font-serif">How GD Labs builds </span>
              <span className="font-serif italic text-[#d97706]">production AI.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-slate-100 rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="font-serif text-3xl font-bold text-[#d97706] mb-4">01</div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Workflow Discovery</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                We analyze your business processes, bottlenecks, data inputs, and customer touchpoints to identify maximum ROI opportunities.
              </p>
            </div>

            <div className="bg-white border border-slate-100 rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="font-serif text-3xl font-bold text-[#d97706] mb-4">02</div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Model &amp; Voice Pipeline</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Selection of optimal LLMs, low-latency audio models (Deepgram/Cartesia), and vector databases tailored for speed and accuracy.
              </p>
            </div>

            <div className="bg-white border border-slate-100 rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="font-serif text-3xl font-bold text-[#d97706] mb-4">03</div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">n8n &amp; API Orchestration</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Wiring private n8n pipelines, WebSockets, custom tool calling, and authentication layers to tie into your ERP and CRM.
              </p>
            </div>

            <div className="bg-white border border-slate-100 rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="font-serif text-3xl font-bold text-[#d97706] mb-4">04</div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Guardrails &amp; Scale</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Implementing strict anti-hallucination guardrails, PII masking, latency optimization, and automated cloud monitoring.
              </p>
            </div>
          </div>
        </div>

        {/* 6. Bottom CTA Section */}
        <div className="relative rounded-3xl bg-white border border-amber-200/70 py-16 px-6 md:px-12 text-center overflow-hidden shadow-lg">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              <span className="font-serif">Have an AI project in </span>
              <span className="font-serif italic text-[#d97706]">mind?</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mb-8 leading-relaxed">
              Whether you need an automated voice agent, an n8n workflow pipeline, or a private enterprise chatbot, our AI engineers can build and deploy it seamlessly.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact-us"
                className="w-full sm:w-auto bg-[#d97706] hover:bg-[#b45309] text-white px-8 py-3.5 rounded-xl font-semibold shadow-md hover:shadow-xl transition-all text-base active:scale-95"
              >
                Schedule an AI Demo
              </Link>
              <Link
                href="/quote"
                className="w-full sm:w-auto bg-white border border-slate-300 hover:border-slate-800 text-slate-800 px-8 py-3.5 rounded-xl font-semibold transition-all text-base active:scale-95 shadow-sm"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
