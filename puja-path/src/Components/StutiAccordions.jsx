import React from "react";
import { Accordion, AccordionItem, AccordionPanel, Text, Box, AccordionButton, AccordionIcon } from '@chakra-ui/react'

export const StutiAccordions = ({title, description}) => {
    const formattedDescription = description.split('\n').map((line, index) => (
        <React.Fragment key={index}>
            {line}
            <br/>
        </React.Fragment>
    ));

    return (
        <Accordion allowMultiple>
            <AccordionItem w={['100%','100%','50%']} ml={['0', '0', '25%']} borderColor={'rgba(255, 255, 255, 0.3)'}>
                <AccordionButton>
                    <Box as='span' flex='1'>
                        <Text fontSize='md' as={'b'}>{title}</Text>   
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                    <Box display={"flex"} justifyContent={'center'} textAlign={'left'}>
                        <Text fontSize='md' as={'b'}>
                            {formattedDescription}
                        </Text>
                    </Box>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    );
};
