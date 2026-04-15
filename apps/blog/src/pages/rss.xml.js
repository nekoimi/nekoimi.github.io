import { getCollection } from 'astro:content';
import getSortedPosts from '../utils/getSortedPosts';
import { SITE } from '../config';
import getPostSlug from '../utils/getPostSlug';

export async function GET() {
  const posts = getSortedPosts(await getCollection('blog'));
  const items = posts
    .map(
      post => `
    <item>
      <title><![CDATA[${post.data.title}]]></title>
      <link>${SITE.website}/posts/${getPostSlug(post.id)}/</link>
      <guid>${SITE.website}/posts/${getPostSlug(post.id)}/</guid>
      <description><![CDATA[${post.data.description}]]></description>
      <pubDate>${post.data.pubDatetime.toUTCString()}</pubDate>
    </item>`
    )
    .join('\n');

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${SITE.title}</title>
    <link>${SITE.website}</link>
    <description>${SITE.desc}</description>
    ${items}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
    },
  });
}
