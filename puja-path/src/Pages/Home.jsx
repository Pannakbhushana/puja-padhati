import React from "react";
import { Box, Button, Text } from '@chakra-ui/react';
import Styles from "../Styles/CustomStyles.module.css";
import { HomeAccordions } from "../Components/HomeAccordions";
import { ArrowForwardIcon } from '@chakra-ui/icons'
import ButtonLayout from "../Layouts/ButtonLayout";

const Home = () => {
    const handleSidebar = () =>{

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
            <ButtonLayout title={'देव पूजन'} handleClick={handleSidebar} buttonIcon={ArrowForwardIcon}/>
        </Box>
            
        <Box className={Styles.homeImageContainer}></Box>
    </Box>
    </>
}

export default Home

