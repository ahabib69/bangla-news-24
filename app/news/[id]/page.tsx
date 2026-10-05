import Link from 'next/link'
import { Header, MostRead } from '@/components/news-site'
import { getNews, newsList } from '@/app/news-data'

export default async function NewsDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const item = getNews(id)
  if (!item) return <><Header /><main className="mx-auto max-w-6xl px-4 py-20 text-center"><h1 className="text-2xl font-bold">খবরটি খুঁজে পাওয়া যায়নি</h1><Link className="mt-4 inline-block text-red-600" href="/">হোমপেজে ফিরুন</Link></main></>
  return <><Header /><main className="mx-auto max-w-6xl px-4 py-8"><div className="grid gap-8 md:grid-cols-[1fr_320px]"><article><Link href={`/category/${item.category}`} className="text-sm font-bold text-red-600">{item.category}</Link><h1 className="mt-3 text-3xl font-black leading-tight text-slate-900 md:text-5xl">{item.title}</h1><div className="my-4 text-sm text-slate-500">{item.author} · {item.time} · {item.views} পাঠক</div><img src={item.image} alt="" className="aspect-video w-full rounded-lg object-cover" />{item.body.map((paragraph) => <p key={paragraph} className="mt-6 text-lg leading-9 text-slate-700">{paragraph}</p>)}</article><MostRead items={newsList} /></div></main></>
}
