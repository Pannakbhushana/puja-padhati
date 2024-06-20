import React from "react";
import { Text, Box } from '@chakra-ui/react';
import { sodasopcharPuja } from "../utils/kalash";
import SideBar from "../Routers/SideBar";
import { chetrapaalAvahan } from "../utils/chetrapal";



export const ChetraPaal = () => {

    return <div style={{ minHeight: "95vh" }}>
        <br />
        <SideBar />
        <Text fontSize='2xl' as={'b'} >|| क्षेत्रपालपूजनम् ||</Text>
        <br />
        <br />
        <Box  
            w={['80%', '60%', '50%']} 
            h={['200px', '300px', '500px']} 
            ml={['10%', '20%', '25%']} 
            border={['8px solid #5A51BA','12px solid #5A51BA','15px solid #5A51BA']}
         >
            <img src={'/chetrapal.png'} alt="Navgrah-Mandal" style={{ width: "100%", height: "100%" }} />
        </Box>
<br />
<br />
        <Text fontSize='2xl' as={'b'} >~ क्षेत्रपाल देवता आवाहन ~</Text><br /><br />
        {
            chetrapaalAvahan.map((el, i) => {
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
            ॐ भूर्भुवः स्वः अजरादि क्षेत्रपाल मण्डल देवताः इहागच्छत इह तिष्ठत।
            </Text><br /><br />

        <Text fontSize='2xl' as={'b'} > ~ षोडशोपचारैः पूजनम् ~</Text><br /><br />

        <Box textAlign={'justify'} p={"0 5% 5% 5%"}>
            <Text fontSize='xl' as={'b'} >
            ॐ भूर्भुवः स्वः अजरादि क्षेत्रपाल मण्डल देवताभ्यो नमः {sodasopcharPuja}
            </Text><br /><br />
        </Box>
    </div>
}