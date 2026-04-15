import type { CollectionEntry } from 'astro:content';
import { slugifyStr } from './slugify';

export default function getUniqueTags(posts: CollectionEntry<'blog'>[]) {
  const tags = new Map<string, string>();

  posts
    .filter(post => !post.data.draft)
    .forEach(post => {
      post.data.tags.forEach(tag => {
        const slug = slugifyStr(tag);
        if (!tags.has(slug)) {
          tags.set(slug, tag);
        }
      });
    });

  return Array.from(tags.entries())
    .map(([tag, tagName]) => ({ tag, tagName }))
    .sort((a, b) => a.tagName.localeCompare(b.tagName));
}
