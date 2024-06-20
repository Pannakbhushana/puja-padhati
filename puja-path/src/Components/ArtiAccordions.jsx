import React from "react";
import { Accordion, AccordionItem, AccordionPanel, Text, Box, AccordionButton, AccordionIcon } from '@chakra-ui/react'

export const ArtiAccordions = ({title,description}) => {
    return <>
        <Accordion allowMultiple>
            <AccordionItem w={['100%','100%','50%']} ml={['0', '0', '25%']} borderColor={'rgba(255, 255, 255, 0.3)'}>
                <AccordionButton>
                    <Box as='span' flex='1'>
                        <Text fontSize='md' as={'b'} >{title}  </Text>   
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4} >
                    <Box display={"flex"} justifyContent={'center'} textAlign={'justify'} >
                        <Text fontSize='md' as={'b'} >
                           {description.map((el,i)=>{
                            return <span key={i}>{el}<br/><br/></span>
                           })}
                        </Text>
                    </Box>
                </AccordionPanel>
            </AccordionItem>

        </Accordion>
    </>
}