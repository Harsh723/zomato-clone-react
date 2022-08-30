import React from "react";
import {
    HOME_PAGE_LOGO,
    HOME_PAGE_TOP_BANNER,
    HOME_PAGE_GO_OUT_FOR_A_MEAL,
    HOME_PAGE_NIGHT_LIFE,
    HOME_PAGE_ORDER_FOOD_ONLINE,
    HOME_PAGE_ZOMATO_PRO
} from "constants/img-constants";
import Header from "components/header/header";
import SearchBar from "components/search-bar/SearchBar";
import StaticImages from "./StaticImages";
import "./style.css";
import Footer from "components/footer/footer";

const data = [HOME_PAGE_GO_OUT_FOR_A_MEAL, HOME_PAGE_NIGHT_LIFE, HOME_PAGE_ORDER_FOOD_ONLINE, HOME_PAGE_ZOMATO_PRO];

const HomePage = () => (
    <>
        <TopBanner a="harsh" b={12} c d={12345} />
        <StaticImages orderOnline={data[2]} outForAMeal={data[0]} zomatoPro={data[3]} nightLife={data[1]} />
        <Footer />
    </>
);

const TopBanner = ({ a, b, ...props }: any) => {
    const heading = "Discover the best food & drinks";
    console.log({ ...props });

    return (
        <>
            <div className="topBannerContainer">
                {/* <link rel="preload" href={HOME_PAGE_TOP_BANNER} as="image" /> */}
                {/* Add loading="lazy" only to images which are positioned below the fold. */}
                <img
                    src={HOME_PAGE_TOP_BANNER}
                    data-src={HOME_PAGE_TOP_BANNER}
                    width="100%"
                    height="100%"
                    alt="home-page-top-banner"
                    loading="eager"
                />
                <Header showLogo={false} />
                <div className="logoContainer">
                    <img
                        src={HOME_PAGE_LOGO}
                        data-src={HOME_PAGE_LOGO}
                        alt="home-page-logo"
                        loading="eager"
                        height={65}
                        width={30}
                    />
                    <h1 className="heading">{heading}</h1>
                </div>
                <SearchBar showLogo={false} />
            </div>
        </>
    );
};

export default HomePage;
