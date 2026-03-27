import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('blog');
  const siteUrl = 'https://www.sakuraio.com/blog';

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  ${posts.map(post => {
    const postUrl = `${siteUrl}/${post.slug}/`;
    const lastMod = new Date(post.data.date).toISOString().split('T')[0] + 'T00:00:00Z';

    return `
  <url>
    <loc>${postUrl}</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`;
  }).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
