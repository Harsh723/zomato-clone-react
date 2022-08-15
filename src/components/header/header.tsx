/* eslint-disable @typescript-eslint/no-empty-function */
import React from "react";
import SimpleBackdrop from "components/login-signup/backdrop";
import "./style.css";
import CommonLogin from "components/login-signup/CommonLogin";

function Header() {
    return (
        <header>
            <nav style={{ padding: "2rem" }}>
                <div className="mobile">
                    <SimpleBackdrop />
                </div>
                <div className="largeScreen">
                    <CommonLogin display={false} onClick={() => {}} />
                </div>
            </nav>
        </header>
    );
}

export default Header;
