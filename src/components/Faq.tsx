import {
  Box,
  Container,
  Group,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import React from "react";
import AccordionCom from "./AccordionCom";

const Faq: React.FC = () => {
  const theme = useMantineTheme();
  return (
    <Box w={{ base: "100%", sm: "90%", md: "90%" }} mx="auto">
      <Container fluid mt={"3rem"}>
        <Group
          px={"1rem"}
          py={"2rem"}
          bg={theme.colors.brand[0]}
          align="start"
          justify="space-between"
        >
          <Box>
            <Title w={{ sm: "100%", md: "70%", lg: "67%" }}>
              Frequently Asked Questions
            </Title>
            <Text w={{ sm: "100%", md: "70%", lg: "67%" }}>
              Still you have any questions? Contact our Team via
              support@skillbridge.com
            </Text>
          </Box>
          <Box>
            <AccordionCom />
          </Box>
        </Group>
      </Container>
    </Box>
  );
};

export default Faq;
