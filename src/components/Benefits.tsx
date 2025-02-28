import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Group,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { MdOutlineArrowOutward } from "react-icons/md";
import React from "react";
import { benefits } from "../dummyData/data";

const Benefits: React.FC = () => {
  const theme = useMantineTheme();

  return (
    <Box w={{ base: "100%", sm: "90%", md: "90%" }} mx="auto">
      <Container fluid mt={"4rem"}>
        <Title order={2}>Benefits</Title>
        <Group justify="space-between" align="center">
          <Text w={{ sm: "100%", lg: "67%" }}>
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
            elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum
            eget habitasse in velit fringilla feugiat senectus in.
          </Text>
          <Button
            style={(theme) => ({
              background: theme.colors.brand[0],
              color: theme.colors.gray[8],
            })}
          >
            View All
          </Button>
        </Group>
        <Grid mt={"2rem"}>
          {benefits.map((value) => {
            return (
              <Grid.Col
                key={value.id}
                span={{ base: 12, sm: 6, md: 4, lg: 4, xl: 4 }}
              >
                <Card px={"2rem"} py={"2rem"}>
                  <Group justify="flex-end">
                    <Text fw={"bold"} fz={"40"}>
                      {value.number}
                    </Text>
                  </Group>
                  <Box mt={"1.5rem"}>
                    <Title order={3}>{value.title}</Title>
                    <Text>{value.para}</Text>
                  </Box>
                  <Group mt={"2rem"} justify="flex-end">
                    <MdOutlineArrowOutward
                      size={"2rem"}
                      color={theme.colors.brand[5]}
                    />
                  </Group>
                </Card>
              </Grid.Col>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default Benefits;
