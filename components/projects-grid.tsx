"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Github, Sparkles } from "lucide-react"

const projects = [
  {
    id: 0,
    title: "RAG Over Codebase",
    description:
      "A Retrieval-Augmented Generation application that allows users to understand and interact with a codebase using natural language. The system processes source code, creates embeddings, retrieves relevant code context, and uses a language model to answer questions about the codebase. The goal is to make it easier to explore unfamiliar projects, understand code structure, and find relevant parts of a codebase through AI-powered semantic search.",
    tags: ["Python", "RAG", "LangChain", "Sentence Transformers", "Vector Database", "Ollama", "LLMs"],
    status: "in-progress",
    year: "Learning",
    featured: true,
    highlight: true,
  },
  {
    id: 1,
    title: "AI Lecture Slide Tutor",
    description:
      "An AI-powered learning assistant that helps students interact with lecture slides and study material. The project uses document processing, embeddings, semantic search, vector databases, and language models to answer questions based on uploaded content.",
    tags: ["Python", "LangChain", "PyPDF", "Sentence Transformers", "ChromaDB", "Ollama"],
    status: "shipped",
    year: "Learning",
    url: "https://github.com/ar-j-un-404/AI_LECTURE_SLIDE_TUTOR",
    featured: true,
  },
  {
    id: 2,
    title: "Exam Question Predictor",
    description:
      "An AI-based system that analyzes previous exam question papers to identify frequently repeated and semantically similar questions. It extracts questions from PDFs, generates embeddings using Sentence Transformers, calculates cosine similarity, groups similar questions, and identifies recurring topics.",
    tags: ["Python", "Sentence Transformers", "Cosine Similarity", "PDF Processing"],
    status: "shipped",
    year: "Learning",
    url: "https://github.com/ar-j-un-404/EXAM_QUESTION_PREDICTOR",
    featured: true,
  },
  {
    id: 3,
    title: "AI PDF Tutor",
    description:
      "An AI-powered PDF question-answering application that allows users to interact with study documents. It combines PDF text extraction, sentence embeddings, semantic retrieval, and a local language model to provide context-aware answers.",
    tags: ["Python", "Sentence Transformers", "Ollama", "Semantic Search"],
    status: "shipped",
    year: "Learning",
    url: "https://github.com/ar-j-un-404/AI_PDF_TUTOR",
    featured: true,
  },
]

const filters = ["all", "shipped", "in-progress"]

export function ProjectsGrid() {
  const [activeFilter, setActiveFilter] = useState("all")

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((p) => p.status === activeFilter)

  return (
    <section id="projects" className="px-4 sm:px-6 py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 sm:mb-10 lg:mb-14 flex flex-col gap-4 sm:gap-6 lg:gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-3 animate-fade-in-up">
            <p className="font-mono text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-primary">
              Projects
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight">
              AI & ML Projects
            </h2>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 lg:overflow-visible lg:flex-wrap scrollbar-hide animate-fade-in-up stagger-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "shrink-0 rounded-lg border px-4 sm:px-5 py-2 sm:py-2.5 font-mono text-xs uppercase tracking-wider transition-all duration-300 active:scale-90 active:bg-secondary/50",
                  activeFilter === filter
                    ? "border-primary bg-primary/15 text-primary shadow-sm shadow-primary/20"
                    : "border-border text-muted-foreground hover:border-foreground/50 hover:text-foreground hover:bg-secondary/50",
                )}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              className={cn(
                "group relative overflow-hidden rounded-xl border bg-card/40 p-5 sm:p-6 lg:p-7 glass transition-all duration-300 active:scale-95 active:bg-secondary/70 hover-lift hover:border-primary/40 hover:bg-card/70 animate-fade-in-up",
                project.highlight
                  ? "sm:col-span-2 lg:col-span-2 border-primary/30 bg-gradient-to-br from-primary/8 via-card/50 to-primary/8"
                  : "border-border/60",
                project.featured && !project.highlight && "sm:col-span-2 lg:col-span-1",
              )}
              style={{ animationDelay: `${(index % 6) * 100 + 200}ms` }}
            >
              {project.highlight && (
                <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-primary/40 bg-primary/15 px-3.5 py-1.5 animate-pulse-glow">
                  <Sparkles className="h-3.5 w-3.5 text-primary" />
                  <span className="font-mono text-[10px] uppercase tracking-wider text-primary font-medium">
                    Featured
                  </span>
                </div>
              )}

              <div
                className={cn(
                  "absolute right-4 top-4 flex items-center gap-2 sm:gap-2.5",
                  project.highlight && "top-4 sm:top-5",
                )}
              >
                <span
                  className={cn(
                    "h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full transition-shadow duration-300 flex-shrink-0",
                    project.status === "shipped" && "bg-primary shadow-sm shadow-primary/50",
                    project.status === "in-progress" &&
                      "bg-yellow-500 animate-pulse shadow-sm shadow-yellow-500/50",
                  )}
                />
                <span className="font-mono text-[11px] sm:text-xs text-muted-foreground truncate">
                  {project.status}
                </span>
              </div>

              <div
                className={cn(
                  "mb-4 sm:mb-5 font-mono text-xs text-muted-foreground",
                  project.highlight && "mt-8 sm:mt-10",
                )}
              >
                {project.year}
              </div>

              <h3
                className={cn(
                  "mb-2 sm:mb-3 font-bold tracking-tight transition-all duration-300 group-hover:text-gradient",
                  project.highlight ? "text-lg sm:text-xl lg:text-2xl" : "text-base sm:text-lg",
                )}
              >
                {project.title}
              </h3>

              <p
                className={cn(
                  "mb-4 sm:mb-5 text-xs sm:text-sm leading-relaxed text-muted-foreground",
                  project.highlight ? "line-clamp-4" : "line-clamp-3",
                )}
              >
                {project.description}
              </p>

              <div className="mb-4 sm:mb-5 flex flex-wrap gap-1.5 sm:gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-border/80 bg-secondary/60 px-2 sm:px-2.5 py-0.5 sm:py-1 font-mono text-[10px] sm:text-xs text-secondary-foreground transition-colors active:scale-90 hover:border-primary/50 hover:bg-primary/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3 sm:gap-4">
                {"url" in project && project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-mono text-[11px] sm:text-xs text-muted-foreground transition-all duration-300 active:scale-90 hover:text-primary group/link"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github className="h-3.5 sm:h-4 w-3.5 sm:w-4 transition-transform group-hover/link:scale-110 flex-shrink-0" />
                    <span className="underline-animate">source</span>
                  </a>
                )}
              </div>

              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary via-primary/80 to-transparent transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}