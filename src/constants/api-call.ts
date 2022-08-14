import axios from "axios";

export const commonHeader = (url: string) => {
    console.log("environ", process.env.NODE_ENV);

    const finalURL = process.env.REACT_APP_ZOMATO_BASE_URL + url;
    return axios.get(finalURL, {
        headers: {
            "user-key": process.env.REACT_APP_ZOMATO_API!
        }
    });
};
