import React from "react";
import { Box, Text } from '@chakra-ui/react';
import SideBar from "../Routers/SideBar";
import { ganeshPuja,prePuja,swastiVachan,pauranikSloka} from "../utils/ganeshPuja";

export const GaneshPuja = () => {

    return <>
        <div style={{ minHeight: "95vh" }}>
            <br />
            <SideBar />
            <Text fontSize='2xl' as={'b'} >|| गणेश पूजन ||</Text>
            <br />
            <br />
            {
                prePuja.map((mantra,i)=>{
                    return <Box key={i} p={"0 1% 0 1%"}>
                                <Text fontSize='sm' as={'b'} >{mantra.title}</Text><br />
                                <Text fontSize='xl' as={'b'} >{mantra.des1}</Text><br />
                                { mantra.des2 && <Text fontSize='xl' as={'b'} >{mantra.des2}</Text>}<br />
                                { mantra.des3 && <Text fontSize='xl' as={'b'} >{mantra.des3}</Text>}<br />
                                <br />
                            </Box>
                })
            }

            <Text fontSize='2xl' as={'b'} >|| स्वस्ति वाचन ||</Text>
            <Box textAlign={'justify'} mt={'1%'} p={"0 5% 5% 5%"}>
                <Text fontSize='xl' as={'b'} lineHeight={'35px'} >
                    {swastiVachan}
                </Text>
            </Box>
            <br />
            <br />
            <Text fontSize='2xl' as={'b'} >|| पौराणिकस्लोका: ||</Text>
            <Box textAlign={'justify'} mt={'1%'} p={"0 5% 5% 5%"}>
                <Text fontSize='xl' as={'b'} lineHeight={'35px'} >
                    {pauranikSloka}
                </Text>
            </Box>

            <br />
            <br />
            <Text fontSize='2xl' as={'b'} >|| सङ्कल्प: ||</Text>
            <Box textAlign={'justify'} mt={'1%'} p={"0 5% 5% 5%"}>
                <Text fontSize='xl' as={'b'} lineHeight={'35px'} >
                    ॐ विष्णुर्विष्णुर्विष्णुः श्रीमद्भगवतो महापुरुषस्य विष्णोराज्ञया प्रवर्तमानस्य ब्रह्मणोऽह्नि द्वितीयपरार्धे श्रीश्वेतवाराहकल्पे वैवस्वतमन्वन्तरे अष्टाविंशतितमे कलियुगे कलिप्रथमचरणे जम्बूद्वीपे भारतवर्षे आर्यावर्तेकदेशे. .....अमुकक्षेत्रे  ....अमुकमासे ....अमुकपक्षे ....अमुकतिथौ ....अमुकवासरे
                    अद्य शुभपुण्यतिथौ अमुकगोत्र: अमुकनाम शर्माऽहं ममात्मनः सपरिवारस्य धर्मार्थकाममोक्षचतुर्विधपुरुषार्थसिद्ध्यर्थं श्रुतिस्मृतिपुराणोक्तफलप्राप्त्यर्थं मनसेप्सितसकलकामनासंसिद्ध्यर्थं
                    सकलदुरितोप— शमनपूर्वकम् सुखसौभाग्यसन्तत्यायुरारोग्यैश्वर्याभिवृद्ध्यर्थम् ....अमुकदेवता प्रीत्यर्थम् ....अमुककर्म करिष्ये।
                </Text>
            </Box>

            <br />
            <br />
            <br />
            <Text fontSize='2xl' as={'b'} >|| गणपति और गौरीकी पूजा ||</Text>
            <br />
            <br />

            {
                ganeshPuja.map((mantra, i) => {
                    return <Box key={i} p={"0 1% 0 1%"}>
                        <Text fontSize='sm' as={'b'} >{mantra.title}</Text><br />
                        <Text fontSize='xl' as={'b'} >{mantra.des1} <br />{mantra.des2}</Text>
                        <br />
                        <br />
                        <br />
                    </Box>
                })
            }
           
            <Text fontSize='sm' as={'b'} > - प्रार्थना -  </Text><br />
            <Text fontSize='xl' as={'b'} >विघ्नेश्वराय वरदाय सुरप्रियाय लम्बोदराय सकलाय जगद्धिताय ।<br />
                नागाननाय श्रुतियज्ञविभूषिताय गौरीसुताय गणनाथ नमो नमस्ते ।।<br /><br />
                भक्तार्तिनाशनपराय गणेश्वराय सर्वेश्वराय शुभदाय सुरेश्वराय ।<br />
                विद्याधराय विकटाय च वामनाय  भक्तप्रसन्नवरदाय नमो नमस्ते।।<br /><br />
                नमस्ते ब्रह्मरूपाय विष्णुरूपाय ते नमः  नमस्ते रुद्ररुपाय  करिरूपाय ते नमः।<br />
                विश्वरुपस्वरूपाय नमस्ते ब्रह्मचारिणे  भक्तप्रियाय देवाय नमस्तुभ्यं विनायक।।<br /><br />
                त्वां विघ्नशत्रुदलनेति च सुन्दरेति   भक्तप्रियेति सुखदेति फलप्रदेति।<br />
                विद्याप्रदेत्यघहरेति च ये स्तुवन्ति तेभ्यो गणेश वरदो भव नित्यमेव।।<br /><br />
                त्वं वैष्णवी शक्तिरनन्तवीर्या विश्वस्य बीजं परमासि माया।<br />
                सम्मोहितं देवि समस्तमेतत् त्वं वै प्रसन्ना भुवि मुक्तिहेतुः।।</Text><br /><br />
            <br />

        </div>
    </>
}