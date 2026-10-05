export type NewsItem = {
  id: string
  title: string
  excerpt: string
  category: string
  categoryBn: string
  date: string
  readTime: string
  image: string
  author: string
  featured?: boolean
}

export const categories = [
  { slug: 'জাতীয়', label: 'জাতীয়' },
  { slug: 'রাজনীতি', label: 'রাজনীতি' },
  { slug: 'আন্তর্জাতিক', label: 'আন্তর্জাতিক' },
  { slug: 'অর্থনীতি', label: 'অর্থনীতি' },
  { slug: 'খেলা', label: 'খেলা' },
  { slug: 'বিনোদন', label: 'বিনোদন' },
  { slug: 'প্রযুক্তি', label: 'প্রযুক্তি' },
]

export const newsList: NewsItem[] = [
  { id: '1', title: 'উন্নয়নের নতুন পথে বাংলাদেশ, বদলে যাচ্ছে অর্থনীতির চিত্র', excerpt: 'দেশের অর্থনীতিতে ইতিবাচক পরিবর্তনের হাওয়া লেগেছে। নতুন বিনিয়োগ ও কর্মসংস্থানের সুযোগ তৈরি হচ্ছে প্রতিদিন।', category: 'জাতীয়', categoryBn: 'জাতীয়', date: '৫ অক্টোবর ২০২৬', readTime: '৩ মিনিটে পড়ুন', image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1200&q=85', author: 'নিজস্ব প্রতিবেদক', featured: true },
  { id: '2', title: 'নির্বাচন সামনে রেখে রাজনৈতিক অঙ্গনে বাড়ছে তৎপরতা', excerpt: 'দলগুলোর মাঠপর্যায়ের প্রস্তুতি, নতুন জোট নিয়ে আলোচনা এবং নীতিনির্ধারকদের ব্যস্ততা এখন তুঙ্গে।', category: 'রাজনীতি', categoryBn: 'রাজনীতি', date: '৫ অক্টোবর ২০২৬', readTime: '৪ মিনিটে পড়ুন', image: 'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=900&q=85', author: 'রাজীব হাসান' },
  { id: '3', title: 'বিশ্ববাজারে জ্বালানি তেলের দামে বড় পরিবর্তন', excerpt: 'আন্তর্জাতিক বাজারে সরবরাহ পরিস্থিতি স্বাভাবিক হওয়ায় জ্বালানি পণ্যের দামে প্রভাব পড়েছে।', category: 'আন্তর্জাতিক', categoryBn: 'আন্তর্জাতিক', date: '৪ অক্টোবর ২০২৬', readTime: '২ মিনিটে পড়ুন', image: 'https://images.unsplash.com/photo-1473621038790-b778b4750efe?auto=format&fit=crop&w=900&q=85', author: 'আন্তর্জাতিক ডেস্ক' },
  { id: '4', title: 'ঢাকার যানজট কমাতে আসছে সমন্বিত পরিবহন পরিকল্পনা', excerpt: 'রাজধানীর ব্যস্ত সড়কগুলোতে যাতায়াত সহজ করতে নতুন পরিকল্পনা হাতে নিয়েছে কর্তৃপক্ষ।', category: 'জাতীয়', categoryBn: 'জাতীয়', date: '৪ অক্টোবর ২০২৬', readTime: '৫ মিনিটে পড়ুন', image: 'https://images.unsplash.com/photo-1508964942454-1a56651d54ac?auto=format&fit=crop&w=900&q=85', author: 'শহর প্রতিবেদক' },
  { id: '5', title: 'শেয়ারবাজারে লেনদেন বেড়েছে, বিনিয়োগকারীদের আস্থা ফিরছে', excerpt: 'সপ্তাহের প্রথম কার্যদিবসে সূচকের উত্থানের পাশাপাশি লেনদেনেও গতি দেখা গেছে।', category: 'অর্থনীতি', categoryBn: 'অর্থনীতি', date: '৩ অক্টোবর ২০২৬', readTime: '৩ মিনিটে পড়ুন', image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=900&q=85', author: 'অর্থনীতি ডেস্ক' },
  { id: '6', title: 'এশিয়া কাপে দুর্দান্ত জয়, ফাইনালের পথে বাংলাদেশ', excerpt: 'শেষ ওভারের রোমাঞ্চে প্রতিপক্ষকে হারিয়ে টুর্নামেন্টে নিজেদের অবস্থান শক্ত করেছে টাইগাররা।', category: 'খেলা', categoryBn: 'খেলা', date: '৩ অক্টোবর ২০২৬', readTime: '৪ মিনিটে পড়ুন', image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=900&q=85', author: 'ক্রীড়া প্রতিবেদক' },
  { id: '7', title: 'নতুন সিনেমায় জুটি বাঁধছেন জনপ্রিয় দুই তারকা', excerpt: 'বছরের বহুল প্রত্যাশিত সিনেমার ঘোষণা দিলেন নির্মাতা। শুটিং শুরু হবে আগামী মাসে।', category: 'বিনোদন', categoryBn: 'বিনোদন', date: '২ অক্টোবর ২০২৬', readTime: '২ মিনিটে পড়ুন', image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=900&q=85', author: 'বিনোদন ডেস্ক' },
  { id: '8', title: 'দেশের তরুণদের জন্য চালু হলো নতুন প্রযুক্তি প্ল্যাটফর্ম', excerpt: 'প্রযুক্তি উদ্যোক্তাদের সহায়তা ও প্রশিক্ষণের জন্য প্ল্যাটফর্মটিতে থাকছে নানা সুবিধা।', category: 'প্রযুক্তি', categoryBn: 'প্রযুক্তি', date: '२ অক্টোবর २०२६', readTime: '३ मिनिटे पढें', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=85', author: 'টেক ডেস্ক' },
]

export function getNewsById(id: string) {
  return newsList.find((item) => item.id === id)
}

export function getNewsByCategory(category: string) {
  return newsList.filter((item) => item.category === category)
}

export async function getNewsData() {
  try {
    const response = await fetch('https://vercel.app', { next: { revalidate: 300 } })
    if (response.ok) {
      // live endpoint can be wired here later
    }
  } catch {
    // keep the front page useful when the feed is unavailable
  }
  return newsList
}

export const breakingNews = ['জাতীয় বাজেট বাস্তবায়নে নতুন উদ্যোগ', 'ঢাকায় শুরু হচ্ছে আন্তর্জাতিক বাণিজ্য মেলা', 'বাংলাদেশের নারী ফুটবলে ঐতিহাসিক সাফল্য']

export const mostRead = [newsList[0], newsList[5], newsList[1], newsList[4]]
