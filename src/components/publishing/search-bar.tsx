import { useState } from "react"
import { Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"

export type SearchScope = "all" | "title" | "author" | "doi"

export interface SearchBarProps {
  placeholder?: string
  defaultScope?: SearchScope
  onSearch?: (query: string, scope: SearchScope) => void
  className?: string
}

const scopes: { value: SearchScope; label: string }[] = [
  { value: "all", label: "All fields" },
  { value: "title", label: "Title" },
  { value: "author", label: "Author" },
  { value: "doi", label: "DOI" },
]

export function SearchBar({
  placeholder = "Search articles, authors, keywords…",
  defaultScope = "all",
  onSearch,
  className,
}: SearchBarProps) {
  const [query, setQuery] = useState("")
  const [scope, setScope] = useState<SearchScope>(defaultScope)

  return (
    <div className={cn("flex w-full items-center gap-2", className)}>
      <Select value={scope} onValueChange={(v) => setScope(v as SearchScope)}>
        <SelectTrigger className="w-36 shrink-0">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {scopes.map((s) => (
            <SelectItem key={s.value} value={s.value}>
              {s.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        onKeyDown={(e) => e.key === "Enter" && onSearch?.(query, scope)}
      />
      <Button onClick={() => onSearch?.(query, scope)}>
        <Search /> Search
      </Button>
    </div>
  )
}
