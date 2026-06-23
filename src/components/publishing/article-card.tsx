import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ArticleMeta } from "./article-meta"
import { CitationActions } from "./citation-actions"
import type { Article } from "./types"

export interface ArticleCardProps {
  article: Article
  variant?: "default" | "featured" | "compact"
  showAbstract?: boolean
  showActions?: boolean
  className?: string
}

export function ArticleCard({
  article,
  variant = "default",
  showAbstract = false,
  showActions = true,
  className,
}: ArticleCardProps) {
  const isFeatured = variant === "featured"
  const isCompact = variant === "compact"

  return (
    <Card
      className={cn(
        isFeatured && "border-primary/30 bg-primary/5",
        isCompact && "gap-2 py-3",
        className
      )}
      data-variant={variant}
    >
      <CardHeader className={cn(isCompact && "px-4")}>
        <CardTitle
          className={cn(
            isFeatured ? "text-xl" : "text-base",
            "leading-snug"
          )}
        >
          <a
            href={`https://doi.org/${article.doi}`}
            className="hover:text-primary hover:underline"
          >
            {article.title}
          </a>
        </CardTitle>
      </CardHeader>
      <CardContent className={cn("space-y-3", isCompact && "px-4")}>
        <ArticleMeta article={article} />
        {showAbstract && article.abstract && !isCompact && (
          <p className="line-clamp-3 text-sm text-muted-foreground">
            {article.abstract}
          </p>
        )}
      </CardContent>
      {showActions && !isCompact && (
        <CardFooter className="flex items-center justify-between">
          <CitationActions article={article} />
          <Button size="sm" variant={isFeatured ? "default" : "outline"}>
            Read article
          </Button>
        </CardFooter>
      )}
    </Card>
  )
}
