import React from "react";
import {Route, Router, Routes} from "react-router-dom";
import Home from "../Pages/Home";
import Arti from "../Pages/Arti";
import { GaneshPuja } from "../Devpujan/GaneshPuja";
import { PujanVidhi } from "../Devpujan/SatnarayanPuja/PujanVidhi";
import { SatnarayanKatha } from "../Devpujan/SatnarayanPuja/SatnarayanKatha";
import AboutMe from "../Pages/AboutMe";
import { KalashPuja } from "../Devpujan/KalashPuja";
import { PageNotFound } from "../Pages/PageNotFound";
import { SatnarayanPujanm } from "../Devpujan/SatnarayanPuja/SatnarayanPujanm";
import { PanchDevta } from "../Devpujan/PanchDevta";
import { NavgrahPuja } from "../Devpujan/NavgrahPuja";
import { AdhiPratydhiDev } from "../Devpujan/AdhiPratydhiDev";
import { PunyVachan } from "../Devpujan/PunyVachan";
import { SodashMatrika } from "../Devpujan/SodasMatrika";
import { SaptGhritMatrika } from "../Devpujan/SaptGhritMatrika";
import { ChausathYogini } from "../Devpujan/ChausathYogini";
import { ChetraPaal } from "../Devpujan/ChetraPaal";
import { VastuPujan } from "../Devpujan/VastuPujan";
import { SarvatoBhadra } from "../Devpujan/SarvatoBhadra";
import { ChaturLingato } from "../Devpujan/ChaturLingato";
import ScrollToTop from "./ScrollToTop";



const AllRoutes = ()=> {
    return <>
            <ScrollToTop/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/arti" element={<Arti/>} />
                <Route path="/ganesh-pujan" element={<GaneshPuja/>} />
                <Route path="/satnarayan-pujan-vidhi" element={<PujanVidhi/>} />
                <Route path="/satnarayan-katha" element={<SatnarayanKatha/>} />
                <Route path="/about-me" element={<AboutMe/>} />
                <Route path="/kalash-puja" element={<KalashPuja/>} />
                <Route path="/satnarayan-puja" element={<SatnarayanPujanm/>} />
                <Route path="/panchdevta-puja" element={<PanchDevta/>} />
                <Route path="/navgrah-puja" element={<NavgrahPuja/>} />
                <Route path="/adhipratydhidev-puja" element={<AdhiPratydhiDev/>} />
                <Route path="/punyvachan" element={<PunyVachan/>} />
                <Route path="/sodasmatrika-puja" element={<SodashMatrika/>} />
                <Route path="/saptghritmatrika-puja" element={<SaptGhritMatrika/>} />
                <Route path="/yogini-puja" element={<ChausathYogini/>} />
                <Route path="/chetrapal-puja" element={<ChetraPaal/>} />
                <Route path="/vastu-puja" element={<VastuPujan/>} />
                <Route path="/sarvato-puja" element={<SarvatoBhadra/>} />
                <Route path="/chaturlingato-puja" element={<ChaturLingato/>} />
                <Route path="*" element={<PageNotFound/>} />
            </Routes>
    </>
}

export default AllRoutes