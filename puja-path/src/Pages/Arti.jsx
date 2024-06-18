import React from "react";
import { Box } from '@chakra-ui/react'
import { ArtiAccordions } from "../Components/ArtiAccordions";
import SideBar from "../Routers/SideBar";
import { arti } from "../utils/arti";

const Arti = () => {

    return <>
      <br />
    <SideBar />
    <Box style={{ padding: "2% 5% 5% 5%", minHeight: "95vh" }}>
        <br />
        <br />
        {
          arti.map((el,i)=>{
            return <ArtiAccordions key={i} {...el} />
          })
        }
        
    </Box>
    </>
}

export default Arti