import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "@mui/material/Button";
import Login from "module/login-modal/login";
import Signup from "module/login-modal/signup";

type FooterModal = {
    login: boolean;
    signUp: boolean;
};

interface ICenteredModal {
    show: boolean;
    onHide: () => void;
    showModal: FooterModal;
    toggle: (input: boolean) => void;
}

function CenteredModal({ show, onHide, showModal, toggle }: ICenteredModal) {
    return (
        <Modal
            onHide={onHide}
            show={show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            style={{ fontSize: "1.6rem" }}
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter" style={{ fontSize: "1.8rem", fontWeight: "bold" }}>
                    {showModal.login ? "Login" : "Signup"}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>{showModal.login ? <Login /> : <Signup />}</Modal.Body>
            <Modal.Footer
                style={{
                    display: "flex",
                    justifyContent: "flex-start"
                }}
            >
                <LoginFooter
                    text={showModal.login ? "New to Zomato?" : "Already have an account?"}
                    link={showModal.login ? "Create an account" : "Login"}
                    toggle={toggle}
                    login={showModal.login}
                />
            </Modal.Footer>
        </Modal>
    );
}

const LoginFooter = ({ text, link, toggle, login }: any) => {
    return (
        <div style={{ display: "flex", alignItems: "center" }}>
            <span>{text}</span>
            <Button className="footerButton" onClick={() => toggle(login)}>
                <span style={{ fontSize: "1.5rem" }}>{link}</span>
            </Button>
        </div>
    );
};

export default CenteredModal;
