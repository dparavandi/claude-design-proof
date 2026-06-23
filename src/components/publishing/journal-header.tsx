import {
  Avatar,
  AvatarFallback,
} from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import { SearchBar } from "./search-bar"
import type { Journal } from "./types"

export interface JournalHeaderProps {
  journal: Journal
  showSearch?: boolean
  className?: string
}

function initials(title: string) {
  return title
    .split(" ")
    .filter((w) => /^[A-Za-z]/.test(w))
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("")
}

export function JournalHeader({
  journal,
  showSearch = true,
  className,
}: JournalHeaderProps) {
  return (
    <header
      className={cn(
        "flex flex-col gap-4 border-b border-border pb-4",
        className
      )}
    >
      <div className="flex items-start gap-4">
        <Avatar className="size-12 rounded-md">
          <AvatarFallback className="rounded-md bg-primary/10 text-primary">
            {initials(journal.title)}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1 space-y-1">
          <h1 className="text-2xl font-semibold tracking-tight">
            {journal.title}
          </h1>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
            <span className="font-mono text-xs">ISSN {journal.issn}</span>
            {journal.impactFactor != null && (
              <>
                <Separator orientation="vertical" className="h-3" />
                <Badge variant="secondary">
                  Impact Factor {journal.impactFactor.toFixed(1)}
                </Badge>
              </>
            )}
            {journal.publisher && (
              <>
                <Separator orientation="vertical" className="h-3" />
                <span>{journal.publisher}</span>
              </>
            )}
          </div>
        </div>
      </div>
      {showSearch && <SearchBar />}
    </header>
  )
}
