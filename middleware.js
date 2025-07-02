import { NextResponse } from 'next/server';
import { getSiteSettings } from './lib/getSiteSettings';

/**
 * @param {import('next/server').NextRequest} request
 */
export async function middleware(request) {
    const pathname = request.nextUrl.pathname;
    const siteSettings = await getSiteSettings();

    // Exclude _next, static files, and API routes from middleware
    if (
        pathname.startsWith('/api') ||
        pathname.includes('_next') ||
        pathname.includes('.') // handles static files like .png, .css
    ) {
        return NextResponse.next();
    }

    const isOnMaintenancePage = pathname === '/maintenance';

    // If site is in maintenance mode and not already on /maintenance, redirect there
    if (siteSettings?.maintenanceMode && !isOnMaintenancePage) {
        const maintenanceUrl = request.nextUrl.clone();
        maintenanceUrl.pathname = '/maintenance';
        return NextResponse.redirect(maintenanceUrl);
    }

    // If site is NOT in maintenance mode but user is on /maintenance, redirect to home
    if (!siteSettings?.maintenanceMode && isOnMaintenancePage) {
        const homeUrl = request.nextUrl.clone();
        homeUrl.pathname = '/';
        return NextResponse.redirect(homeUrl);
    }

    return NextResponse.next();
}
