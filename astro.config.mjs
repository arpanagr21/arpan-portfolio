// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'github-dark',
      wrap: true
    },
    remarkPlugins: [
      remarkGfm // GitHub Flavored Markdown: tables, strikethrough, autolinks, task lists
    ],
    rehypePlugins: [
      rehypeSlug, // Add IDs to headings
      [rehypeAutolinkHeadings, { behavior: 'wrap' }] // Make headings linkable
    ]
  }
});
