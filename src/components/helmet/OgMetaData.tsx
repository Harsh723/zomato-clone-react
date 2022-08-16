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
            <meta name="description" content={description} />
        </Helmet>
    );
}

export default OgMetaData;
