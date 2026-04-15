import type { CollectionEntry } from 'astro:content';
import { slugifyStr } from './slugify';
import getSortedPosts from './getSortedPosts';

export default function getPostsByTag(
  posts: CollectionEntry<'blog'>[],
  tag: string
) {
  return getSortedPosts(
    posts.filter(post =>
      post.data.tags.some(item => slugifyStr(item) === tag)
    )
  );
}
