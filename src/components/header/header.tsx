/* eslint-disable @typescript-eslint/no-empty-function */
import React from "react";
import SimpleBackdrop from "components/login-signup/backdrop";
import "./style.css";
import CommonLogin from "components/login-signup/CommonLogin";

function Header() {
    return (
        <header className="header">
            <div className="mobile">
                <SimpleBackdrop />
            </div>
            <div className="largeScreen">
                <CommonLogin display={false} onClick={() => {}} />
            </div>
        </header>
    );
}

export default Header;
