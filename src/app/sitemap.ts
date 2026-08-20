import type { MetadataRoute } from "next";

import { siteUrl } from "@/data/site";

const routes = ["", "/events", "/team", "/contact-us", "/faq", "/timer"];

export default function sitemap(): MetadataRoute.Sitemap {
    return routes.map((route) => ({
        url: `${siteUrl}${route}`,
        changeFrequency: route === "" ? "weekly" : "monthly",
        priority: route === "" ? 1 : 0.7,
    }));
}
