import { Box, Container, Stack, Text, HStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <Box>
      <hr />
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>

       <Box >
      <Box display="flex" alignItems="center" justifyContent="center">
      <Link to='/'>
          <HStack spacing={2} alignItems={'center'}>
            <Box><img src={'./om.png'} alt="Om" style={{ width: "30px" }} /></Box>
            <Text as='b'>पूजापद्धति</Text>
          </HStack>
        </Link>
      </Box>

        <Text style={{ fontSize: '12px' }} marginTop={'3'}>© 2024 पूजापद्धति All rights reserved | this Website is developed by - 
          <Link to={'/about-me'}><span style={{color:"blue"}}>Rahul Mishra</span></Link>
        </Text>
       </Box>
        
        <Stack direction={'column'} spacing={1}>
          <Link to={'/privacy-policy'} style={{ fontSize: '12px', textDecoration: 'underline' }}>Privacy Policy</Link>
          <Link to={'/terms-and-conditions'} style={{ fontSize: '12px', textDecoration: 'underline' }}>Terms & Conditions</Link>
          <Link to={'/refund-policy'} style={{ fontSize: '12px', textDecoration: 'underline' }}>Refund Policy</Link>
          <Link to={'/contact-us'} style={{ fontSize: '12px', textDecoration: 'underline' }}>Contact Us</Link>
        </Stack>
      </Container>
    </Box>
  );
}
