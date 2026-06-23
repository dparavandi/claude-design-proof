// Domain model for the publishing design-system layer.
// These types are the contract the components compose against.

export interface Author {
  name: string
  affiliation?: string
  isCorresponding?: boolean
}

export interface ArticleMetrics {
  citations?: number
  views?: number
  altmetric?: number
}

export interface Article {
  id: string
  title: string
  authors: Author[]
  journal: string
  publishedDate: string // ISO date
  doi: string
  abstract?: string
  accessType: "open" | "subscription" | "free"
  articleType?: string // e.g. "Research Article", "Review"
  metrics?: ArticleMetrics
}

export interface Journal {
  title: string
  issn: string
  impactFactor?: number
  publisher?: string
}

export interface Issue {
  volume: number
  issue: number
  year: number
}
