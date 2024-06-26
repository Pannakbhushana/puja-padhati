import { Accordion } from '@chakra-ui/react'
import { AccordionComponent } from "./AccordionComponent";
import Styles from "../Styles/CustomStyles.module.css";

function HomeAccordions({isHight}) {
    return (
        <Accordion 
            allowMultiple 
            className={Styles.accordionContainer}
            w={isHight ? ['70%','70%','100%'] : '100%'}
            h={isHight ? ['65%','75%','100%'] : '100%'}
              >
            <AccordionComponent path={"/ganesh-pujan"} title={"गणेशपूजनम्"} />
            <AccordionComponent path={"/kalash-puja"} title={"कलशपूजनम्"} />
            <AccordionComponent path={"/punyvachan"} title={"पुण्याहवाचन"}  />
            <AccordionComponent path={"/panchdevta-puja"} title={"पंञ्चदेवतापूजनम्"}  />
            <AccordionComponent path={"/navgrah-puja"} title={"नवग्रहपूजनम्"} />
            <AccordionComponent path={"/adhipratydhidev-puja"} title={"अधिदेवप्रत्यधिदे"} />
            <AccordionComponent path={"/sodasmatrika-puja"} title={"षोडशमातृका"} />
            <AccordionComponent path={"/saptghritmatrika-puja"} title={"सप्तघृतमातृका"} />
            <AccordionComponent path={"/yogini-puja"} title={"चतुष्षष्टियोगिनी"} />
            <AccordionComponent path={"/chetrapal-puja"} title={"क्षेत्रपालपूजनम्"}  />
            <AccordionComponent path={"/vastu-puja"} title={"वास्तुमंडल"}  />
            <AccordionComponent path={"/sarvato-puja"} title={"सर्वतोभद्रमंडल"}  />
            <AccordionComponent path={"/chaturlingato-puja"} title={"चतुर्लिङ्गतोभद्र"} />
            <AccordionComponent path={"/satnarayan-puja"} title={"सत्यनारायणपूजनम्"} />
            <AccordionComponent path={"/havanvidhi"} title={"हवन विधि"}  />
            <AccordionComponent path={"/rudrabhishek"} title={"रुद्राष्टाध्यायी"}  />
        </Accordion>

    )
}

export { HomeAccordions }