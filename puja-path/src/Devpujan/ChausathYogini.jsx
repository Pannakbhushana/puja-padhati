import React from "react";
import { Text, Box } from '@chakra-ui/react';
import { sodasopcharPuja } from "../utils/kalash";
import { yoginiAvahan, dhayan, pratistha,prarthana } from "../utils/yogini";



export const ChausathYogini = () => {

    return <div style={{ minHeight: "95vh",paddingTop:'80px' }}>
        <Text fontSize='2xl' as={'b'} >|| चतुष्षष्टि योगिनीपूजनम् ||</Text>
        <br />
        <br />
        <Box  w={['80%', '60%', '50%']} h={['200px', '300px', '500px']} ml={['10%', '20%', '25%']} >
            <img 
                src="/yogini.png" 
                alt="चतुष्षष्टि योगिनीपूजनम्" 
                style={{ width: "100%", height: "100%" }} 
                />
        </Box>
        <br />
        <br />
        <Text fontSize='2xl' as={'b'} >~ ध्यान  ~</Text><br /><br />
        <Box textAlign={'justify'} p={"0 5% 5% 5%"}>
            <Text fontSize='xl' as={'b'} >{dhayan}</Text>
        </Box>

        <Text fontSize='2xl' as={'b'} >~ चतुष्षष्टि योगिनी आवाहन ~</Text><br /><br />
        {
            yoginiAvahan.map((el, i) => {
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

        <Box textAlign={'justify'} p={"0 5% 5% 5%"}>
            <Text fontSize='xl' as={'b'} >
                {pratistha} 
            </Text><br /><br />
        </Box>

        <Text fontSize='2xl' as={'b'} > ~ षोडशोपचारैः पूजनम् ~</Text><br /><br />

        <Box textAlign={'justify'} p={"0 5% 5% 5%"}>
            <Text fontSize='xl' as={'b'} >
            ॐ भूर्भुवः स्वः महाकाली-महालक्ष्मी-महासरस्वती सहिताः दिव्ययोगिन्यादि चतुष्षष्टि योगिनीभ्यो नमः {sodasopcharPuja}
            </Text><br /><br />
        </Box>
        <Text fontSize='2xl' as={'b'} > ~ चतुष्षष्टि योगिनी प्रार्थना ~</Text><br /><br />
        <Box textAlign={'justify'} p={"0 5% 5% 5%"}>
            <Text fontSize='xl' as={'b'} >
                {prarthana}
            </Text><br /><br />
        </Box>
    </div>
}