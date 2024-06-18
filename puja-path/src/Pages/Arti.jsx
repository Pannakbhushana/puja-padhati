import React from "react";
import { Box } from '@chakra-ui/react'
import { ArtiAccordions } from "../Components/ArtiAccordions";
import SideBar from "../Routers/SideBar";

const Arti = () => {
    return <>
      <br />
    <SideBar />
    <Box style={{ padding: "2% 5% 5% 5%", minHeight: "95vh" }}>
        <br />
        <ArtiAccordions />
    </Box>
    </>
}

export default Arti