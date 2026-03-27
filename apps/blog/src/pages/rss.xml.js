import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('blog');

  const siteUrl = 'https://www.sakuraio.com/blog';

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>SynthWorks Blog</title>
    <link>${siteUrl}</link>
    <description>AI automation insights and tutorials</description>
    <language>en-us</language>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    ${posts.map(post => {
      const postUrl = `${siteUrl}/${post.slug}/`;
      const description = post.data.description;
      const pubDate = new Date(post.data.date).toUTCString();

      return `
    <item>
      <title>${post.data.title}</title>
      <link>${postUrl}</link>
      <guid isPermaLink="false">${postUrl}</guid>
      <description>${description}</description>
      <pubDate>${pubDate}</pubDate>
      ${post.data.tags?.map(tag => `<category>${tag}</category>`).join('') || ''}
    </item>`;
    }).join('\n')}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
    'Cache-Control': 'public, max-age=3600',
    },
  });
}
