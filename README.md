# adityashankar.in

Personal portfolio website built with Next.js, Tailwind CSS, and Framer Motion.

## Getting Started

```bash
npm install
npm run dev     # Start dev server at http://localhost:3000
npm run build   # Production build
npm start       # Start production server
```

## Managing Your Content

### Adding a New Blog Post

Create a new `.md` file in `content/blogs/`:

```markdown
---
title: "Your Blog Title"
excerpt: "A short description shown on the blog listing page."
date: "2025-03-27"
readTime: "5 min read"
tags: ["Tag1", "Tag2"]
published: true
---

Your blog content in Markdown here...
```

- Set `published: false` to hide a draft
- File name becomes the URL slug (e.g., `my-post.md` → `/blog/my-post`)

### Adding/Editing Projects

Edit `content/projects.json`:

```json
{
  "slug": "project-name",
  "title": "Project Title",
  "description": "What the project is about.",
  "tags": ["Tag1", "Tag2"],
  "liveUrl": "https://example.com",
  "githubUrl": "https://github.com/you/repo",
  "featured": true
}
```

- Set `"featured": true` to highlight on the homepage
- `liveUrl` and `githubUrl` are optional

### Updating About/Experience

Edit these files directly:
- **About section**: `src/components/About.tsx`
- **Experience timeline**: `src/components/Experience.tsx`
- **Contact details**: `src/components/Contact.tsx`

## Deploying to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) and import the repo
3. Add your custom domain `adityashankar.in`
4. Every push to `main` auto-deploys

## Tech Stack

- **Next.js 14** (App Router, Static Generation)
- **Tailwind CSS** (Dark theme, custom design tokens)
- **Framer Motion** (Scroll animations)
- **Markdown** (Blog content via gray-matter + remark)
- **JSON** (Project data)
