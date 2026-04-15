import { getCollection } from 'astro:content';
import getSortedPosts from '../utils/getSortedPosts';
import getUniqueTags from '../utils/getUniqueTags';
import { SITE } from '../config';
import getPostSlug from '../utils/getPostSlug';

export async function GET() {
  const posts = getSortedPosts(await getCollection('blog'));
  const tags = getUniqueTags(posts);

  const staticUrls = [
    '/',
    '/about/',
    '/posts/',
    '/tags/',
    '/rss.xml',
  ];

  const postUrls = posts.map(post => `/posts/${getPostSlug(post.id)}/`);
  const tagUrls = tags.map(tag => `/tags/${tag.tag}/`);

  const urls = [...staticUrls, ...postUrls, ...tagUrls]
    .map(
      path => `
  <url>
    <loc>${SITE.website}${path}</loc>
  </url>`
    )
    .join('\n');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
