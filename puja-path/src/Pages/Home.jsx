import React from "react";
import { Box, Text } from '@chakra-ui/react';
import Styles from "../Styles/CustomStyles.module.css";
import { HomeAccordions } from "../Components/HomeAccordions";

const Home = () => {
    return <>
        <Box className={Styles.homeContainer} pt={'60px'} >

        <Box className={Styles.homeChildOne}>
            <br />
            <br />
            <Text fontSize='xl' as={'b'} >|| देव पूजन ||</Text>
            <br />
            <br />
            <HomeAccordions isHight={true} />
        </Box>
            
        <Box className={Styles.homeImageContainer}></Box>
    </Box>
    </>
}

export default Home

