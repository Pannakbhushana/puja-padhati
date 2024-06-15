import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    useColorModeValue,
    HStack
  } from '@chakra-ui/react'
  import { FaInstagram , FaYoutube,FaLinkedin  } from 'react-icons/fa'
  import { IoLogoGithub } from "react-icons/io";
  import {Link} from 'react-router-dom';
  
  
  export default function Footer() {
      const styles={
          maxWidth:'60px',
          border:'1px solid gray',
          borderRadius:'50%'
        }
        
    return (
      <Box
        color={useColorModeValue('gray.700', 'gray.200')}>
          <hr />
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
  
          <Link to='/'>
              <HStack spacing={2} alignItems={'center'}>
                  <Box><img src={'./om.png'} alt="Om" style={{width:"60px"}} /></Box>
                    <Text as='b'>KARMKAND</Text>
              </HStack>
            </Link>
  
          <Text style={{fontSize:'12px'}}>© 2024 KARMKAND. All rights reserved | Website developed by Rahul Mishra</Text>
          <Stack direction={'row'} spacing={6}>
  
            <Link to={'https://github.com/Pannakbhushana'}
                  target='_blank' 
                  style={{color:'black',fontSize:'25px'}}><IoLogoGithub  />
            </Link>
  
            <Link to={'https://www.linkedin.com/in/rahul-mishra-060054241/'}
                  target='_blank' 
                  style={{color:'blue', fontSize:'25px'}}><FaLinkedin />
            </Link>
          </Stack>
        </Container>
      </Box>
    )
  }