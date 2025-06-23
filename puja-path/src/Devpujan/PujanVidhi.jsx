import React, { useEffect, useState } from "react";
import {
  Text,
  Box,
  Checkbox,
  Button,
  Input,
  VStack,
  useToast,
  IconButton,
  Flex,
  SimpleGrid,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { samagri } from "../utils/satnarayanPujanm";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useRef } from "react";

export const PujanVidhi = () => {
  const [newSamagri, setNewSamagri] = useState("");
  const [customSamagri, setCustomSamagri] = useState([]); // ✅ FIXED HERE
  const [checkedItems, setCheckedItems] = useState({});
  const contentRef = useRef();
  const toast = useToast();

  useEffect(() => {
    const stored = localStorage.getItem("customSamagri");
    if (stored) {
      setCustomSamagri(JSON.parse(stored));
    }
  }, []);

  const handleAdd = () => {
    const trimmed = newSamagri.trim();
    if (!trimmed) {
      toast({
        title: "कृपया सामग्री का नाम लिखें।",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
      return;
    }

    const updated = [...customSamagri, trimmed];
    setCustomSamagri(updated);
    localStorage.setItem("customSamagri", JSON.stringify(updated));
    setNewSamagri("");
    toast({
      title: "नई सामग्री जोड़ी गई।",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  const handleRemove = (item) => {
    const updated = customSamagri.filter((s) => s !== item);
    setCustomSamagri(updated);
    const newChecked = { ...checkedItems };
    delete newChecked[item];
    setCheckedItems(newChecked);
    localStorage.setItem("customSamagri", JSON.stringify(updated));
    toast({
      title: "सामग्री हटाई गई।",
      status: "info",
      duration: 2000,
      isClosable: true,
    });
  };

  const handleExportPDF = () => {
    const input = contentRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("pujan-samagri.pdf");
    });
  };

  return (<Box minH="100vh" pt="80px" px={{ base: 4, md: "10%" }} pb={10}>
    <Box ref={contentRef}>
      <Text fontSize="2xl" fontWeight="bold" mb={8}>
        || पूजन सामग्री ||
      </Text>

      {/* Default Samagri */}
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={4} >
        {samagri.map((item, index) => (
          <Checkbox
            key={index}
            colorScheme="green"
            borderRadius="md"
            p={3}
            bg="rgba(255, 255, 255, 0.5)"
            _checked={{ bg: "green.100" }}
          >
            <Text fontWeight="semibold">{item}</Text>
          </Checkbox>
        ))}
      </SimpleGrid>

      {/* Custom Samagri */}
      {customSamagri.length > 0 && (
        <>
          <Text fontSize="xl" fontWeight="bold" mt={10} mb={4}>
            👤 जोड़ी गई सामग्री:
          </Text>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={4}>
            {customSamagri.map((item, index) => {
              const isChecked = checkedItems[item] || false;
              return (
                <Flex
                  key={index}
                  align="center"
                  justify="space-between"
                  bg={isChecked ? "green.100" : "rgba(255, 255, 255, 0.5)"}
                  p={3}
                  borderRadius="md"
                  transition="all 0.2s"
                >
                  <Checkbox
                    colorScheme="green"
                    isChecked={isChecked}
                    onChange={(e) =>
                      setCheckedItems((prev) => ({
                        ...prev,
                        [item]: e.target.checked,
                      }))
                    }
                  >
                    <Text fontWeight="semibold">{item}</Text>
                  </Checkbox>
                  <IconButton
                    icon={<DeleteIcon />}
                    aria-label="हटाएं"
                    size="sm"
                    variant="ghost"
                    colorScheme="red"
                    onClick={() => handleRemove(item)}
                  />
                </Flex>
              );
            })}
          </SimpleGrid>
        </>
      )}
    </Box>

    {/* Add New Samagri Section */}
    <VStack spacing={4} align="start" mt={10} w="100%">
      <Text fontSize="xl" fontWeight="bold">
        ➕ नई सामग्री जोड़ें:
      </Text>

      {/* Input and जोड़ें Button */}
      <Flex
        direction={{ base: "column", sm: "row" }}
        gap={3}
        w="100%"
        align="stretch"
      >
        <Input
          placeholder="सामग्री का नाम लिखें"
          value={newSamagri}
          onChange={(e) => setNewSamagri(e.target.value)}
          maxW={{ base: "100%", sm: "60%", md: "40%" }}
          flex={1}
          minH="40px"
        />
        <Button
          colorScheme="green"
          onClick={handleAdd}
          variant="solid"
          flexShrink={0}
          w={{ base: "100%", sm: "auto" }}
        >
          जोड़ें
        </Button>
      </Flex>

      {/* PDF Download Button (separated below) */}
      <Flex justify="flex-end" w="100%" mt={2}>
        <Button
          onClick={handleExportPDF}
          colorScheme="blue"
          size={{ base: "sm", md: "md" }}
          px={{ base: 4, md: 6 }}
          fontSize={{ base: "sm", md: "md" }}
        >
          ⬇️ PDF डाउनलोड करें
        </Button>
      </Flex>
    </VStack>
  </Box>
  );
};
