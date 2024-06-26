import React from "react";
import { Text, Box } from '@chakra-ui/react';
import { sodasopcharPuja } from "../utils/kalash";
import { adhiDevAwahan, pratydhiDevAvahan } from "../utils/adhipratydhidev";

export const AdhiPratydhiDev = () => {

    return <div style={{ minHeight: "95vh",paddingTop:'80px' }}>
        <Text fontSize='2xl' as={'b'} >|| अधिदेवप्रत्यधिदेवपूजनम् ||</Text>
        <br />
        <br />

        <Text fontSize='sm' as={'b'} >
           ( नवग्रहवेदी पर क्रमशः प्रत्येक निर्दिष्ट कोष्ठकों में दायीं ओर अधिदेवताओं का आवाहन करें <br/>
            इन सबके लिए सिर्फ हरिद्रारंजित चावल का प्रयोग करना चाहिए। आवाहन और प्रतिष्ठा नवग्रहक्रम से ही करना है)
        </Text>
        
        <br />
        <br />
        <Text fontSize='2xl' as={'b'} >~ अधिदेवता देवता आवाहन ~</Text><br /><br />
        {
            adhiDevAwahan.map((el, i) => {
                return <Box key={i} w={['100%','100%','70%']} ml={['0','0','15%']}>
                    <Text fontSize='sm' as={'b'} >{el.title}</Text><br />
                    <Text fontSize='xl' as={'b'} >{el.des1}</Text><br />
                    <Text fontSize='xl' as={'b'} >{el.des2}</Text><br />
                    <Text fontSize='xl' as={'b'} >{el.des3}</Text><br />
                    <br />
                    <br />
                </Box>
            })
        }

        <Text fontSize='2xl' as={'b'} >~ प्रत्यधिदेवता देवता आवाहन ~</Text><br /><br />

        {
            pratydhiDevAvahan.map((el, i) => {
                return <Box key={i} w={['100%','100%','70%']} ml={['0','0','15%']}>
                    <Text fontSize='sm' as={'b'} >{el.title}</Text><br />
                    <Text fontSize='xl' as={'b'} >{el.des1}</Text><br />
                    <Text fontSize='xl' as={'b'} >{el.des2}</Text><br />
                    <Text fontSize='xl' as={'b'} >{el.des3}</Text><br />
                    <br />
                    <br />
                </Box>
            })
        }

        <Text fontSize='2xl' as={'b'} > ~ षोडशोपचारैः पूजनम् ~</Text><br /><br />

        <Box textAlign={'justify'} p={"0 5% 5% 5%"}>
            <Text fontSize='xl' as={'b'} >
            ॐ ईश्वराग्नेयादि अधिदेवप्रत्यधिदेवेभ्यो नमः {sodasopcharPuja} अनया पूजया अधिदेवप्रत्यधिदेवताः प्रीयन्ताम् न मम ।
            </Text><br /><br />
        </Box>
    </div>
}