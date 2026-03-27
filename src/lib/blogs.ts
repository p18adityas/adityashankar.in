import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const blogsDirectory = path.join(process.cwd(), 'content/blogs');

export interface BlogMeta {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  published: boolean;
}

export function getAllBlogPosts(): BlogMeta[] {
  if (!fs.existsSync(blogsDirectory)) return [];

  const files = fs.readdirSync(blogsDirectory).filter((f) => f.endsWith('.md'));

  const posts = files
    .map((filename) => {
      const slug = filename.replace(/\.md$/, '');
      const fullPath = path.join(blogsDirectory, filename);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title || 'Untitled',
        excerpt: data.excerpt || '',
        date: data.date || '',
        readTime: data.readTime || '5 min read',
        tags: data.tags || [],
        published: data.published !== false,
      } as BlogMeta;
    })
    .filter((post) => post.published)
    .sort((a, b) => (a.date > b.date ? -1 : 1));

  return posts;
}

export async function getBlogPost(slug: string) {
  const fullPath = path.join(blogsDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    title: data.title || 'Untitled',
    excerpt: data.excerpt || '',
    date: data.date || '',
    readTime: data.readTime || '5 min read',
    tags: data.tags || [],
    contentHtml,
  };
}
