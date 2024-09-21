import { Box,Text, Flex, HStack } from '@chakra-ui/react';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { ThemeContext } from '../ContextApi/ThemeContext';
import SideBar from './SideBar';

export default function Navbar() {
  const {isDark}=useContext(ThemeContext);

  return (
    <>
        <Flex h={16} 
          w={'100%'}
          position={'fixed'} 
          zIndex={2} 
          alignItems={'center'} 
          justifyContent={'space-between'}
          pr={'2%'}
          pl={'2%'}
          background={isDark ? 'linear-gradient(to right, #d56b01, #FFFF00)' : 'linear-gradient(to right, #020202, #444444)' }
          >
          <HStack spacing={8} alignItems={'center'}>
            <Box><Link to={'/'}><img src={'./om.png'} alt="Om" style={{width:"60px"}} /></Link></Box>
          </HStack>
          <Flex alignItems={'center'} >
            <SideBar />
            <div style={{ width: "20px" }}></div>
          </Flex>
        </Flex>
    </>
  );
}