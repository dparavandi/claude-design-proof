import type { Article, Journal, Issue } from "@/components/publishing/types"

export const journal: Journal = {
  title: "Journal of Knowledge Management",
  issn: "1367-3270",
  impactFactor: 7.9,
  publisher: "Demo Publishing",
}

export const currentIssue: Issue = { volume: 29, issue: 4, year: 2026 }

export const articles: Article[] = [
  {
    id: "a1",
    title:
      "Tacit knowledge transfer in distributed research teams: a multi-site study",
    authors: [
      { name: "A. Rivera", isCorresponding: true },
      { name: "M. Chen" },
      { name: "S. Okonkwo" },
    ],
    journal: "Journal of Knowledge Management",
    publishedDate: "2026-05-18",
    doi: "10.1108/JKM-demo-0001",
    abstract:
      "We examine how tacit knowledge moves across geographically distributed teams and identify three coordination patterns that preserve fidelity during transfer.",
    accessType: "open",
    articleType: "Research Article",
    metrics: { citations: 12, views: 3480, altmetric: 22 },
  },
  {
    id: "a2",
    title: "A framework for knowledge retention during organizational change",
    authors: [{ name: "L. Petrova" }, { name: "D. Smith" }],
    journal: "Journal of Knowledge Management",
    publishedDate: "2026-04-02",
    doi: "10.1108/JKM-demo-0002",
    abstract:
      "Drawing on retention theory, we propose a staged framework for protecting institutional knowledge through restructuring events.",
    accessType: "subscription",
    articleType: "Review",
    metrics: { citations: 5, views: 1290 },
  },
  {
    id: "a3",
    title: "Measuring knowledge spillovers in open innovation ecosystems",
    authors: [
      { name: "K. Yamamoto" },
      { name: "R. Dubois" },
      { name: "T. Adeyemi" },
      { name: "P. Novak" },
    ],
    journal: "Journal of Knowledge Management",
    publishedDate: "2026-03-11",
    doi: "10.1108/JKM-demo-0003",
    accessType: "free",
    articleType: "Research Article",
    metrics: { citations: 8, views: 2110 },
  },
]
