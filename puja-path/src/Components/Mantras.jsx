import React from "react";
import { Text } from '@chakra-ui/react';


const Mantras = ({long,small})=> {
    
    return <>
                <Text fontSize='xl' as={'b'} >ॐ केशवाय नमः ॐ नारायणाय नमः ॐ माधवाय नमः</Text>
                <br />
                <Text fontSize='sm' as={'b'} >ॐ हृषीकेशाय नमः ॐ गोविंदाय नमः</Text>
                <br />
        </>
}

export default Mantras