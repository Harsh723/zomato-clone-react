/* eslint-disable @typescript-eslint/no-empty-function */
import React from "react";
import SimpleBackdrop from "components/login-signup/backdrop";
import "./style.css";
import CommonLogin from "components/login-signup/CommonLogin";
import { IHeaderProps } from "components/wrapper/AppWrapper";
import { footerImage } from "constants/img-constants";
import SearchBar from "components/search-bar/SearchBar";

function Header({ showLogo }: IHeaderProps) {
    return (
        <header>
            <nav style={{ padding: "2rem" }} className={showLogo ? "navHeader" : ""}>
                {showLogo && (
                    <>
                        <img
                            src={footerImage}
                            data-src={footerImage}
                            alt="home-page-logo"
                            loading="eager"
                            height={25}
                            width={100}
                        />
                        <SearchBar showLogo={true} />
                    </>
                )}
                <div className="mobile">
                    <SimpleBackdrop />
                </div>
                <div className="largeScreen">
                    <CommonLogin display={false} onClick={() => {}} showLogo={showLogo} />
                </div>
            </nav>
        </header>
    );
}

export default Header;
