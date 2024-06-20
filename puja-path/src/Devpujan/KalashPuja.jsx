import React from "react";
import { Text,Box } from '@chakra-ui/react';
import { kalashSthapan,devAvahan,prarthana, sodasopcharPuja} from "../utils/kalash";
import SideBar from "../Routers/SideBar";

export const KalashPuja = () => {

    return <div style={{ minHeight: "95vh" }}>
       <br />
       <SideBar/>
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

        <Box textAlign={'justify'} p={"0 5% 5% 5%"}>
            <Text fontSize='xl' as={'b'} >
            {sodasopcharPuja} अनया पूजया वरुणाद्यावाहितदेवताः प्रीयन्ताम् न मम ।
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