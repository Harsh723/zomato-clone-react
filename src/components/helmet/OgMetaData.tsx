import React from "react";
import { Helmet } from "react-helmet";

interface IOgMetaData {
    title?: string;
    description?: string;
}

function OgMetaData(props: IOgMetaData) {
    const { title, description } = props;
    return (
        <Helmet>
            <title>{title}</title>
            <meta property="og:title" content={title} />
            <meta name="description" content={description} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content="/zomato.png" />
        </Helmet>
    );
}

export default OgMetaData;
