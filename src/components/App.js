import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import reduxStore from "../redux/store";
import HomePage from "./homepage/HomePage";
import NavBar from "./navigation/NavBar";
import Login from "./auth/Login";
import Registration from "./auth/Registration";
import { logOut } from "./auth/utils/auth";

const App = () => {
    // Sign Off when close browser tab
    useEffect(() => {
        window.addEventListener("beforeunload", logOut);

        return () => {
            window.removeEventListener("beforeunload", logOut);
        };
    }, []);

    return (
        <Provider store={reduxStore}>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route exact path="/" element={<HomePage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/registration" element={<Registration />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
};

export default App;
