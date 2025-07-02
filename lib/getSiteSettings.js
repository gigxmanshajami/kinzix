// For getSiteSettings.js (JS version)
export const dynamic = 'force-dynamic';

export const getSiteSettings = async () => {
    const projectId = process.env.SANITY_PROJECT_ID;
    const dataset = process.env.SANITY_DATASET;
    const query = encodeURIComponent(`*[_type == "siteSettings"][0]{maintenanceMode, maintenanceMessage}`);
    const url = `https://${projectId}.api.sanity.io/v2021-10-21/data/query/${dataset}?query=${query}`;

    const res = await fetch(url, { cache: 'no-store' });
    const { result } = await res.json();
    return result;
};
