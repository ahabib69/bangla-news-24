'use client'

import Link from 'next/link'
import { useState } from 'react'
import type { NewsItem } from '@/app/news-data'
import { categories } from '@/app/news-data'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  return <>
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="grid h-10 w-10 place-items-center rounded-md bg-red-600 text-xl font-black text-white">২৪</span>
          <span><strong className="block text-2xl leading-none tracking-tight text-slate-900">বাংলা নিউজ</strong><small className="text-[10px] font-bold uppercase tracking-[.25em] text-red-600">Bangla News 24</small></span>
        </Link>
        <div className="hidden items-center gap-6 text-sm text-slate-500 md:flex"><span>রবিবার, ৫ অক্টোবর ২০২৬</span><Link href="/auth" className="rounded-full border border-red-600 px-4 py-2 font-semibold text-red-600 hover:bg-red-50">লগইন</Link></div>
        <button aria-label="মেনু" onClick={() => setMenuOpen(!menuOpen)} className="text-2xl text-slate-800 md:hidden">☰</button>
      </div>
      <nav className={`${menuOpen ? 'block' : 'hidden'} border-t border-slate-100 md:block`}><div className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4 py-2">{categories.map((category) => <Link key={category} href={`/category/${encodeURIComponent(category)}`} className="shrink-0 rounded px-3 py-2 text-sm font-semibold text-slate-600 hover:bg-red-50 hover:text-red-600">{category}</Link>)}</div></nav>
    </header>
  </>
}

export function NewsCard({ item, featured = false }: { item: NewsItem; featured?: boolean }) {
  return <Link href={`/news/${item.id}`} className={`group block overflow-hidden rounded-lg border border-slate-200 bg-white ${featured ? 'md:col-span-2' : ''}`}>
    <div className={`overflow-hidden ${featured ? 'aspect-[16/8]' : 'aspect-[16/10]'}`}><img src={item.image} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /></div>
    <div className="p-4"><span className="text-xs font-bold text-red-600">{item.category}</span><h3 className={`mt-1 font-bold leading-snug text-slate-900 group-hover:text-red-600 ${featured ? 'text-2xl' : 'text-lg'}`}>{item.title}</h3><p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-500">{item.excerpt}</p><div className="mt-3 text-xs text-slate-400">{item.time} · {item.views} পাঠক</div></div>
  </Link>
}

export function MostRead({ items }: { items: NewsItem[] }) {
  return <aside className="rounded-lg border border-slate-200 bg-white p-5"><h2 className="border-b-2 border-red-600 pb-3 text-xl font-bold text-slate-900">সর্বাধিক পঠিত</h2><div>{items.slice(0, 5).map((item, index) => <Link href={`/news/${item.id}`} key={item.id} className="flex gap-3 border-b border-slate-100 py-4 last:border-0"><span className="text-2xl font-black text-red-100">০{index + 1}</span><span className="text-sm font-semibold leading-6 text-slate-700 hover:text-red-600">{item.title}</span></Link>)}</div></aside>
}

export function AuthForm() {
  const [isSignUp, setIsSignUp] = useState(false)
  const [message, setMessage] = useState('')
  function submit(event: React.FormEvent<HTMLFormElement>) { event.preventDefault(); const data = new FormData(event.currentTarget); localStorage.setItem('banglaNewsUser', JSON.stringify({ email: data.get('email'), name: data.get('name') || 'পাঠক' })); setMessage('সফলভাবে সংরক্ষণ হয়েছে। আপনাকে হোমপেজে পাঠানো হচ্ছে...'); setTimeout(() => window.location.href = '/', 700) }
  return <form onSubmit={submit} className="mx-auto max-w-md rounded-xl border border-slate-200 bg-white p-7 shadow-sm"><h1 className="text-2xl font-bold text-slate-900">{isSignUp ? 'নতুন অ্যাকাউন্ট তৈরি করুন' : 'লগইন করুন'}</h1><p className="mt-2 text-sm text-slate-500">বাংলা নিউজ ২৪-এর সঙ্গে থাকুন</p>{isSignUp && <label className="mt-6 block text-sm font-semibold text-slate-700">নাম<input name="name" required className="mt-2 w-full rounded border border-slate-300 p-3 outline-red-500" /></label>}<label className="mt-5 block text-sm font-semibold text-slate-700">ইমেইল<input name="email" type="email" required className="mt-2 w-full rounded border border-slate-300 p-3 outline-red-500" /></label><label className="mt-5 block text-sm font-semibold text-slate-700">পাসওয়ার্ড<input name="password" type="password" required className="mt-2 w-full rounded border border-slate-300 p-3 outline-red-500" /></label><button className="mt-6 w-full rounded bg-red-600 py-3 font-bold text-white hover:bg-red-700">{isSignUp ? 'সাইন আপ' : 'লগইন'}</button>{message && <p className="mt-3 text-sm text-green-600">{message}</p>}<button type="button" onClick={() => setIsSignUp(!isSignUp)} className="mt-5 w-full text-sm font-semibold text-red-600">{isSignUp ? 'আগে অ্যাকাউন্ট আছে? লগইন করুন' : 'নতুন? অ্যাকাউন্ট তৈরি করুন'}</button></form>
}
