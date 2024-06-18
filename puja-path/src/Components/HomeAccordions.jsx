import { Accordion, AccordionItem, AccordionPanel, Text, Box } from '@chakra-ui/react'
import { AccordionComponent } from "./AccordionComponent";
import { Link } from "react-router-dom";
import Styles from "../Styles/CustomStyles.module.css";

function HomeAccordions() {
    return (
        <Accordion allowMultiple>

            <AccordionComponent path={"/ganesh-pujan"} title={"गणेशपूजनम्"} />
            <AccordionComponent path={"/kalash-puja"} title={"कलशपूजनम्"} />

            <AccordionItem>
                <AccordionComponent title={"सत्यनारणपूजनम्"} />
                <AccordionPanel pb={4} >
                    <Box w={'95%'} ml={'5%'} textAlign={'left'}>
                        <Link to={"/satnarayan-pujan-vidhi"} className={Styles.accordionChild}><Text fontSize='md' as={'b'} > सामग्री एवं विधि </Text></Link> <br /><br />
                        <Link to={"/satnarayan-puja"} className={Styles.accordionChild}> <Text fontSize='md' as={'b'} >सत्यनारायणपूजनम् </Text></Link> <br /><br />
                        <Link to={"/satnarayan-katha"} className={Styles.accordionChild}> <Text fontSize='md' as={'b'} >सत्यनारायण व्रत कथा </Text></Link> <br /><br />
                    </Box>
                </AccordionPanel>
            </AccordionItem>

        </Accordion>

    )
}

export { HomeAccordions }