// app/sitemap.xml/route.js

// import { servicesData } from '@/data/services'; // replace with your actual services import
import { servicesData } from '../data/names';
export async function GET() {
    const baseUrl = 'https://kinzix.com';

    const staticRoutes = [
        '',
        '/services',
        '/resources',
        '/resources/blogs',
        '/contact',
        '/careers',
    ];

    const serviceSlugs = servicesData.map(service => `/services/${service.slug}`);

    const allRoutes = [...staticRoutes, ...serviceSlugs];

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
            .map(
                route => `<url><loc>${baseUrl}${route}</loc><priority>0.7</priority></url>`
            )
            .join('\n')}
</urlset>`;

    return new Response(xml, {
        headers: {
            'Content-Type': 'application/xml',
        },
    });
}
