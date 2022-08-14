/* eslint-disable max-len */
import { AxiosResponse } from "axios";
import { LocationsRoot } from "../module/interface/location-interface";
import { commonHeader } from "./api-call";

const endPoint = "https://b.zmtcdn.com";

const cmsEndPoint = "https://images.prismic.io/zomato-clone";

export const HOME_PAGE_ORDER_FOOD_ONLINE = `${cmsEndPoint}/f5f8fea4-465d-4f3a-a685-d0bc87d7097c_zomato-2.avif?auto=compress,format`;

export const HOME_PAGE_GO_OUT_FOR_A_MEAL = `${cmsEndPoint}/591ca46c-11b3-4a0f-b49a-1f9e4a120b77_zomato-1.avif?auto=compress,format`;

export const HOME_PAGE_ZOMATO_PRO = `${cmsEndPoint}/7cd2e681-b6d8-4f08-b589-021ff37dbd34_zomato-pro.avif?auto=compress,format`;

export const HOME_PAGE_NIGHT_LIFE = `${cmsEndPoint}/1fd0b75b-31db-43ef-a5ee-84392040e27b_zomato-night-life.webp?auto=compress,format`;

/* ******************************************************************************************************************************************* */

export const webAssets = `${endPoint}/web_assets`;

export const INIDAN_THUMBNAIL = `${endPoint}/images/countries/flags/country_1.png`;

export const HOME_PAGE_LOGO = `${cmsEndPoint}/13ca225c-dcaf-4f13-af61-c053796e599a_zomato-logo.avif?auto=compress,format`;

export const HOME_PAGE_TOP_BANNER = `${cmsEndPoint}/bcfad4e9-eb46-4f09-8c16-954954cb56f4_zomato-top-banner.webp?auto=compress,format`;

export const footerImage = `${webAssets}/b40b97e677bc7b2ca77c58c61db266fe1603954218.png`;

export const countries = [
    "Australia",
    "Brazil",
    "Canada",
    "Chile",
    "Czech Republic",
    "Indonesia",
    "Ireland",
    "Italy",
    "Lebanon",
    "Malaysia",
    "New Zealand",
    "Phillippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Singapore",
    "Slovakia",
    "South Africa",
    "Sri Lanka",
    "Turkey",
    "UAE",
    "United Kingdom",
    "USA"
];

export const language = [
    "Türkçe",
    "हिंदी",
    "Português (BR)",
    "Indonesian",
    "Português (PT)",
    "Español",
    "Čeština",
    "Slovenčina",
    "Polish",
    "Italian",
    "Vietnamese"
];

export const getLocationSuggestions = (locationName: string) => {
    const locationURL = `locations?query=${locationName}&count=10`;
    return commonHeader(locationURL)
        .then((result: AxiosResponse<LocationsRoot>) => {
            if (result.data.location_suggestions.length) {
                return result.data.location_suggestions;
            }
            return [];
        })
        .catch(() => {
            return [];
        });
};
