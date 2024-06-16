import React from "react";
import { Link } from "react-router-dom";
import Styles from "../Styles/CustomStyles.module.css";
import { Box, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react';

export const CustomAccordions = () => {
    return <>
        <Accordion >
            <AccordionItem>

                <Link to={'/ganesh-pujan'} className={Styles.accordionChild}>
                    <AccordionButton>
                        <Box as='span' flex='1' textAlign='left'>
                            <Text fontSize='md' as={'b'} > गणेश पूजन </Text>
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </Link>

            </AccordionItem>

            <AccordionItem>

                <AccordionButton>
                    <Box as='span' flex='1' textAlign='left'>
                        <Text fontSize='md' as={'b'} > विष्णु पूजन </Text>
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