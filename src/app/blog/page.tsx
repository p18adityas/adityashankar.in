import { getAllBlogPosts } from '@/lib/blogs';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog — Aditya Shankar',
  description: 'Thoughts on product management, enterprise AI, and building at scale.',
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 min-h-screen">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-accent font-mono text-sm tracking-widest uppercase mb-4">
            // Blog
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-subtle">
            All Posts
          </h1>
          <p className="text-gray-400 mb-16">
            Thoughts on product management, enterprise AI, and building at scale.
          </p>

          <div className="space-y-6">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
                <div className="glass rounded-2xl p-8 glass-hover">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-mono text-gray-500">
                      {post.date}
                    </span>
                    <span className="text-gray-700">&middot;</span>
                    <span className="text-xs font-mono text-gray-500">
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-white group-hover:text-accent transition-colors mb-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[10px] font-mono text-accent/60 border border-accent/15 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {posts.length === 0 && (
            <div className="text-center py-20 text-gray-500">
              <p className="text-lg">No posts yet. Check back soon!</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
