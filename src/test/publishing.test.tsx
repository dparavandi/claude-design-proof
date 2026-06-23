import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"

import { ArticleCard } from "@/components/publishing/article-card"
import { JournalHeader } from "@/components/publishing/journal-header"
import type { Article, Journal } from "@/components/publishing/types"

const article: Article = {
  id: "t1",
  title: "Test article title",
  authors: [{ name: "A. Author" }, { name: "B. Writer" }],
  journal: "Test Journal",
  publishedDate: "2026-01-15",
  doi: "10.1000/test-0001",
  abstract: "An abstract used for testing the article card.",
  accessType: "open",
  articleType: "Research Article",
  metrics: { citations: 3, views: 100 },
}

const journal: Journal = {
  title: "Test Journal of Things",
  issn: "1234-5678",
  impactFactor: 4.2,
}

describe("ArticleCard", () => {
  it("renders the title and access badge", () => {
    render(<ArticleCard article={article} showAbstract />)
    expect(screen.getByText("Test article title")).toBeInTheDocument()
    expect(screen.getByText("Open Access")).toBeInTheDocument()
  })

  it("exposes the variant via data attribute for design-system audits", () => {
    const { container } = render(
      <ArticleCard article={article} variant="featured" />
    )
    expect(container.querySelector('[data-variant="featured"]')).not.toBeNull()
  })

  it("shows the abstract only when requested", () => {
    const { rerender } = render(<ArticleCard article={article} />)
    expect(
      screen.queryByText(/abstract used for testing/i)
    ).not.toBeInTheDocument()
    rerender(<ArticleCard article={article} showAbstract />)
    expect(
      screen.getByText(/abstract used for testing/i)
    ).toBeInTheDocument()
  })
})

describe("JournalHeader", () => {
  it("renders journal title, ISSN and impact factor", () => {
    render(<JournalHeader journal={journal} showSearch={false} />)
    expect(screen.getByText("Test Journal of Things")).toBeInTheDocument()
    expect(screen.getByText(/1234-5678/)).toBeInTheDocument()
    expect(screen.getByText(/Impact Factor 4.2/)).toBeInTheDocument()
  })
})
