import React from "react";
import { Link } from "react-router-dom";
import Styles from "../Styles/CustomStyles.module.css";
import { Box, Text, AccordionItem, AccordionButton, AccordionIcon } from '@chakra-ui/react';

export const AccordionComponent = ({path,title}) => {

    if(path){
        return <>
        <AccordionItem borderColor={'rgba(255, 255, 255, 0.3)'}>
            <Link to={path} className={Styles.accordionChild}>
                    <AccordionButton>
                        <Box as='span' flex='1' textAlign='left'>
                            <Text fontSize='md' as={'b'} > {title} </Text>
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
            </Link>
        </AccordionItem>
    </>
    }
    else{
        return <>
            <AccordionButton className={Styles.accordionChild}>
                        <Box as='span' flex='1' textAlign='left'>
                            <Text fontSize='md' as={'b'} > {title} </Text>
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
        </>
    }
}