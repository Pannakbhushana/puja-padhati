import React from "react";
import { Box, Text } from '@chakra-ui/react';
import Styles from "../Styles/CustomStyles.module.css";
import { HomeAccordions } from "../Components/HomeAccordions";

const Home = () => {
    return <Box className={Styles.homeContainer} >

        <Box className={Styles.homeChildOne}>
            <br />
            <br />
            <Text fontSize='xl' as={'b'} >|| देव पूजन ||</Text>
            <br />
            <br />
            <HomeAccordions/>
        </Box>

        <Box className={Styles.homeImageContainer}>
            {/* <img src={"/valmiki.png"} alt="" style={{ width: "100%", height: "100%" }} /> */}
        </Box>


    </Box>
}

export default Home

