import React from "react";
import { countries, footerImage, language } from "constants/img-constants";
import CommonDropdown from "./lang-country";
import "./style.css";

function Footer() {
    return (
        <footer className="footer">
            <Logo />
            <Info />
        </footer>
    );
}

const Logo = () => {
    return (
        <div className="logo">
            <img src={footerImage} data-src={footerImage} height="100%" alt="Zomato Footer" loading="lazy" width="10%" />
            <div className="dropdownContainer">
                <CommonDropdown title="India" value={countries} />
                <CommonDropdown title="English" value={language} />
            </div>
        </div>
    );
};

type HeadingType = "COMPANY" | "FOR FOODIES" | "RESTAURANTS" | "FOR YOU";

type SubheadingType =
    | ["Who We Are", "Blog", "Careers", "Report Fraud", "Contact", "Investor Relation"]
    | ["Code of Conduct", "Community", "Blogger Help", "Mobile Apps"]
    | ["Add Restaurants"]
    | ["Zomato for Work"]
    | ["Privacy", "Terms", "Security", "Sitemap"];

type InforArray = {
    heading: HeadingType;
    subHeading: SubheadingType;
};
const InfoArray: InforArray[] = [
    {
        heading: "COMPANY",
        subHeading: ["Who We Are", "Blog", "Careers", "Report Fraud", "Contact", "Investor Relation"]
    },
    {
        heading: "FOR FOODIES",
        subHeading: ["Code of Conduct", "Community", "Blogger Help", "Mobile Apps"]
    },
    {
        heading: "RESTAURANTS",
        subHeading: ["Add Restaurants"]
    },
    {
        heading: "FOR YOU",
        subHeading: ["Privacy", "Terms", "Security", "Sitemap"]
    }
];

const Info = () => (
    <div className="InfoContainer">
        {InfoArray.map((el, index) => (
            <div key={el.heading}>
                <h6 className="heading">{el.heading}</h6>
                <SubHeading data={el.subHeading} />
            </div>
        ))}
    </div>
);

const SubHeading = ({ data }: { data: string[] }) => (
    <>
        {data.map((el) => (
            <p key={el} className="subheading">
                {el}
            </p>
        ))}
    </>
);

export default Footer;
