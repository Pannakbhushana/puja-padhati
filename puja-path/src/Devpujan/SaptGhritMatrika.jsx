import React from "react";
import { Text, Box } from '@chakra-ui/react';
import { sodasopcharPuja } from "../utils/kalash";
import SideBar from "../Routers/SideBar";
import { navgrahPrarthana } from "../utils/navgrahPujam";
import { saptGhriMatrikaAvahan } from "../utils/saptGhriMatrikaPuja";



export const SaptGhritMatrika = () => {

    return <div style={{ minHeight: "95vh" }}>
        <br />
        <SideBar />
        <Text fontSize='2xl' as={'b'} >|| सप्तघृतमातृकापूजनम् ||</Text>
        <br />
        <br />
        <Box border={'5px solid black'} w={['80%', '60%', '50%']} h={['200px', '300px', '500px']} ml={['10%', '20%', '25%']} >
            <img src={'/vasordhara.png'} alt="Navgrah-Mandal" style={{ width: "100%", height: "100%" }} />
        </Box>
        <br />
        <br />
        <Text fontSize='md'  >
        विधि- षोडश मातृका पूजन के बाद सप्त घृत मातृका की पूजा की जाती है। यहाँ सप्तघृत मातृका मंडल दिया गया है जो सिंदूर में घी <br/>
        मिलाकर बनायी जाती है। एवं इसे उर्ध्व स्थापित किया जाता है। सप्त घृत मातृका नाम - श्री, लक्ष्मी, धृति, मेधा, स्वाहा, प्रज्ञा और सरस्वती <br/>
        इन सातों देवियों का पूजन सप्त घृत मातृका वेदी में किया जाता है। मातृका पूजन वामावर्त करने की विधि है। नीचे के सातों बिंदुओं पर दक्षिण <br/>
        से आरम्भ करके उत्तर में समापन करना चाहिये।
        </Text><br />
      

        <Text fontSize='2xl' as={'b'} >~ सप्तघृतमातृका आवाहन ~</Text><br /><br />
        {
            saptGhriMatrikaAvahan.map((el, i) => {
                return <Box key={i}>
                    <Text fontSize='sm' as={'b'} >{el.title}</Text><br />
                    <Text fontSize='xl' as={'b'} >{el.des1}</Text><br />
                    <Text fontSize='xl' as={'b'} >{el.des2}</Text><br />
                    <br />
                    <br />
                </Box>
            })
        }

        <Text fontSize='2xl' as={'b'} > ~ षोडशोपचारैः पूजनम् ~</Text><br /><br />

        <Text fontSize='sm' as={'b'} >प्राण-प्रतिष्ठा</Text><br />
        <Text fontSize='xl' as={'b'} >
            ऊँ मनोजूतिर्जुषतामाज्यस्य बृहस्पतिर्यज्ञमिमं तन्नोत्वरिष्टं यज्ञ ᳪ समिमं दधातु।। <br />
            विश्वेदेवा स इह मादयंतामों३ प्रतिष्ठ। ॐ भूर्भुवः स्वः श्रियादि सप्तघृतमातरः इहागच्छत इह तिष्ठत।
        </Text><br />
        <br />
        <br />

        <Box textAlign={'justify'} p={"0 5% 2% 5%"}>
            <Text fontSize='xl' as={'b'} >
                ॐ भूर्भुवः स्वः श्रियादि सप्तघृतमातृभ्यो नमः {sodasopcharPuja}
            </Text>
        </Box>

        <Text fontSize='sm' as={'b'} >प्रार्थना</Text><br />
        <Text fontSize='xl' as={'b'} >
            ॐ यदङ्गत्वेन भो देव्यः पूजिता विधिमार्गतः। कुर्वन्तु कार्यमखिलं निर्विघ्नेन क्रतूद्भवम्॥
        </Text><br />
        <br />
        <br />

        <Text fontSize='sm' as={'b'} >वसोर्धारा </Text><br />
        <Text fontSize='xl' as={'b'} >
            ॐ व्वसोः पवित्रमसि शतधारं व्वसोः पवित्रमसि सहस्रधारम् । देवस्त्वा सविता पुनातु व्वसोः पवित्रेण शतधारेण सुप्वा ॥
        </Text><br />
        <br />
        <br />

        <Text fontSize='md'  >विभक्त धाराओं के मध्य में गुड़ द्वारा (फलादि से ग्रहण करके) एकीकरण - ॐ कामधुक्षः ।। </Text><br />

        <Text fontSize='sm' as={'b'} >छन्दोगी वसोर्धारा मंत्र </Text><br />
        <Text fontSize='xl' as={'b'} >
            ॐ एतमुत्यं मदच्युतं शतधारं वृषभं दिवो दुहं विश्वावसूनी बिभ्रतं।  <br />
            सहस्रधारं वृषभं पयोदुहं प्रियं देवाय जन्मने। <br />
            ऋतेन य ऋत जातो विवावृधे राजा जातो देवऋतं बृहत्।<br />
        </Text><br />
        <br />
        <br />

        <Text fontSize='sm' as={'b'} >आयुष्यमन्त्रपाठ  </Text><br />
        <Text fontSize='xl' as={'b'} >
            ॐ यदायुष्यं चिरं देवाः सप्तकल्पान्तजीविषु । <br />
            ददुस्तेनायुषा युक्ता जीवेम शरदः शतम् ॥ <br />
            दीर्घा नागा नगा नद्योऽनन्ताः सप्तार्णवा दिशः । <br />
            अनन्तेनायुषा तेन जीवेम शरदः शतम् ॥ <br />
            सत्यानि पश्चभूतानि विनाशरहितानि च । <br />
            अविनाश्यायुषा तद्वज्जीवेम शरदः शतम् ॥ <br />
            ॐ आयुष्यं व्वर्चस्य ᳪ रायस्पोषमौद्भिदम् । <br />
            इद ᳪ हिरण्य व्वर्च्चस्व ज्जैत्रायाविशता द्रुमाम् ॥ <br />
            ॐ न तद्द्रक्षा ᳪ सि न पिशाचास्तरन्न्ति देवानामोजः प्रथमज ᳪ ह्येतत् । <br />
            यो विभर्त्ति दाक्षायणः हिरण्ण्य स देवेषु कृणुते दीर्घमायुः स मनुष्येषु कृणुते दीर्घमायुः ॥ <br />
        </Text><br />
        <br />
        <br />

    </div>
}