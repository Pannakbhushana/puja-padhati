import React from "react";
import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";

const TermsAndConditions = () => {
  return (
    <Box minH="100vh" display="flex" alignItems="center" justifyContent="center" p={8}>
      <Container maxW={{ base: "md", md: "xl" }} py={8} p={6}>
        <VStack spacing={6} align="start">
          <Heading as="h1" size={{ base: "lg", md: "xl" }} textAlign="center" w="full">Terms & Conditions</Heading>
          
          <Box>
            <Heading as="h2" size={{ base: "sm", md: "md" }} color="gray.700">Acceptance of Terms</Heading>
            <Text fontSize={{ base: "sm", md: "md" }} color="gray.600">
              By accessing and using PujaPadhati, you agree to abide by these Terms & Conditions.
            </Text>
          </Box>
          
          <Box>
            <Heading as="h2" size={{ base: "sm", md: "md" }} color="gray.700">Use of Website</Heading>
            <Text fontSize={{ base: "sm", md: "md" }} color="gray.600">
              You agree to use this website for lawful purposes only. Any misuse or unauthorized access is strictly prohibited.
            </Text>
          </Box>
          
          <Box>
            <Heading as="h2" size={{ base: "sm", md: "md" }} color="gray.700">Intellectual Property</Heading>
            <Text fontSize={{ base: "sm", md: "md" }} color="gray.600">
              All content on this website, including text, images, and designs, is the property of PujaPadhati and protected by copyright laws.
            </Text>
          </Box>
          
          <Box>
            <Heading as="h2" size={{ base: "sm", md: "md" }} color="gray.700">External Links</Heading>
            <Text fontSize={{ base: "sm", md: "md" }} color="gray.600">
              We may include links to external websites. We are not responsible for their content or policies.
            </Text>
          </Box>
          
          <Box>
            <Heading as="h2" size={{ base: "sm", md: "md" }} color="gray.700">Limitation of Liability</Heading>
            <Text fontSize={{ base: "sm", md: "md" }} color="gray.600">
              PujaPadhati is not liable for any direct or indirect damages resulting from the use of our website.
            </Text>
          </Box>
          
          <Box>
            <Heading as="h2" size={{ base: "sm", md: "md" }} color="gray.700">Changes to Terms</Heading>
            <Text fontSize={{ base: "sm", md: "md" }} color="gray.600">
              We reserve the right to modify these Terms & Conditions at any time. Updates will be posted here.
            </Text>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default TermsAndConditions;
