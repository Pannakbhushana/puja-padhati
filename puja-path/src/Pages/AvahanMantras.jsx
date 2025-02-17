import React, { useState } from "react";
import { Box, Container, Heading, VStack, Text, Button, Collapse } from "@chakra-ui/react";
import mantrasData from "../utils/avahanmantras";



const AvahanMantras = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleMantra = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Container maxW="lg" py={'80px'}  minH={'100vh'}>
      <Heading as="h1" size="xl" textAlign="center" mb={6}>
        ध्यान मंत्र
      </Heading>
      <VStack spacing={4} align="stretch">
        {mantrasData.map((item, index) => (
          <Box key={index} border="1px solid #ccc" borderRadius="md" p={4}>
            <Button 
              onClick={() => toggleMantra(index)}
              width="full"
              textAlign="left"
              fontSize="lg"
              variant="ghost"
            >
              {item.deity}
            </Button>
            <Collapse in={openIndex === index} animateOpacity>
              <Box mt={2} py={2} w={'100%'}>
                {item.mantras.map((mantra, i) => (
                  <Box key={i}>
                  <Text fontSize="xl" fontWeight={'bold'} py={2}>卐</Text>
                  <Text fontSize={{base:'sm', md:'xl'}} fontWeight={'bold'} whiteSpace="pre-line" mb={2} >
                    {mantra}
                  </Text>
                  <Text>----------</Text>
                  <br />
                  <br />
                  </Box>
                ))}
              </Box>
            </Collapse>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default AvahanMantras;
