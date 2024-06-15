import React from "react";
import { Box, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react';

export const ArtiAccordions = () => {
    return <>
        <Accordion style={{ textAlign: "center" }}>
            <AccordionItem>
                <AccordionButton>
                    <Box as='span' flex='1'>
                        <Text fontSize='md' as={'b'} >श्री सत्यनारायण जी की आरती - जय लक्ष्मी रमणा  </Text>
                    </Box>
                    <AccordionIcon />
                </AccordionButton>

                <AccordionPanel pb={4}>
                    <Box display={"flex"} justifyContent={'center'} >
                        <Box textAlign={'justify'} >
                            <Text fontSize='md' as={'b'} >
                                जय लक्ष्मी रमणा स्वामी जय लक्ष्मी रमणा, सत्यनारायण स्वामी जन पातक हरणा<br /><br />
                                रत्त्न जड़ित सिंहासन अदूभुत छवि राजै, नारद करद निरन्तर घण्टा ध्वनि बाजै<br /><br />

                                प्रकट भये कलि कारण द्विज को दर्श दियो, बूढ़ा ब्राह्मण बन के कंचन महल कियो<br /><br />
                                दुर्बल भील कराल जिन पर कृपा करी, चन्द्रचूढ़ इक राजा तिनकी विपत हरी<br /><br />

                                वैश्य मनोरथ पायो श्रद्धा तज दीनी, सो फल भोग्यो प्रभु जी फेर स्तुति कीन्ही<br /><br />
                                भाव भक्ति के कारण छिन-छिन रूप धरयो, श्रद्धा धारण कीनी जन को काज सरयो<br /><br />

                                ग्वाल बाल संग राजा बन में भक्ति करी, मनवांछित फल दीना दीनदयाल हरी<br /><br />
                                चढ़त प्रसाद सवाया कदली फल मेवा, धूप दीप तुलसी से राजी सत्य देवा<br /><br />

                                श्री सत्यनारायण जी की आरती जो कोई गावै, कहत शिवानंद स्वामी मनवांछित फल पावे<br /><br />
                            </Text>
                       
                        </Box>

                    </Box>


                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    </>
}