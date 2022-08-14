import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { footerImage } from "constants/img-constants";
import CommonLogin from "./CommonLogin";
import "./style.css";

export default function SimpleBackdrop() {
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };

    return (
        <div className="parent">
            <MenuIcon fontSize="large" style={{ color: "white", cursor: "pointer" }} onClick={handleToggle} />
            <Backdrop
                sx={{
                    color: "black",
                    backgroundColor: "white",
                    zIndex: (theme) => theme.zIndex.drawer + 1
                }}
                open={open}
            >
                <div className="backdrop">
                    <div className="bb">
                        <CloseIcon fontSize="large" onClick={handleClose} style={{ cursor: "pointer" }} />
                        <a href="/">
                            <img src={footerImage} data-src={footerImage} height="100%" alt="Zomato Footer" width="75%" />
                        </a>
                    </div>
                    <CommonLogin display onClick={handleToggle} />
                </div>
            </Backdrop>
        </div>
    );
}
