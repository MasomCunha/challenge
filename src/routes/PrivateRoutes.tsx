import React from "react";
import {
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import Home from "../pages/Home";

export default function PrivateRoutes() {
    return (
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route
                path="*"
                element={<Navigate to="/login" replace />}
            />
        </Routes>
    )
}