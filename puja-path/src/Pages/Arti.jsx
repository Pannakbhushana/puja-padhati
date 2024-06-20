import React from "react";
import { Box,Text } from '@chakra-ui/react'
import { ArtiAccordions } from "../Components/ArtiAccordions";
import SideBar from "../Routers/SideBar";
import { arti } from "../utils/arti";

const Arti = () => {

    return <>
    <br />
      <SideBar />
      <Text fontSize='2xl' as={'b'} >|| आरती ||</Text>
    <Box style={{ padding: "2% 5% 5% 5%", minHeight: "95vh" }}>
        {
          arti.map((el,i)=>{
            return <ArtiAccordions key={i} {...el} />
          })
        }
        
    </Box>
    </>
}

export default Arti