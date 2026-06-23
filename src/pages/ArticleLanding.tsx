import {
    ArticleCard,
    IssueNavigation,
    JournalHeader,
} from "@/components/publishing";
import type { Article, Issue, Journal } from "@/components/publishing/types";

const journal: Journal = {
    title: "Journal of Knowledge Management",
    issn: "1367-3270",
    impactFactor: 7.9,
    publisher: "Demo Publishing",
    };

const currentIssue: Issue = {
    volume: 29,
    issue: 4,
    year: 2026,
};
const featured: Article = {
    id: "a1",
    title: "Tacit knowledge transfer in distributed research teams: a multi-site study",
    authors: [{ name: "A. Rivera" }, { name: "M. Chen" }, { name: "S. Okonkwo" }],
    journal: "Journal of Knowledge Management",
    publishedDate: "2026-05-18",
    doi: "10.1108/JKM-demo-0001",
    abstract:
          "We examine how tacit knowledge moves across geographically distributed teams and identify three coordination patterns that preserve fidelity during transfer.",
    accessType: "open",
    articleType: "Research Article",
    metrics: { citations: 12, views: 3480 },
};

const rest: Article[] = [
  {
        id: "a2",
        title: "A framework for knowledge retention during organizational change",
        authors: [{ name: "L. Petrova" }, { name: "D. Smith" }],
        journal: "Journal of Knowledge Management",
        publishedDate: "2026-04-02",
        doi: "10.1108/JKM-demo-0002",
        abstract:
                "Drawing on retention theory, we propose a staged framework for protecting institutional knowledge during restructuring events.",
        accessType: "subscription",
        articleType: "Review",
        metrics: { citations: 5, views: 1290 },
  },
  {
        id: "a3",
        title: "Measuring knowledge spillovers in open innovation ecosystems",
        authors: [{ name: "K. Yamamoto" }, { name: "R. Dubois" }, { name: "T. Adeyemi" }],
        journal: "Journal of Knowledge Management",
        publishedDate: "2026-03-11",
        doi: "10.1108/JKM-demo-0003",
        abstract:
                "Using patent-citation networks across 41 firms, we quantify knowledge spillovers and show that brokerage positions predict downstream innovation.",
        accessType: "free",
        articleType: "Research Article",
        metrics: { citations: 8, views: 2110 },
  },
  ];

export default function ArticleLanding() {
    return (
          <div className="min-h-svh bg-background font-sans text-foreground">
                <div className="mx-auto flex max-w-4xl flex-col gap-6 px-6 py-10">
                        <JournalHeader journal={journal} />
                        <IssueNavigation current={currentIssue} hasPrevious hasNext />
                        <section className="flex flex-col gap-4">
                                  <h2 className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">
                                              Featured
                                  </h2>
                                  <ArticleCard article={featured} variant="featured" showAbstract />
                        </section>
                        <section className="flex flex-col gap-4">
                                  <h2 className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">
                                              In this issue
                                  </h2>
                                  <div className="flex flex-col gap-4">
                                    {rest.map((article) => (
                          <ArticleCard key={article.id} article={article} showAbstract />
                        ))}
                                  </div>
                        </section>
                </div>
          </div>
        );
}
