import { ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import type { Issue } from "./types"

export interface IssueNavigationProps {
  current: Issue
  hasPrevious?: boolean
  hasNext?: boolean
  onNavigate?: (direction: "previous" | "next") => void
  className?: string
}

export function IssueNavigation({
  current,
  hasPrevious = true,
  hasNext = true,
  onNavigate,
  className,
}: IssueNavigationProps) {
  return (
    <nav
      className={cn(
        "flex items-center justify-between rounded-lg border border-border px-3 py-2",
        className
      )}
      aria-label="Issue navigation"
    >
      <Button
        variant="ghost"
        size="sm"
        disabled={!hasPrevious}
        onClick={() => onNavigate?.("previous")}
      >
        <ChevronLeft /> Previous
      </Button>
      <div className="flex items-center gap-2 text-sm">
        <span className="font-medium">Volume {current.volume}</span>
        <Separator orientation="vertical" className="h-4" />
        <span>Issue {current.issue}</span>
        <Separator orientation="vertical" className="h-4" />
        <span className="text-muted-foreground">{current.year}</span>
      </div>
      <Button
        variant="ghost"
        size="sm"
        disabled={!hasNext}
        onClick={() => onNavigate?.("next")}
      >
        Next <ChevronRight />
      </Button>
    </nav>
  )
}
