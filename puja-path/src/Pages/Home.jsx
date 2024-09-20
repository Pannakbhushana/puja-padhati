import React from "react";
import { Box, Button, Text } from '@chakra-ui/react';
import Styles from "../Styles/CustomStyles.module.css";
import { HomeAccordions } from "../Components/HomeAccordions";

import ButtonLayout from "../Layouts/ButtonLayout";
import { useDisclosure } from '@chakra-ui/react';
import SideBar from "../Routers/SideBar";

const Home = () => {
    const { onOpen } = useDisclosure();
    const handleSidebar = () =>{
        onOpen()
    }
    return <>
        <Box className={Styles.homeContainer} pt={'60px'} >

        <Box className={Styles.homeChildOne}>
            <br />
            <br />
            {/* <Text fontSize='xl' as={'b'} >|| देव पूजन ||</Text> */}
            <br />
            <br />
            {/* <HomeAccordions isHight={true} /> */}
            {/* <Button 
                rightIcon={<ArrowForwardIcon />}
                w={'80%'} colorScheme='gray'
                variant='outline'>
                देव पूजन
            </Button> */}
            <SideBar isButton={true} />
            {/* <ButtonLayout title={'देव पूजन'} handleClick={handleSidebar} buttonIcon={ArrowForwardIcon}/> */}
        </Box>
            
        <Box className={Styles.homeImageContainer}></Box>
    </Box>
    </>
}

export default Home

