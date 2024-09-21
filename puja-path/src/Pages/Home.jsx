import React from "react";
import { Box } from '@chakra-ui/react';
import Styles from "../Styles/CustomStyles.module.css";

import ButtonLayout from "../Layouts/ButtonLayout";
import SideBar from "../Routers/SideBar";
import { useNavigate } from "react-router-dom";

const Home = () => {
   const navigate = useNavigate()
    return <>
        <Box className={Styles.homeContainer} pt={'60px'} >

        <Box className={Styles.homeChildOne}>
            <Box mt={'10%'} w={'50%'} justifyContent={'start'}>
                <SideBar isButton={true} />
                <div><ButtonLayout title={'कथाएँ'} handleClick={()=>navigate('/katha')}/></div>
                <div><ButtonLayout title={'आरती'} handleClick={()=>navigate('/arti')}/></div>
               <div> <ButtonLayout title={'स्तोत्र'} handleClick={()=>navigate('/stuti')}/></div>
                <div><ButtonLayout title={'पूजन सामग्री'} handleClick={()=>navigate('/pujavidhi')}/></div>
            </Box>
        </Box>
            
        <Box className={Styles.homeImageContainer}></Box>
    </Box>
    </>
}

export default Home