import React from "react";
import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";

const PrivacyPolicy = () => {
  return (
    <Box minH="100vh" display="flex" alignItems="center" justifyContent="center" paddingTop={'10'}>
      <Container maxW="4xl" py={8}>
        <VStack spacing={6} align="start">
        <Box width={'100%'} display="flex" alignItems="center" justifyContent="center">
          <Heading as="h1" size="lg">Privacy Policy</Heading>
        </Box>
          <Box>
            <Text>
              <span style={{fontStyle:'italic', fontWeight:'bold'}}>Information We Do Not Collect - </span>
              PujaPadhati is a purely informational platform. We do not collect, store, or process any personal data, such as names, emails, or phone numbers.
            </Text>
            <br />
            <Text>
            <span style={{fontStyle:'italic', fontWeight:'bold'}}>Payment Information - </span>
              If you choose to make a voluntary donation, the payment will be securely processed through a trusted third-party payment gateway. PujaPadhati does not store or have access to your payment details.
            </Text>
            <br />
            <Text>
            <span style={{fontStyle:'italic', fontWeight:'bold'}}>Cookies and Tracking - </span>
              We do not use cookies, tracking scripts, or analytics tools to collect user data.
            </Text>
            <br />
            <Text>
            <span style={{fontStyle:'italic', fontWeight:'bold'}}>External Links - </span>
              Our website may contain links to external sites. We are not responsible for the privacy practices of these websites.
            </Text>
            <br />
            <Text>
            <span style={{fontStyle:'italic', fontWeight:'bold'}}>Changes to This Policy - </span>
              We may update this Privacy Policy from time to time. Any changes will be posted on this page.
            </Text>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default PrivacyPolicy;
