import Link from 'next/link'
import { Header, MostRead, NewsCard } from '@/components/news-site'
import { getLiveNews } from './news-data'

export default async function Page() {
  const news = await getLiveNews()
  return <><Header /><main className="mx-auto max-w-6xl px-4 pb-16"><div className="breaking my-4 flex items-center overflow-hidden rounded bg-slate-900 text-sm text-white"><span className="shrink-0 bg-red-600 px-4 py-3 font-bold">ব্রেকিং নিউজ</span><div className="whitespace-nowrap px-5 py-3">আজকের সর্বশেষ খবর, বিশ্লেষণ ও গুরুত্বপূর্ণ আপডেট জানতে চোখ রাখুন বাংলা নিউজ ২৪-এ</div></div><section className="grid gap-6 md:grid-cols-[1fr_320px]"><div><div className="mb-5 flex items-end justify-between border-b-2 border-red-600 pb-2"><h1 className="text-2xl font-black text-slate-900">সর্বশেষ সংবাদ</h1><Link href="/category/সর্বশেষ" className="text-sm font-bold text-red-600">সব খবর দেখুন →</Link></div><div className="grid gap-5 sm:grid-cols-2"><NewsCard item={news[0]} featured />{news.slice(1, 5).map((item) => <NewsCard key={item.id} item={item} />)}</div></div><MostRead items={news} /></section></main><footer className="border-t bg-slate-900 py-8 text-center text-sm text-slate-400">© ২০২৬ বাংলা নিউজ ২৪ · সত্যের সঙ্গে, মানুষের পাশে</footer></>
}
