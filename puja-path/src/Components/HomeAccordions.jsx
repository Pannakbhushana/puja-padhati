import { Accordion, AccordionItem, AccordionPanel, Text, Box } from '@chakra-ui/react'
import { AccordionComponent } from "./AccordionComponent";
import { Link } from "react-router-dom";
import Styles from "../Styles/CustomStyles.module.css";

function HomeAccordions({isHight}) {
    return (
        <Accordion 
            allowMultiple 
            className={Styles.accordionContainer}
            w={['70%','70%','100%']}
            h={isHight ? ['75%','75%','100%'] : '100%'}
              >

            <AccordionComponent path={"/ganesh-pujan"} title={"गणेशपूजनम्"} />
            <AccordionComponent path={"/kalash-puja"} title={"कलशपूजनम्"} />
            <AccordionComponent path={"/punyvachan"} title={"पुण्याहवाचन"} />
            <AccordionComponent path={"/panchdevta-puja"} title={"पंञ्चदेवतापूजनम्"} />
            <AccordionComponent path={"/navgrah-puja"} title={"नवग्रहपूजनम्"} />
            <AccordionComponent path={"/adhipratydhidev-puja"} title={"अधिदेवप्रत्यधिदे"} />
            <AccordionComponent path={"/sodasmatrika-puja"} title={"षोडशमातृका"} />
            <AccordionComponent path={"/saptghritmatrika-puja"} title={"सप्तघृतमातृका"} />
            <AccordionComponent path={"/yogini-puja"} title={"चतुष्षष्टियोगिनी"} />
            <AccordionComponent path={"/chetrapal-puja"} title={"क्षेत्रपालपूजनम्"} />
            <AccordionComponent path={"/vastu-puja"} title={"वास्तुमंडल"} />
            <AccordionComponent path={"/sarvato-puja"} title={"सर्वतोभद्रमंडल"} />
            <AccordionComponent path={"/chaturlingato-puja"} title={"चतुर्लिङ्गतोभद्र"} />

            <AccordionItem borderColor={'rgba(255, 255, 255, 0.3)'}>
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