import React from "react";
import { Text, Box } from '@chakra-ui/react';
import { rudraAstadhyayi } from "../utils/adhipratydhidev";

export const RudraBhishek = () => {

    return <div style={{ minHeight: "95vh", paddingTop: '80px' }}>
        <Text fontSize='2xl' as={'b'} >|| रुद्राष्टाध्यायी ||</Text>
        <br />
        <br />
        <Text fontSize='md' as={'b'} >~ अथ ध्यानम् – ~</Text><br /><br />
        <Box w={['90%', '90%', '80%']} ml={['5%', '5%', '10%']}>
        <Text fontSize='sm' as={'b'} >
            ध्यायेन्नित्यं महेशं रजतगिरिनिभं चारु चन्द्रवतंसम् ।
            रत्नाकल्पोज्ज्वलाङ्गं परशु मृगवराभीतिहस्तं प्रसन्नम् ॥
            पद्मासीनं समन्तात् स्तुतममरगणैर्व्याघ्रकृतिं वसानम् ।
            विश्वाद्यं विश्ववन्द्यं निखिलभयहरं पञ्चवक्त्रं त्रिनेत्रम् ॥
        </Text>
        </Box>

        <br />
        <br />
       
        {
            rudraAstadhyayi.map((el, i) => {
                return <Box key={i} w={['90%', '90%', '80%']} ml={['5%', '5%', '10%']} textAlign={'justify'}>
                    <Text fontSize='sm' as={'b'} ml={['40%','40%','45%']}>{el.title}</Text><br />
                    <Text fontSize='xl' as={'b'} >{el.des}</Text><br />
                    <Text fontSize='xl' as={'b'} >{el.end}</Text><br />
                    <br />
                    <br />
                </Box>
            })
        }
    </div>
}