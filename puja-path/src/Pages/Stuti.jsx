import React from "react";
import { Box,Text } from '@chakra-ui/react'
import { StutiAccordions } from "../Components/StutiAccordions";
import { devStuti } from "../utils/devStuti";

const Stuti = () => {

    return <Box pt={'80px'}>
      <Text fontSize='2xl' as={'b'} >|| स्तोत्रम् ||</Text>
    <Box style={{ padding: "2% 5% 5% 5%", minHeight: "95vh" }}>
        {
          devStuti.map((el,i)=>{
            return <StutiAccordions key={i} {...el} />
          })
        }
        
    </Box>
    </Box>
}

export default Stuti