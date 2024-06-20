import React from "react";
import { Text, Box } from '@chakra-ui/react';
import { sodasopcharPuja } from "../utils/kalash";
import SideBar from "../Routers/SideBar";
import { vastuDevAvahan } from "../utils/vastuPuja";



export const VastuPujan = () => {

    return <div style={{ minHeight: "95vh" }}>
        <br />
        <SideBar />
        <Text fontSize='2xl' as={'b'} >|| वास्तुमंडल पूजनम् ||</Text>
        <br />
        <br />
        <Box  
            w={['80%', '60%', '50%']} 
            h={['200px', '300px', '500px']} 
            ml={['10%', '20%', '25%']} 
         >
            <img src={'/vastu.png'} alt="Navgrah-Mandal" style={{ width: "100%", height: "100%" }} />
        </Box>
<br />
<br />
        <Text fontSize='2xl' as={'b'} >~ वास्तुमंडल देवता आवाहन ~</Text><br /><br />
        {
            vastuDevAvahan.map((el, i) => {
                return <Box key={i} w={['100%','100%','70%']} ml={['0','0','15%']}>
                    <Text fontSize='sm' as={'b'} >{el.title}</Text><br />
                    <Text fontSize='xl' as={'b'} >{el.des1}</Text><br />
                    <Text fontSize='xl' as={'b'} >{el.des2}</Text><br />
                    <br />
                    <br />
                </Box>
            })
        }

        <Text fontSize='2xl' as={'b'} > ~ प्राणप्रतिष्ठा ~</Text><br /><br />

       
            <Text fontSize='xl' as={'b'} >
            ॐ मनोजूतिर्जुषतामाज्यस्य बृहस्पतिर्यज्ञमिमं तन्नोत्वरिष्टं यज्ञ ᳪ समिमं दधातु॥ विश्वेदेवा स इह मादयंतामों३ प्रतिष्ठ॥ <br/>
            ॐ भूर्भुवः स्वः शिख्यादि वास्तु मण्डल देवताः इहागच्छत इह तिष्ठत।
            </Text><br /><br />

        <Text fontSize='2xl' as={'b'} > ~ षोडशोपचारैः पूजनम् ~</Text><br /><br />

        <Box textAlign={'justify'} p={"0 5% 5% 5%"}>
            <Text fontSize='xl' as={'b'} >
            ॐ भूर्भुवः स्वः शिख्यादि वास्तु मण्डल देवताभ्यो नमः {sodasopcharPuja}
            </Text><br /><br />
        </Box>
    </div>
}