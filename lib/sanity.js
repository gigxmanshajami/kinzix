// lib/sanity.js
import sanityClient from '@sanity/client'

// Configure Sanity Client
export const client = sanityClient({
    projectId: 'e50842sl', // Your Sanity project ID
    dataset: 'production', // or your dataset name
    useCdn: true, // use CDN for faster reads
})
