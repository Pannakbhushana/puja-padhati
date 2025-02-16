import React, { useState } from "react";
import { 
  Box, Container, Heading, Text, VStack, Input, Textarea, Button, FormControl, FormLabel, useToast, Spinner 
} from "@chakra-ui/react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const toast = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const templateParam =  {
    from_name: formData.name,
    from_email: formData.email,
    to_name: "पूजापद्धति",
    message: formData.message,
  }

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true); // 🔥 Show loader

    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        templateParam,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );

      toast({
        title: "Message Sent!",
        description: "We have received your message.",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });

      setFormData({ name: "", email: "", message: "" }); // Reset form
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    }

    setIsLoading(false); // 🔥 Hide loader
  };

  return (
    <Box minH="100vh" display="flex" alignItems="center" justifyContent="center" p={4}>
      <Container maxW={{ base: "md", md: "xl" }} py={8}>
        <VStack spacing={6} align="start" w="full">
          <Heading as="h1" size={{ base: "lg", md: "xl" }} textAlign="center" w="full">
            Contact Us
          </Heading>
          
          <Text fontSize={{ base: "sm", md: "md" }} color="gray.600">
            If you have any questions or inquiries, feel free to reach out to us using the form below.
          </Text>
          
          <form onSubmit={sendEmail} style={{ width: "100%" }}>
            <FormControl>
              <FormLabel>Your Name</FormLabel>
              <Input type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} required />
            </FormControl>

            <FormControl>
              <FormLabel>Your Email</FormLabel>
              <Input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />
            </FormControl>

            <FormControl>
              <FormLabel>Message</FormLabel>
              <Textarea name="message" placeholder="Write your message here..." rows={5} value={formData.message} onChange={handleChange} required />
            </FormControl>

            <Button colorScheme="blue" size="lg" mt={4} type="submit" isDisabled={isLoading}>
              {isLoading ? <Spinner size="sm" /> : "Send Message"} 
            </Button>
          </form>
        </VStack>
      </Container>
    </Box>
  );
};

export default ContactUs;
