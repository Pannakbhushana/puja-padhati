import { Box, Container, Stack, Text, HStack } from '@chakra-ui/react'
import { FaLinkedin } from 'react-icons/fa'
import { IoLogoGithub } from "react-icons/io";
import { Link } from 'react-router-dom';


export default function Footer() {

  return (
    <Box
      >
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
            <Box><img src={'./om.png'} alt="Om" style={{ width: "30px" }} /></Box>
            <Text as='b'>पूजापद्धति</Text>
          </HStack>
        </Link>

        <Text style={{ fontSize: '12px' }}>© 2024 पूजापद्धति All rights reserved | Website developed by - 
            <Link to={'/about-me'}><span style={{color:"blue",textDecoration:"underline"}}>@Rahul_Mishra</span></Link> 
          </Text>
        <Stack direction={'row'} spacing={6}>

          <Link to={'https://github.com/Pannakbhushana'}
            target='_blank'
            style={{ color: 'black', fontSize: '25px' }}><IoLogoGithub />
          </Link>

          <Link to={'https://www.linkedin.com/in/rahul-mishra-060054241/'}
            target='_blank'
            style={{ color: 'blue', fontSize: '25px' }}><FaLinkedin />
          </Link>
        </Stack>
      </Container>
    </Box>
  )
}