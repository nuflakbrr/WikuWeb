import React from 'react';
import { Helmet } from "react-helmet";

export default function SEO({ title, description, siteUrl, ogType, ogImage, twitter, twImage }) {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="robots" content="follow, index" />
            <meta name="description" content={description} />
            <meta property="og:url" content={siteUrl} />
            <meta property="og:type" content={ogType} />
            <meta property="og:site_name" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:title" content={title} />
            <meta property="og:image" content={ogImage} key={ogImage} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content={twitter} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={twImage} />
        </Helmet>
    )
}
