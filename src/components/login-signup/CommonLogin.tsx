import ButtonBase from "@mui/material/ButtonBase";
import React, { useState, Suspense } from "react";

const CenteredModal = React.lazy(() => import("components/modal/CenteredModal"));

type LoginSignUp = {
    login: boolean;
    signUp: boolean;
};

type CommonLoginType = {
    display: boolean;
    onClick: () => void;
    showLogo?: boolean;
};

const CommonLogin = ({ display, onClick, showLogo }: CommonLoginType) => {
    const [modalShow, setModalShow] = useState<LoginSignUp>({} as LoginSignUp);

    const handleLoginSignup = (value: string) => {
        if (display) onClick();
        if (value === "Login") {
            setModalShow({ login: true, signUp: false });
        } else {
            setModalShow({ login: false, signUp: true });
        }
    };

    const handleClose = () => {
        setModalShow({ login: false, signUp: false });
    };

    const toggleModal = (value: boolean) => {
        if (value) setModalShow({ login: false, signUp: true });
        else setModalShow({ login: true, signUp: false });
    };

    return (
        <>
            <div className={display ? "small" : "lg"}>
                <ButtonBase onClick={() => handleLoginSignup("Login")}>
                    <p style={{ fontSize: "1rem", color: showLogo ? "black" : "white", cursor: "pointer" }}>Log in</p>
                </ButtonBase>
                <ButtonBase onClick={() => handleLoginSignup("Signup")}>
                    <p style={{ fontSize: "1rem", color: showLogo ? "black" : "white", cursor: "pointer" }}>Sign up</p>
                </ButtonBase>
            </div>
            {(modalShow.login || modalShow.signUp) && (
                <Suspense fallback={<div>Loading...</div>}>
                    <CenteredModal
                        show={modalShow.login || modalShow.signUp}
                        onHide={handleClose}
                        showModal={modalShow}
                        toggle={toggleModal}
                    />
                </Suspense>
            )}
        </>
    );
};

export default CommonLogin;
