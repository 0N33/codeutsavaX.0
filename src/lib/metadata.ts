import type { Metadata } from "next";

import { siteConfig } from "@/data/site";

type PageMetadataOptions = {
    title: string;
    description: string;
    path: `/${string}`;
};

export function createPageMetadata({
    title,
    description,
    path,
}: PageMetadataOptions): Metadata {
    const socialTitle = `${title} | ${siteConfig.name}`;

    return {
        title,
        description,
        alternates: {
            canonical: path,
        },
        openGraph: {
            title: socialTitle,
            description,
            siteName: siteConfig.name,
            type: "website",
            url: path,
        },
        twitter: {
            card: "summary",
            title: socialTitle,
            description,
        },
    };
}
