import { Email } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import React, { useState, ChangeEvent } from "react";
import { INIDAN_THUMBNAIL } from "constants/img-constants";
import GoogleLogo from "constants/googleLogo.svg";
import "./style.css";

function Login() {
    const [mobileNumber, setMobileNumber] = useState<string>("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.toString().length <= 10) {
            setMobileNumber(e.target.value.toString());
        }
    };

    return (
        <div className="container">
            <TextField
                id="input-with-icon-textfield"
                variant="outlined"
                type="number"
                name="mobileInput"
                InputProps={{
                    startAdornment: (
                        <>
                            <img
                                src={INIDAN_THUMBNAIL}
                                data-src={INIDAN_THUMBNAIL}
                                height="100%"
                                alt="Zomato Footer"
                                width="6%"
                                loading="eager"
                            />

                            <span style={{ margin: "0 20px" }}>+91</span>
                        </>
                    )
                }}
                value={mobileNumber}
                onChange={handleChange}
            />
            <Button
                variant="contained"
                disabled={mobileNumber.length < 10}
                color="primary"
                style={{ marginTop: "20px", fontSize: "1.5rem" }}
            >
                Send OTP
            </Button>
            <Button
                variant="contained"
                startIcon={<Email color="primary" />}
                style={{
                    backgroundColor: "white",
                    padding: "1rem 0",
                    color: "black",
                    marginTop: "20px",
                    fontSize: "1.5rem"
                }}
            >
                Continue with Email
            </Button>
            <GoogleButton />
        </div>
    );
}

export const GoogleButton = () => (
    <Button
        variant="contained"
        style={{
            backgroundColor: "white",
            padding: "1rem 0",
            color: "black",
            marginTop: "20px",
            fontSize: "1.5rem"
        }}
    >
        <img src={GoogleLogo} data-src={GoogleLogo} height="100%" alt="Google" width="3%" loading="eager" />
        <span style={{ padding: "0 0.5rem" }}> Continue with Google</span>
    </Button>
);

export default Login;
