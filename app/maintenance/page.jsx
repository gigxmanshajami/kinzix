// app/maintenance/page.tsx
import { getSiteSettings } from '@/lib/getSiteSettings';

export default async function MaintenancePage() {
    const siteSettings = await getSiteSettings();

    return (
        <main className="min-h-screen flex items-center justify-center bg-[#f8f8f8] px-4 text-center">
            <div className="max-w-xl">
                <h1 className="text-3xl font-bold text-[#222] mb-4">🚧 Maintenance Mode</h1>
                <p className="text-lg text-[#555]">{siteSettings?.maintenanceMessage || 'We’ll be back soon!'}</p>
            </div>
        </main>
    );
}
