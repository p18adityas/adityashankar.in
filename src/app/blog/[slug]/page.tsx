import { getAllBlogPosts, getBlogPost } from '@/lib/blogs';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ArrowLeft } from 'lucide-react';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getBlogPost(params.slug);
  if (!post) return { title: 'Post Not Found' };
  return {
    title: `${post.title} — Aditya Shankar`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getBlogPost(params.slug);
  if (!post) notFound();

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 min-h-screen">
        <article className="max-w-3xl mx-auto px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-accent transition-colors mb-8 font-mono"
          >
            <ArrowLeft size={16} />
            Back to blog
          </Link>

          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm font-mono text-gray-500">
                {post.date}
              </span>
              <span className="text-gray-700">&middot;</span>
              <span className="text-sm font-mono text-gray-500">
                {post.readTime}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
              {post.title}
            </h1>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-mono text-accent/70 border border-accent/20 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="border-t border-white/[0.06] pt-10">
            <div
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />
          </div>

          <div className="border-t border-white/[0.06] mt-16 pt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-accent font-mono text-sm hover:text-accent-light transition-colors"
            >
              <ArrowLeft size={16} />
              All posts
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
