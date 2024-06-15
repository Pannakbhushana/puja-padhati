import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "../Pages/Home";
import Arti from "../Pages/Arti";
import { GaneshPuja } from "../Devpujan/GaneshPuja";
import { PujanVidhi } from "../Devpujan/SatnarayanPuja/PujanVidhi";
import { SatnarayanKatha } from "../Devpujan/SatnarayanPuja/SatnarayanKatha";

const AllRoutes = ()=> {
    return <>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/arti" element={<Arti/>} />
                <Route path="/ganesh-pujan" element={<GaneshPuja/>} />
                <Route path="/satnarayan-pujan-vidhi" element={<PujanVidhi/>} />
                <Route path="/satnarayan-katha" element={<SatnarayanKatha/>} />
            </Routes>
    </>
}

export default AllRoutes