import { projects } from '$lib/projects';

const origin = 'https://nexapulse.pro';
const staticPaths = ['/', '/about', '/projects', '/contact', '/founder'];

export function GET() {
  const urls = [
    ...staticPaths.map((path) => `${origin}${path}`),
    ...projects.map((project) => `${origin}/projects/${project.slug}`)
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url><loc>${url}</loc></url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}
