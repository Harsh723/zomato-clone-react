import React from "react";
import Button from "@mui/material/Button";
import Login from "module/login-modal/login";
import Signup from "module/login-modal/signup";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import useDevice from "custom-hooks/use-Phone-Size";

const style = {
    position: "absolute" as const,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4
};

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
    const isPhone = useDevice("480");
    return (
        <Modal open={show} onClose={onHide} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
            <Box sx={style} style={{ width: isPhone ? "73%" : "400px" }}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {showModal.login ? "Login" : "Signup"}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    {showModal.login ? <Login /> : <Signup />}
                </Typography>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    <LoginFooter
                        text={showModal.login ? "New to Zomato?" : "Already have an account?"}
                        link={showModal.login ? "Create an account" : "Login"}
                        toggle={toggle}
                        login={showModal.login}
                    />
                </Typography>
            </Box>
        </Modal>
    );
}

const LoginFooter = ({ text, link, toggle, login }: any) => {
    return (
        <div style={{ display: "flex", alignItems: "center", marginTop: "15px" }}>
            <span style={{ fontSize: "1rem" }}>{text}</span>
            <Button className="footerButton" onClick={() => toggle(login)}>
                {link}
            </Button>
        </div>
    );
};

export default CenteredModal;
