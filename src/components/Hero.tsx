import {
  Box,
  Button,
  Container,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import React from "react";

const Hero: React.FC = () => {
  return (
    <Box w={{ base: "100%", sm: "90%", md: "80%" }} mx="auto">
      <Container fluid mt={{ base: "5rem", md: "10rem" }}>
        <Stack justify="center" w={"100%"} align="center">
          <Title
            order={1}
            style={{
              textAlign: "center",
              fontSize: "2rem",
            }}
          >
            <Text
              style={(theme) => ({
                color: theme.colors.brand[5],
                fontWeight: "700",
                fontSize: "inherit",
              })}
              component="span"
            >
              Unlock
            </Text>{" "}
            Your Creative Potential
          </Title>

          {/* Subtitle */}
          <Text
            style={{
              textAlign: "center",
              fontSize: "1.5rem",
            }}
            size="lg"
            fw="500"
          >
            with Online Design and Development Courses.
          </Text>
          <Text style={{ textAlign: "center" }} size="md">
            Learn from Industry Experts and Enhance Your Skills.
          </Text>

          {/* Buttons */}
          <Group mt="lg" wrap="wrap">
            <Button
              style={(theme) => ({
                background: theme.colors.brand[5],
                color: theme.colors.brand[0],
              })}
            >
              Explore Courses
            </Button>
            <Button
              style={(theme) => ({
                background: theme.colors.brand[0],
                color: theme.colors.gray[8],
              })}
            >
              View Pricing
            </Button>
          </Group>
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;
