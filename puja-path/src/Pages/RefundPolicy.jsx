import React from "react";
import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";

const RefundPolicy = () => {
  return (
    <Box minH="100vh" display="flex" alignItems="center" justifyContent="center" p={8}>
      <Container maxW={{ base: "md", md: "xl" }} py={8} p={6}>
        <VStack spacing={6} align="start">
          <Heading as="h1" size={{ base: "lg", md: "xl" }} textAlign="center" w="full">
            Refund & Cancellation Policy
          </Heading>
          <Box>
            <Text fontSize={{ base: "sm", md: "md" }} color="gray.600">
              Donations made on PujaPadhati are voluntary and non-refundable. Once a donation is made, it cannot be refunded or canceled under any circumstances.
              In case of any discrepancies or errors in the transaction, please contact us immediately. We will review the case and assist you accordingly.
            </Text>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default RefundPolicy;