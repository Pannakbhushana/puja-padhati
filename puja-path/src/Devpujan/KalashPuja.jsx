import React from "react";
import { Text,Box } from '@chakra-ui/react';
import { kalashSthapan,devAvahan,prarthana} from "../utils/kalash";

export const KalashPuja = () => {

    return <div style={{ padding: "0 5% 5% 5%", minHeight: "95vh" }}>
        <br />
        <br />
        <Text fontSize='2xl' as={'b'} >||  कलशपूजनम् ||</Text>
        <br />
        <br />
        <Text fontSize='2xl' as={'b'} >~ कलशस्थापन ~</Text><br /><br />
        {
            kalashSthapan.map((el, i) => {
                return <div key={i}>
                    <Text fontSize='sm' as={'b'} >-{el.title}-</Text><br />
                    <Text fontSize='xl' as={'b'} >{el.mantra}</Text><br />
                    <br />
                    <br />
                </div>
            })
        }

        <Text fontSize='2xl' as={'b'} >~ देवता आवाहन ~</Text><br /><br />
        {
            devAvahan.map((el, i) => {
                return <Box key={i}  >
                    <Text fontSize='xl' as={'b'} >{el.title}</Text><br />
                    <Text fontSize='xl' as={'b'} >{el.mantra}</Text><br />
                    <br />
                    <br />
                </Box>
            })
        }

        <Text fontSize='2xl' as={'b'} > ~ षोडशोपचारैः पूजनम् ~</Text><br /><br/>

        <Box textAlign={'justify'}>
            <Text fontSize='xl' as={'b'} >
            आसनार्थेऽक्षतान समर्पयामि । पादयोः पाद्यं समर्पयामि । हस्तयोः अर्घ्यं समर्पयामि । आचमनं समर्पयामि । पञ्चामृतस्नानं समर्पयामि । शुद्धोदकस्नानं समर्पयामि । 
            स्नानाङ्गाचमनं समर्पयामि । वस्त्रम् समर्पयामि । आचमनं समर्पयामि । 
            यज्ञोपवीतं समर्पयामि । आचमनं समर्पयामि । उपवस्त्रं समर्पयामि । गन्धं समर्पयामि । अक्षतान समर्पयामि । पुष्पमालां समर्पयामि । नानापरिमलद्रव्याणि समर्पयामि । 
            धूपमाध्रापयामि । दीपं दर्शयामि । हस्तप्रक्षालनम् । नैवेद्यं समर्पयामि । आचमनीयं समर्पयामि ।मध्ये पानीयम् उत्तरापोशनं च समर्पयामि । ताम्बूलं समर्पयामि । 
            पूगीफलं समर्पयामि । कृतायाः पूजायाः पाड्गुण्यार्थे द्रव्यदक्षिणां समर्पयामि । मन्त्रपुष्पाञ्जलिं समर्पयामि । अनया पूजया वरुणाद्यावाहितदेवताः प्रीयन्तां न मम । 
            </Text><br /><br />
        </Box>

        <Text fontSize='2xl' as={'b'} >~ कलश प्रार्थना ~</Text><br /><br />
        {
            prarthana.map((el, i) => {
                return <Box key={i} >
                    <Text fontSize='xl' as={'b'} >{el.title}</Text><br />
                    <Text fontSize='xl' as={'b'} >{el.mantra}</Text><br />
                    <br />
                    <br />
                </Box>
            })
        }

    </div>
}