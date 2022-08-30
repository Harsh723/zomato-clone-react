import OgMetaData from "components/helmet/OgMetaData";
import AppWrapper from "components/wrapper/AppWrapper";
import useLocationInfo from "custom-hooks/use-Location-Info";
import { changeToCamelCase } from "module/camel-case";
import React from "react";

export default function Location() {
    const { cityName } = useLocationInfo();
    return (
        <AppWrapper>
            <OgMetaData
                title={`Food Devlivery - ${changeToCamelCase(cityName)}`}
                description={`Best food near ${changeToCamelCase(cityName)}`}
            />
            <div>Loading...</div>
        </AppWrapper>
    );
}
