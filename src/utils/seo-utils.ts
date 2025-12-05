import { Metadata } from 'next';

interface SEOProps {
    title: string;
    description: string;
    keywords?: string[];
    canonical?: string;
    images?: string[];
    type?: 'website' | 'article';
}

export function generatePageMetadata({
    title,
    description,
    keywords = [],
    canonical,
    images = ['https://www.rustcrab.com/rust_lgo_720.png'],
    type = 'website'
}: SEOProps): Metadata {
    const baseKeywords = [
        'Rust',
        'Rust Programming',
        'Learn Rust',
        'Rustcrab',
    ];

    return {
        title,
        description,
        keywords: [...baseKeywords, ...keywords],
        openGraph: {
            title,
            description,
            type,
            images: images.map(img => ({
                url: img,
                width: 1200,
                height: 630,
                alt: title
            })),
            locale: 'en_US',
            siteName: 'Rustcrab'
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: images[0]
        },
        alternates: canonical ? { canonical } : undefined,
        metadataBase: new URL('https://www.rustcrab.com'),
    };
}
