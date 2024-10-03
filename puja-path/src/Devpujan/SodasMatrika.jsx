import React from "react";
import { Text, Box } from '@chakra-ui/react';
import { sodasopcharPuja } from "../utils/kalash";
import { sodasmatrikaAvahan } from "../utils/sodasMatrikaPuja";

export const SodashMatrika = () => {
   
    return <div style={{ minHeight: "95vh",paddingTop:'80px' }}>
        <Text fontSize='2xl' as={'b'} >|| षोडशमातृकापूजनम् ||</Text>
        <br />
        <br />
        <Box  w={['80%', '60%', '50%']} h={['200px', '300px', '500px']} ml={['10%', '20%', '25%']} >
            <img src="/sodasmatrika.png"
            alt="षोडशमातृकापूजनम्" 
            style={{ width: "100%", height: "100%" }}
             />
       
        </Box>
        <br />
        <br />
        <Text fontSize='2xl' as={'b'} >~ षोडशमातृका देवता आवाहन ~</Text><br /><br />
        {
            sodasmatrikaAvahan.map((el, i) => {
                return <Box key={i} >
                    <Text fontSize='sm' as={'b'} >{el.title}</Text><br />
                    <Text fontSize='xl' as={'b'} >{el.des1}</Text><br />
                    <Text fontSize='xl' as={'b'} >{el.des2}</Text><br />
                    <br />
                    <br />
                </Box>
            })
        }

        <Text fontSize='2xl' as={'b'} > ~ षोडशोपचारैः पूजनम् ~</Text><br /><br />
        <Text fontSize='sm' as={'b'} >- प्राणप्रतिष्ठा -</Text><br />
        <Text fontSize='xl' as={'b'} >
            ॐ मनो जूतिर्ज्जुषतामाज्ज्यस्य बृहस्पतिर्य्यज्ञमिमं तनोत्वरिष्टं य्यज्ञ ᳪ समिमं दधातु। विश्वे देवासऽइह मादयन्तामों ३ प्रतिष्ठ ॥  <br />
            ॐ भूर्भुवः स्वः गणपति दुर्गा श्री सहिताः गौर्यादि षोडश मातरः इहागच्छत इह तिष्ठत।
        </Text>
        <br />
        <br />
        <br />


        <Text fontSize='xl' as={'b'} >
            ॐ भूर्भुवः स्वः गणपति दुर्गा श्री सहिताः गौर्यादि षोडश मातृभ्यो नमः {sodasopcharPuja}
        </Text><br /><br />

        <Text fontSize='sm' as={'b'} >फल लेकर प्रणाम करे</Text><br />
        <Text fontSize='xl' as={'b'} >ॐ आयुरारोग्यमैश्वर्यं ददध्वं मातरो मम । निर्विघ्नं सर्वकार्येषु कुरुध्वं सगणाधिपाः ॥</Text><br />
        <br />
        <br />
        <br />

        <Text fontSize='sm' as={'b'} >प्रणाम करे</Text><br />
        <Text fontSize='xl' as={'b'} >गेहे वृद्धिशतानि भवंतु, उत्तरे कर्मण्यविघ्नमस्तु ।</Text><br />
        <br />
        <br />
        <br />

        <Text fontSize='sm' as={'b'} >पुष्पाञ्जलि </Text><br />
        <Text fontSize='xl' as={'b'} >ॐ गौरी पद्मा शची मेधा सावित्री विजया जया । देवसेना स्वधा स्वाहा मातरो लोकमातरः ॥ <br/>
            धृतिः पुष्टिस्तथा तुष्टिरात्मनः कुलदेवता । गणेशेनाधिका ह्येता वृद्धौ पूज्याश्च षोडश ॥</Text><br />
        <br />
        <br />
        <br />
        
    </div>
}