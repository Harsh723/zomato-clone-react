import { Button, TextField } from "@mui/material";
import React, { useState, ChangeEvent } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "./style.css";
import { GoogleButton } from "./login";

function Signup() {
    const [name, setName] = useState<string>("");
    const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
    const [check, setCheck] = useState<boolean>(false);

    const handleCheckBox = (event: ChangeEvent<HTMLInputElement>, checked: boolean) => {
        setCheck(checked);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === "fullname") setName(e.target.value);
        else {
            const emailValid = validateEmail(e.target.value);
            if (emailValid) {
                setIsEmailValid(true);
            } else {
                setIsEmailValid(false);
            }
        }
    };

    function validateEmail(input: string) {
        const re =
            // eslint-disable-next-line max-len
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(input).toLowerCase());
    }

    return (
        <div className="signup">
            <TextField
                name="fullname"
                label="Full Name"
                variant="outlined"
                placeholder="Full Name"
                value={name}
                onChange={handleChange}
                style={{ marginBottom: "1.2rem" }}
            />
            <TextField label="Email" variant="outlined" placeholder="Email" onChange={handleChange} />
            <FormControlLabel
                control={<Checkbox checked={check} onChange={handleCheckBox} color="primary" />}
                label="I  agree to Zomato's Terms of Service, Privacy Policy and Content Policies"
                style={{ margin: "20px 0 0", fontSize: "1.5rem" }}
            />
            <Button
                variant="contained"
                disabled={name.length < 2 || !isEmailValid || !check}
                color="primary"
                style={{ marginTop: "20px", fontSize: "1.5rem" }}
            >
                Create Account
            </Button>
            <GoogleButton />
        </div>
    );
}

export default Signup;
