import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "components/footer/footer";
import HomePage from "components/home-page/HomePage";
import Location from "components/location/Location";

function App() {
    return (
        <div className="globalStyle">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route element={<Hello />}>
                    <Route path="location" element={<Location />} />
                </Route>
            </Routes>
        </div>
    );
}

function Hello() {
    return (
        <div>
            <Outlet />
            <Footer />
        </div>
    );
}

export default App;
