import React from "react";
import { Box, Text } from '@chakra-ui/react';
import { satnarayanPujanm } from "../utils/satnarayanPujanm";
import { Link } from "react-router-dom";


export const SatnarayanPujanm = () => {

    return <>
        <div style={{ minHeight: "95vh",paddingTop:'80px' }}>
            <Text fontSize='2xl' as={'b'} >|| सत्यनारणपूजनम् ||</Text>
            <br />
            <br />
            {
                satnarayanPujanm.map((mantra, i) => {
                    return <Box key={i} p={"0 1% 0 1%"}>
                        <Text fontSize='sm' as={'b'} >{mantra.title}</Text><br />
                        <Text fontSize='xl' as={'b'} >{mantra.des1} <br />{mantra.des2}</Text><br />
                        {mantra.des3 &&<><br/><Text fontSize='xl' as={'b'} >{mantra.des3}</Text> <br/></> }
                        <br />
                        <br />
                    </Box>
                })
            }
           
            <Text fontSize={'md'} color={'blue'} textDecor={'underline'}><Link to={'/katha'}>सत्यनारायण व्रत कथा</Link></Text>
            <br />
            <br />
            <Box w={['100%', '100%', '70%']} ml={['0', '0', '15%']}>
                <Text fontSize='md' as={'b'} >- क्षमाप्रार्थना -</Text>
                <br />
                <br />
                <Text fontSize='xl' as={'b'}>
                    मंत्रहीनं क्रियाहीनं भक्तिहीनं जनार्दन । यत्पूजितं मया देव परिपूर्णं  तदस्तु मे ॥ 
                    नमो ब्रह्मण्देवाय गोब्राह्मणहिताय च । जगद्धिताय कृष्णाय गोविन्दाय नमो नम: ॥ 
                    यदक्षरपदभ्रष्टं मात्राहीनं च यद्भवेत् । तत्सर्वं क्षम्यतां देव प्रसीद परमेश्वर ॥     
                </Text>
                <br />
                <br />
                <Text fontSize='md' as={'b'} >- विसर्जन -</Text>
                <br />
                <br />
                <Text fontSize='xl' as={'b'} >
                    ॐ यान्तु देवगणा: सर्वे पूजामादाय मामकीम्। इष्टकामसमृद्धयर्थं पुनर्अपि पुनरागमनाय च॥ <br/>
                    गच्छ गच्छ सुरश्रेष्ठ स्वस्थाने परमेश्वर। यत्र ब्रम्हादयो देवास्तत्र गच्छ हुताशन ॥   
                </Text>
                </Box>
                <br />
                <br />
        </div>
    </>
}