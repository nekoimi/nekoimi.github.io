import type { CollectionEntry } from 'astro:content';

export default function getSortedPosts(posts: CollectionEntry<'blog'>[]) {
  return posts
    .filter(post => !post.data.draft)
    .sort(
      (a, b) =>
        b.data.pubDatetime.valueOf() - a.data.pubDatetime.valueOf()
    );
}
