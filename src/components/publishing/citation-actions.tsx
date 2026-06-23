import { Quote, Bookmark, Share2, FileText } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { Article } from "./types"

export interface CitationActionsProps {
  article: Article
  className?: string
}

export function CitationActions({ article, className }: CitationActionsProps) {
  return (
    <div className={cn("flex items-center gap-1", className)} data-doi={article.doi}>
      <Button variant="ghost" size="sm" aria-label="Cite this article">
        <Quote /> Cite
      </Button>
      <Button variant="ghost" size="sm" aria-label="Save to library">
        <Bookmark /> Save
      </Button>
      <Button variant="ghost" size="sm" aria-label="Share">
        <Share2 /> Share
      </Button>
      <Button variant="ghost" size="sm" aria-label="Download PDF">
        <FileText /> PDF
      </Button>
    </div>
  )
}
