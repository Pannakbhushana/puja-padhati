import React from "react";
import { Text, Box, Checkbox,Stack } from '@chakra-ui/react';
import { samagri1,samagri2,samagri3 } from "../utils/satnarayanPujanm";


export const PujanVidhi = () => {

    return <div style={{ minHeight: "95vh", paddingTop: '80px' }}>
        <Box p={"0 5% 5% 5%"}>
            <Text fontSize='2xl' as={'b'} >|| श्री सत्यनारण व्रत पूजन विधि ||</Text>
            <br />
            <br />

            <Text fontSize='md' as={'b'} >
                श्रीसत्यदेव के पूजन का व्रती जिस दिन कथा सुनना चाहे उस दिन सबेरे स्नान कारके भगवान सत्यनारायण (श्रीकृष्ण, राम आदि) को श्रद्धापूर्वक प्रणाम करें। और चंदन, चावल धूप, दीपादि से की पूजा कर व्रत का संकल्प लें।
                इस प्रकार व्रत का सकल्प करके व्रती सारे दिन निराहार रहकर विष्णु भगवान का ध्यान और गुणगान करें। सायकाल पूजन का विधान है-
            </Text>
            <br />
            <br />
            <Text fontSize='md' as={'b'} >सायकाल के समय स्नान करके पूजन के स्थान में आकर आसन पर बैठकर आचमन करे तथा पवित्री धारण करे।</Text>
            <br />
            <br />
            <Text fontSize='md' as={'b'} >गाय के गोबर से अल्पना बनाएं और उस पर पूजा की चौकी रखें।</Text>
            <br />
            <br />
            <Text fontSize='md' as={'b'} >चौकी के चारों और केले के पत्ते लगाए। चौकी पर भगवान सत्यनारायण (शालिग्राम / विष्णु / कृष्ण / राम, कोई भी विष्णु अवतार) को स्थापित करें। </Text>
            <br />
            <br />
            <Text fontSize='md' as={'b'} >पूजा प्रारम्भ करने से पहले गणपति की पूजा करें। </Text>
            <br />
            <br />
            <Text fontSize='md' as={'b'} >फिर इंद्रादि दशदिक्पाल, पंच लोकपाल, सत्यनारायण, लक्ष्मी, महादेव औऱ ब्रह्मा आदि देवता की धूप दीप आदि से पूजा करें, भोग लगाएं। </Text>
            <br />
            <br />
            <Text fontSize='md' as={'b'} >तत्पश्चात भगवान सत्यनारायण की कथा पढ़कर आरती करें। </Text>
            <br />
            <br />
            <Text fontSize='md' as={'b'} >फिर पुरोहित को दक्षिणा एवं वस्त्रादि दे। भोजन करवाने के बाद अंत मे स्वयं भोजन करें। </Text>

            <br />
            <br />
            <br />
            <br />

            <Text fontSize='2xl' as={'b'} >|| श्री सत्यनारायण व्रत पूजन सामग्री ||</Text>
            <br />
            <br />
            <br />
            <br />
            <Box display={'flex'} justifyContent={'space-around'} >
                <Stack spacing={5} direction='column'>
                    {
                        samagri1.map((el,i)=>{
                           return <Checkbox colorScheme='green' defaultChecked={false} key={i}>
                                    <Text fontSize='md' as={'b'} >{el}</Text>
                                  </Checkbox>
                        })
                    }
                </Stack>
                <Stack spacing={5} direction='column'>
                    {
                        samagri2.map((el,i)=>{
                           return <Checkbox colorScheme='green' key={i}>
                                    <Text fontSize='md' as={'b'} >{el}</Text>
                                  </Checkbox>
                        })
                    }
                </Stack>
                <Stack spacing={5} direction='column'>
                    {
                        samagri3.map((el,i)=>{
                           return <Checkbox colorScheme='green' key={i}>
                                    <Text fontSize='md' as={'b'} >{el}</Text>
                                  </Checkbox>
                        })
                    }
                </Stack>
            </Box>
        </Box>
    </div>
}