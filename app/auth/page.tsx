import Link from 'next/link'
import { AuthForm } from '@/components/news-site'

export default function AuthPage() { return <main className="min-h-screen bg-slate-50 px-4 py-12"><div className="mx-auto mb-8 max-w-md text-center"><Link href="/" className="text-2xl font-black text-red-600">বাংলা নিউজ ২৪</Link></div><AuthForm /></main> }
