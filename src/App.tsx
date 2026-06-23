import {
  JournalHeader,
  IssueNavigation,
  ArticleCard,
} from "@/components/publishing"
import { articles, journal, currentIssue } from "@/data"

function App() {
  const [featured, ...rest] = articles

  return (
    <div className="min-h-svh bg-background text-foreground">
      <div className="mx-auto max-w-4xl space-y-6 p-6 md:p-10">
        <JournalHeader journal={journal} />

        <IssueNavigation current={currentIssue} />

        <section className="space-y-4">
          <h2 className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">
            Featured
          </h2>
          <ArticleCard article={featured} variant="featured" showAbstract />
        </section>

        <section className="space-y-4">
          <h2 className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">
            Latest articles
          </h2>
          <div className="space-y-4">
            {rest.map((article) => (
              <ArticleCard key={article.id} article={article} showAbstract />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
