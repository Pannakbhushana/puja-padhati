import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "../Pages/Home";
import Arti from "../Pages/Arti";
import { GaneshPuja } from "../Devpujan/GaneshPuja";
import { PujanVidhi } from "../Devpujan/SatnarayanPuja/PujanVidhi";
import { SatnarayanKatha } from "../Devpujan/SatnarayanPuja/SatnarayanKatha";
import AboutMe from "../Pages/AboutMe";
import { KalashPuja } from "../Devpujan/KalashPuja";
import { PageNotFound } from "../Pages/PageNotFound";
import { SatnarayanPujanm } from "../Devpujan/SatnarayanPuja/SatnarayanPujanm";

const AllRoutes = ()=> {
    return <>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/arti" element={<Arti/>} />
                <Route path="/ganesh-pujan" element={<GaneshPuja/>} />
                <Route path="/satnarayan-pujan-vidhi" element={<PujanVidhi/>} />
                <Route path="/satnarayan-katha" element={<SatnarayanKatha/>} />
                <Route path="/about-me" element={<AboutMe/>} />
                <Route path="/kalash-puja" element={<KalashPuja/>} />
                <Route path="/satnarayan-puja" element={<SatnarayanPujanm/>} />
                <Route path="*" element={<PageNotFound/>} />
            </Routes>
    </>
}

export default AllRoutes