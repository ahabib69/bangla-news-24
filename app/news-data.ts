export const categories = ['সর্বশেষ', 'জাতীয়', 'রাজনীতি', 'আন্তর্জাতিক', 'খেলা', 'বিনোদন', 'অর্থনীতি', 'প্রযুক্তি']

export type NewsItem = {
  id: string
  title: string
  category: string
  excerpt: string
  image: string
  time: string
  author: string
  views: string
  body: string[]
}

export const newsList: NewsItem[] = [
  { id: '1', category: 'জাতীয়', title: 'দেশের অর্থনীতিতে নতুন সম্ভাবনা, প্রবৃদ্ধি বাড়ার আশা', excerpt: 'অর্থনীতিবিদরা বলছেন, চলমান সংস্কার কার্যক্রম দ্রুত বাস্তবায়ন হলে দেশের অর্থনীতি আরও শক্তিশালী হবে।', image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=900&q=80', time: '১২ মিনিট আগে', author: 'নিজস্ব প্রতিবেদক', views: '১২.৫K', body: ['অর্থনীতির বিভিন্ন সূচকে ইতিবাচক পরিবর্তন দেখা যাচ্ছে। বিশেষজ্ঞদের মতে, নতুন উদ্যোগগুলো বাস্তবায়ন হলে কর্মসংস্থান ও বিনিয়োগ দুটোই বাড়বে।', 'আজ রাজধানীতে আয়োজিত এক আলোচনা সভায় বক্তারা এসব কথা বলেন। তারা দীর্ঘমেয়াদি পরিকল্পনার পাশাপাশি দ্রুত বাস্তবায়নের ওপর জোর দেন।'] },
  { id: '2', category: 'রাজনীতি', title: 'নির্বাচন নিয়ে দলগুলোর মধ্যে সংলাপ শুরু হচ্ছে আজ', excerpt: 'রাজনৈতিক দলগুলোর সঙ্গে ধারাবাহিক আলোচনার প্রথম বৈঠক আজ অনুষ্ঠিত হবে।', image: 'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=900&q=80', time: '২৮ মিনিট আগে', author: 'ঢাকা প্রতিনিধি', views: '৮.২K', body: ['নির্বাচনকে সামনে রেখে রাজনৈতিক দলগুলোর সঙ্গে সংলাপ শুরু করতে যাচ্ছে নির্বাচন কমিশন। প্রথম ধাপে কয়েকটি দলের সঙ্গে বৈঠকের সূচি চূড়ান্ত করা হয়েছে।', 'নির্বাচন কমিশন জানিয়েছে, সব দলের মতামত গুরুত্বের সঙ্গে বিবেচনা করা হবে।'] },
  { id: '3', category: 'আন্তর্জাতিক', title: 'আঞ্চলিক সহযোগিতা বাড়াতে নতুন চুক্তি স্বাক্ষর', excerpt: 'বাণিজ্য ও যোগাযোগ সহজ করতে প্রতিবেশী দেশগুলোর মধ্যে নতুন উদ্যোগ।', image: 'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=900&q=80', time: '১ ঘণ্টা আগে', author: 'আন্তর্জাতিক ডেস্ক', views: '৬.৭K', body: ['আঞ্চলিক সহযোগিতা জোরদার করতে একটি নতুন চুক্তি স্বাক্ষর করেছে প্রতিবেশী দেশগুলো। এতে বাণিজ্যিক যোগাযোগ আরও সহজ হবে বলে আশা করা হচ্ছে।'] },
  { id: '4', category: 'খেলা', title: 'শেষ ওভারের রোমাঞ্চে বাংলাদেশের দুর্দান্ত জয়', excerpt: 'দারুণ লড়াই শেষে গুরুত্বপূর্ণ ম্যাচে জয় তুলে নিয়েছে বাংলাদেশ।', image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=900&q=80', time: '২ ঘণ্টা আগে', author: 'ক্রীড়া প্রতিবেদক', views: '১৮.৯K', body: ['ম্যাচের শেষ ওভারে অসাধারণ ব্যাটিং করে জয় নিশ্চিত করে বাংলাদেশ। শুরুতে কিছুটা চাপে থাকলেও শেষ পর্যন্ত দলটি দারুণভাবে ঘুরে দাঁড়ায়।'] },
  { id: '5', category: 'বিনোদন', title: 'নতুন সিনেমা নিয়ে ফিরছেন জনপ্রিয় অভিনেতা', excerpt: 'দীর্ঘ বিরতির পর নতুন সিনেমার ঘোষণা দিলেন জনপ্রিয় তারকা।', image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=900&q=80', time: '৩ ঘণ্টা আগে', author: 'বিনোদন ডেস্ক', views: '৫.৪K', body: ['নতুন সিনেমার গল্প ও নির্মাতা সম্পর্কে শিগগিরই বিস্তারিত জানানো হবে। দর্শকদের জন্য এটি হতে যাচ্ছে বিশেষ একটি আয়োজন।'] },
  { id: '6', category: 'প্রযুক্তি', title: 'দেশে চালু হচ্ছে দ্রুতগতির নতুন ডিজিটাল সেবা', excerpt: 'নাগরিকদের সেবা আরও সহজ করতে নতুন প্ল্যাটফর্ম চালু করা হচ্ছে।', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80', time: '৪ ঘণ্টা আগে', author: 'প্রযুক্তি ডেস্ক', views: '৪.১K', body: ['নতুন ডিজিটাল প্ল্যাটফর্মের মাধ্যমে নাগরিকরা ঘরে বসেই বিভিন্ন সেবা পাবেন। পরীক্ষামূলক কার্যক্রম সফল হলে সারাদেশে এটি চালু করা হবে।'] },
]

export const getNews = (id: string) => newsList.find((item) => item.id === id)
export const getCategoryNews = (category: string) => category === 'সর্বশেষ' ? newsList : newsList.filter((item) => item.category === category)

export async function getLiveCategories() {
  try {
    const response = await fetch('https://vercel.app', { next: { revalidate: 3600 } })
    if (!response.ok) throw new Error('category request failed')
    return categories
  } catch {
    return categories
  }
}

export async function getLiveNews() {
  return newsList
}
