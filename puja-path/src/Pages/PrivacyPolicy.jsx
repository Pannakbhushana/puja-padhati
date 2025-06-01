import React from "react";
import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";

const PrivacyPolicy = () => {
  return (
    <Box minH="100vh" display="flex" alignItems="center" justifyContent="center" paddingTop="20">
      <Container maxW="4xl" py={8}>
        <VStack spacing={6} align="start">
          <Box width="100%" display="flex" alignItems="center" justifyContent="center">
            <Heading as="h1" size="lg">Privacy Policy</Heading>
          </Box>
          <Box>
            <Text>
              <span style={{ fontWeight: "bold", fontStyle: "italic" }}>
                No Personal Data Collection –
              </span>{" "}
              PujaPadhati is a purely informational application focused on providing content related to Hindu rituals, such as mantras, slokas, stutis, aartis, and kathas. We do not collect, store, or share any personal information such as your name, email address, phone number, or location.
            </Text>
            <br />
            <Text>
              <span style={{ fontWeight: "bold", fontStyle: "italic" }}>
                No Account Required –
              </span>{" "}
              PujaPadhati does not require users to sign up or log in. All content is freely accessible without the need for creating an account.
            </Text>
            <br />
            <Text>
              <span style={{ fontWeight: "bold", fontStyle: "italic" }}>
                Cookies and Tracking –
              </span>{" "}
              We do not use cookies, analytics tools, or any form of user tracking in our app.
            </Text>
            <br />
            <Text>
              <span style={{ fontWeight: "bold", fontStyle: "italic" }}>
                Changes to This Privacy Policy –
              </span>{" "}
              We may update this Privacy Policy occasionally. Any updates will be reflected on this page. Continued use of the app after changes indicates your acceptance of the revised policy.
            </Text>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default PrivacyPolicy;
