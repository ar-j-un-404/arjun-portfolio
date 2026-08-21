import { cn } from "@/lib/utils"

const wipItems = [
  {
    id: 1,
    name: "AI Projects",
    description:
      "Building and improving AI-powered applications using embeddings, semantic search, RAG, and LLMs.",
    progress: 40,
    lastUpdated: "Learning",
  },
  {
    id: 2,
    name: "C++ and DSA",
    description:
      "Learning C++, data structures, algorithms, and improving problem-solving skills.",
    progress: 25,
    lastUpdated: "Learning",
  },
  {
    id: 3,
    name: "Machine Learning",
    description:
      "Studying core machine learning concepts and implementing machine learning models.",
    progress: 10,
    lastUpdated: "Learning",
  },
  {
    id: 4,
    name: "AI Engineering",
    description:
      "Exploring LangChain, vector databases, local LLMs, semantic search, and retrieval-augmented generation.",
    progress: 20,
    lastUpdated: "Learning",
  },
]

export function Workbench() {
  return (
    <section id="workbench" className="px-4 sm:px-6 py-20 sm:py-28 border-t border-border/30">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 sm:mb-14 space-y-3 animate-fade-in-up">
          <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-primary">
            Work in Progress
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Workbench</h2>
          <p className="max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            Active learning areas and ongoing experiments. Things being built, studied, and refined.
          </p>
        </div>

        <div className="rounded-xl border border-border bg-card/40 glass backdrop-blur-sm overflow-hidden hover-lift animate-scale-in stagger-2">
          {/* Terminal header */}
          <div className="flex items-center gap-3 border-b border-border/50 bg-secondary/40 px-4 sm:px-5 py-3.5 sm:py-4">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-destructive/60" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
              <div className="h-3 w-3 rounded-full bg-primary/60" />
            </div>
            <span className="ml-4 font-mono text-xs text-muted-foreground truncate">
              ~/arjun/active
            </span>
            <div className="ml-auto hidden sm:flex items-center gap-2 text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              <span className="font-mono text-xs">live</span>
            </div>
          </div>

          <div className="divide-y divide-border/30">
            {wipItems.map((item, index) => (
              <div
                key={item.id}
                className="group flex flex-col gap-4 p-5 sm:p-6 transition-all duration-300 sm:flex-row sm:items-center sm:justify-between hover:bg-secondary/30 animate-fade-in"
                style={{ animationDelay: `${index * 100 + 400}ms` }}
              >
                <div className="flex-1 space-y-2 min-w-0">
                  <div className="flex items-center gap-3">
                    <span className="text-primary font-mono text-sm shrink-0 transition-transform duration-300 group-hover:translate-x-1">
                      $
                    </span>
                    <h4 className="font-mono text-sm font-medium tracking-tight transition-colors group-hover:text-gradient truncate">
                      {item.name}
                    </h4>
                  </div>
                  <p className="pl-6 text-xs text-muted-foreground line-clamp-2 sm:line-clamp-1">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center justify-between gap-6 pl-6 sm:pl-0 sm:justify-end">
                  <div className="flex items-center gap-3 flex-1 sm:flex-none">
                    <div className="h-2 w-full sm:w-28 overflow-hidden rounded-full bg-secondary/80 relative">
                      <div
                        className={cn(
                          "h-full rounded-full transition-all duration-700 ease-out",
                          item.progress >= 80
                            ? "bg-primary"
                            : item.progress >= 50
                              ? "bg-yellow-500"
                              : "bg-orange-500",
                        )}
                        style={{ width: `${item.progress}%` }}
                      />
                      <div className="absolute inset-0 animate-shimmer opacity-30" />
                    </div>
                    <span
                      className={cn(
                        "font-mono text-xs w-10 shrink-0 transition-colors",
                        item.progress >= 80 ? "text-primary" : "text-muted-foreground",
                      )}
                    >
                      {item.progress}%
                    </span>
                  </div>

                  <span className="font-mono text-xs text-muted-foreground shrink-0">
                    {item.lastUpdated}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-border/50 bg-secondary/30 px-4 sm:px-5 py-4">
            <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
              <span className="text-primary">❯</span>
              <span className="typing-cursor truncate">git status --all</span>
              <span className="ml-auto text-primary/50 hidden sm:block">press enter to run</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}