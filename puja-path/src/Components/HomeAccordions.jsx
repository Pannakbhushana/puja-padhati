import React from "react";
import { Link } from "react-router-dom";
import Styles from "../Styles/CustomStyles.module.css";
import { Box, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react';
import { AccordionComponent } from "./AccordionComponent";

export const HomeAccordions = () => {
    return <>
        <Accordion >
                <AccordionComponent path={"//ganesh-pujan"} title={"गणेशपूजनम्"}/>
                <AccordionComponent path={"/kalash-puja"} title={"कलशपूजनम्"}/>
           
            <AccordionItem>
                <AccordionButton>
                    <Box as='span' flex='1' textAlign='left'>
                        <Text fontSize='md' as={'b'} > सत्यनारणपूजनम् </Text>
                    </Box>
                    <AccordionIcon />
                </AccordionButton>

                <AccordionPanel pb={4}>
                    <Link to={"/satnarayan-pujan-vidhi"} className={Styles.accordionChild}><Text fontSize='md' as={'b'} > सत्यनारण व्रत पूजन सामग्री एवं विधि </Text></Link> <br /><br />
                    <Link to={"/satnarayan-katha"} className={Styles.accordionChild}> <Text fontSize='md' as={'b'} >सत्यनारायण व्रत कथा </Text></Link> <br /><br />
                    <Link to={"/satnarayan-katha"} className={Styles.accordionChild}> <Text fontSize='md' as={'b'} >सत्यनारायण पूजन </Text></Link> <br /><br />
                </AccordionPanel>
            </AccordionItem>

        </Accordion>
    </>
}