import React from "react";
import { Box,Text } from '@chakra-ui/react'
import { ArtiAccordions } from "../Components/ArtiAccordions";
import { arti } from "../utils/arti";

const Arti = () => {

    return <Box pt={'80px'}>
      <Text fontSize='2xl' as={'b'} >|| आरती ||</Text>
    <Box style={{ padding: "2% 5% 5% 5%", minHeight: "95vh" }}>
        {
          arti.map((el,i)=>{
            return <ArtiAccordions key={i} {...el} />
          })
        }
        
    </Box>
    </Box>
}

export default Arti