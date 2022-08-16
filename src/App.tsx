import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "components/footer/footer";
import OgMetaData from "components/helmet/OgMetaData";
import HomePage from "components/home-page/HomePage";

function App() {
    return (
        <div className="globalStyle">
            <Routes>
                <Route element={<Hello />}>
                    <Route path="/" element={<HomePage />} />
                </Route>
                <Route path="location" element={<div>loading.....</div>} />
            </Routes>
        </div>
    );
}

function Hello() {
    return (
        <div>
            <OgMetaData title="Zomato-Clone" description="A place to order food online" />
            <Outlet />
            <Footer />
        </div>
    );
}

export default App;
