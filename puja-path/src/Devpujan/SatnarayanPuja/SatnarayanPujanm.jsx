import React from "react";
import { Box, Text } from '@chakra-ui/react';
import SideBar from "../../Routers/SideBar";
import { satnarayanPujanm } from "../../utils/satnarayanPujanm";


export const SatnarayanPujanm = () => {

    return <>
        <div style={{ minHeight: "95vh" }}>
            <br />
            <SideBar />
            <Text fontSize='2xl' as={'b'} >|| सत्यनारणपूजनम् ||</Text>
            <br />
            <br />
            {
                satnarayanPujanm.map((mantra, i) => {
                    return <Box key={i} p={"0 1% 0 1%"}>
                        <Text fontSize='sm' as={'b'} >{mantra.title}</Text><br />
                        <Text fontSize='xl' as={'b'} >{mantra.des1} <br />{mantra.des2}</Text><br />
                        {mantra.des3 &&<><br/><Text fontSize='xl' as={'b'} >{mantra.des3}</Text> <br/></> }
                        <br />
                        <br />
                    </Box>
                })
            }
           
        </div>
    </>
}