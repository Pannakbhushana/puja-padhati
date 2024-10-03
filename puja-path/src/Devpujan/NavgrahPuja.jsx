import React from "react";
import { Text,Box } from '@chakra-ui/react';
import { sodasopcharPuja} from "../utils/kalash";
import { navgrahDevAwahan, navgrahPrarthana} from "../utils/navgrahPujam";



export const NavgrahPuja = () => {

    return <div style={{ minHeight: "95vh",paddingTop:'80px' }}>
        <Text fontSize='2xl' as={'b'} >|| नवग्रहपूजनम् ||</Text>
        <br />
        <br />
        <Box  w={['80%','60%','50%']} h={['200px','300px','500px']} ml={['10%','20%','25%']} >
            <img src='./navgrah.png' alt="नवग्रहपूजनम्" style={{width:"100%",height:"100%"}} />
        </Box>
        <br />
        <br />
        <Text fontSize='2xl' as={'b'} >~ नवग्रह देवता आवाहन ~</Text><br /><br />
        {
            navgrahDevAwahan.map((el, i) => {
                return <Box key={i} w={['100%','100%','70%']} ml={['0','0','15%']}>
                    <Text fontSize='sm' as={'b'} >{el.title}</Text><br />
                    <Text fontSize='xl' as={'b'} >{el.des1}</Text><br />
                    <Text fontSize='xl' as={'b'} >{el.des2}</Text><br />
                    <Text fontSize='xl' as={'b'} >{el.des3}</Text><br />
                    <br />
                    <br />
                </Box>
            })
        }

        <Text fontSize='2xl' as={'b'} > ~ षोडशोपचारैः पूजनम् ~</Text><br /><br/>

        <Box textAlign={'justify'} p={"0 5% 5% 5%"}>
            <Text fontSize='xl' as={'b'} >
            {sodasopcharPuja} अनया पूजया सूर्यादिनवग्रहा: प्रीयन्ताम् न मम ।
            </Text><br /><br />
        </Box>
        <Text fontSize='2xl' as={'b'} > ~ नवग्रह प्रार्थना ~</Text><br /><br/>
        <Box textAlign={'justify'} p={"0 5% 5% 5%"}>
            <Text fontSize='xl' as={'b'} >
            {navgrahPrarthana}
            </Text><br /><br />
        </Box>
    </div>
}