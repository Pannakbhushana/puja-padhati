import React from "react";
import { Accordion, AccordionItem, AccordionPanel, Text, Box, AccordionButton, AccordionIcon } from '@chakra-ui/react'

export const KathaAccordions = ({title,description,end}) => {
    return <>
        <Accordion allowMultiple>
            <AccordionItem w={['100%','100%','90%']} ml={['0', '0', '5%']} borderColor={'rgba(255, 255, 255, 0.3)'}>
                <AccordionButton>
                    <Box as='span' flex='1'>
                        <Text fontSize='md' as={'b'} >{title}  </Text>   
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4} >
                    <Box display={"flex"} justifyContent={'center'} textAlign={'justify'} >
                        <Text fontSize='md' as={'b'} >
                           {description}
                        </Text>
                    </Box>
                    <br />
                    <Box display={"flex"} justifyContent={'center'} textAlign={'center'} >
                        <Text fontSize='md' as={'b'} >
                           {end}
                        </Text>
                    </Box>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    </>
}