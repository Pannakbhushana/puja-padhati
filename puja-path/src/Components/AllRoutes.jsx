import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "../Pages/Home";
import Arti from "../Pages/Arti";

const AllRoutes = ()=> {
    return <>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/arti" element={<Arti/>} />
            </Routes>
    </>
}

export default AllRoutes