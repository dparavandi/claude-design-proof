import { Calendar, Quote, Eye } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import type { Article } from "./types"

const accessLabel: Record<Article["accessType"], string> = {
  open: "Open Access",
  free: "Free",
  subscription: "Subscription",
}

const accessVariant: Record<
  Article["accessType"],
  "default" | "secondary" | "outline"
> = {
  open: "default",
  free: "secondary",
  subscription: "outline",
}

function formatAuthors(article: Article) {
  const names = article.authors.map((a) => a.name)
  if (names.length <= 3) return names.join(", ")
  return `${names.slice(0, 3).join(", ")}, et al.`
}

export function ArticleMeta({
  article,
  className,
}: {
  article: Article
  className?: string
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-2 text-sm text-muted-foreground",
        className
      )}
    >
      <p className="text-foreground">{formatAuthors(article)}</p>
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
        <Badge variant={accessVariant[article.accessType]}>
          {accessLabel[article.accessType]}
        </Badge>
        {article.articleType && (
          <>
            <span>{article.articleType}</span>
            <Separator orientation="vertical" className="h-3" />
          </>
        )}
        <span className="inline-flex items-center gap-1">
          <Calendar className="size-3.5" />
          {new Date(article.publishedDate).toLocaleDateString(undefined, {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </span>
        <Separator orientation="vertical" className="h-3" />
        <span className="font-mono text-xs">{article.doi}</span>
      </div>
      {article.metrics && (
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs">
          {article.metrics.citations != null && (
            <span className="inline-flex items-center gap-1">
              <Quote className="size-3.5" />
              {article.metrics.citations} citations
            </span>
          )}
          {article.metrics.views != null && (
            <span className="inline-flex items-center gap-1">
              <Eye className="size-3.5" />
              {article.metrics.views.toLocaleString()} views
            </span>
          )}
        </div>
      )}
    </div>
  )
}
