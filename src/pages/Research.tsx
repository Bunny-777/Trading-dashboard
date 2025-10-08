import { FileText, TrendingUp, BookOpen, Video } from 'lucide-react';

export default function Research() {
  const articles = [
    { title: 'Bitcoin Market Analysis Q4 2024', category: 'Market Analysis', date: '2024-12-10', author: 'Sarah Chen' },
    { title: 'Understanding DeFi Protocols', category: 'Education', date: '2024-12-08', author: 'Mike Johnson' },
    { title: 'Ethereum 2.0: What to Expect', category: 'Technical', date: '2024-12-05', author: 'Alex Rivera' },
    { title: 'Risk Management in Crypto Trading', category: 'Strategy', date: '2024-12-03', author: 'Emma Wilson' },
  ];

  const videos = [
    { title: 'Crypto Trading for Beginners', duration: '15:30', views: '125K' },
    { title: 'Technical Analysis Masterclass', duration: '28:45', views: '89K' },
    { title: 'Understanding Market Trends', duration: '12:15', views: '156K' },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Research & Education</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6">
          <div className="w-12 h-12 bg-lime-500/20 rounded-lg flex items-center justify-center mb-4">
            <FileText className="w-6 h-6 text-lime-500" />
          </div>
          <div className="text-2xl font-bold mb-2 text-neutral-900 dark:text-white">245</div>
          <div className="text-sm text-neutral-500 dark:text-neutral-400">Research Articles</div>
        </div>

        <div className="bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6">
          <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
            <Video className="w-6 h-6 text-blue-500" />
          </div>
          <div className="text-2xl font-bold mb-2 text-neutral-900 dark:text-white">89</div>
          <div className="text-sm text-neutral-500 dark:text-neutral-400">Video Tutorials</div>
        </div>

        <div className="bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6">
          <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
            <BookOpen className="w-6 h-6 text-purple-500" />
          </div>
          <div className="text-2xl font-bold mb-2 text-neutral-900 dark:text-white">34</div>
          <div className="text-sm text-neutral-500 dark:text-neutral-400">Courses</div>
        </div>

        <div className="bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6">
          <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
            <TrendingUp className="w-6 h-6 text-orange-500" />
          </div>
          <div className="text-2xl font-bold mb-2 text-neutral-900 dark:text-white">156</div>
          <div className="text-sm text-neutral-500 dark:text-neutral-400">Market Reports</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-6">Latest Research Articles</h2>
          <div className="space-y-4">
            {articles.map((article, index) => (
              <div key={index} className="p-4 border border-neutral-200 dark:border-neutral-800 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-900/30 transition-colors cursor-pointer">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-lg text-neutral-900 dark:text-white">{article.title}</h3>
                  <span className="px-3 py-1 bg-lime-500/20 text-lime-500 rounded-full text-xs font-medium whitespace-nowrap ml-4">
                    {article.category}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm text-neutral-500 dark:text-neutral-400">
                  <span>{article.author}</span>
                  <span>•</span>
                  <span>{article.date}</span>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 px-6 py-3 bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-800 text-neutral-900 dark:text-white rounded-lg font-semibold transition-colors">
            View All Articles
          </button>
        </div>

        <div className="bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-6">Popular Videos</h2>
          <div className="space-y-4">
            {videos.map((video, index) => (
              <div key={index} className="cursor-pointer group">
                <div className="w-full h-32 bg-gradient-to-br from-lime-500/20 to-emerald-500/20 rounded-lg mb-3 flex items-center justify-center group-hover:from-lime-500/30 group-hover:to-emerald-500/30 transition-colors">
                  <Video className="w-12 h-12 text-lime-500" />
                </div>
                <h3 className="font-medium text-sm mb-2 text-neutral-900 dark:text-white group-hover:text-lime-500 transition-colors">
                  {video.title}
                </h3>
                <div className="flex items-center gap-3 text-xs text-neutral-500 dark:text-neutral-400">
                  <span>{video.duration}</span>
                  <span>•</span>
                  <span>{video.views} views</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-lime-500 to-emerald-500 rounded-xl p-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-black mb-2">Crypto Masterclass</h2>
            <p className="text-black/80 mb-4">
              Access our premium educational content and become a crypto expert
            </p>
            <button className="px-6 py-3 bg-black text-white rounded-lg font-semibold hover:bg-black/90 transition-colors">
              Enroll Now
            </button>
          </div>
          <BookOpen className="w-32 h-32 text-black/20" />
        </div>
      </div>
    </div>
  );
}
