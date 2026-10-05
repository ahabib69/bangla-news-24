import { Header, MostRead, NewsCard } from '@/components/news-site'
import { getCategoryNews, newsList } from '@/app/news-data'

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params
  const currentCategory = decodeURIComponent(category)
  const news = getCategoryNews(currentCategory)
  return <><Header /><main className="mx-auto max-w-6xl px-4 py-8"><div className="mb-6 border-b-2 border-red-600 pb-3"><p className="text-sm font-semibold text-red-600">বাংলা নিউজ ২৪</p><h1 className="mt-1 text-3xl font-black text-slate-900">{currentCategory}</h1></div><div className="grid gap-6 md:grid-cols-[1fr_320px]"><div className="grid gap-5 sm:grid-cols-2">{news.length ? news.map((item) => <NewsCard key={item.id} item={item} />) : <p>এই বিভাগে এখনো কোনো খবর নেই।</p>}</div><MostRead items={newsList} /></div></main></>
}
