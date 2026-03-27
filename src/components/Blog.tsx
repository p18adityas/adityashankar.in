'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
}

export default function Blog({ posts }: { posts: BlogPost[] }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="blog" className="py-32 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-accent font-mono text-sm tracking-widest uppercase mb-4">
            // Blog
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-gradient-subtle">
            Thoughts &amp; writing
          </h2>
        </motion.div>

        <div className="space-y-6">
          {posts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
            >
              <Link href={`/blog/${post.slug}`} className="block group">
                <div className="glass rounded-2xl p-8 glass-hover">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-mono text-gray-500">
                          {post.date}
                        </span>
                        <span className="text-gray-700">&middot;</span>
                        <span className="text-xs font-mono text-gray-500">
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-accent transition-colors mb-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
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
                    <ArrowRight
                      size={20}
                      className="text-gray-600 group-hover:text-accent group-hover:translate-x-1 transition-all shrink-0"
                    />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-accent font-mono text-sm hover:text-accent-light transition-colors"
          >
            Read all posts &rarr;
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
