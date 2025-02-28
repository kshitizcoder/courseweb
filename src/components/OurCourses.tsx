import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Group,
  Image,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import React, { useState } from "react";
import { ourCourse } from "../dummyData/data";

const OurCourses: React.FC = () => {
  const [data, setData] = useState(ourCourse);
  const theme = useMantineTheme();
  return (
    <Box w={{ base: "100%", sm: "90%", md: "90%" }} mx="auto">
      <Container fluid mt={"3rem"}>
        <Title order={2}>Our Courses</Title>
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
          {data.map((value) => {
            return (
              <Grid.Col key={value.id} span={{ base: 12, sm: 6 }}>
                <Card px={"2rem"} py={"2rem"}>
                  <Card.Section>
                    <Image src={value.img} alt="Norway" />
                  </Card.Section>
                  <Group mt={"1rem"} justify="space-between">
                    <Box display={"flex"}>
                      <Text>{value.duration}</Text>
                      <Text ml={"1.5rem"}>{value.level}</Text>
                    </Box>
                    <Text>{value.user}</Text>
                  </Group>
                  <Group justify="flex-end">
                    <Text fw={"bold"} fz={"40"}></Text>
                  </Group>
                  <Box mt={"1.5rem"}>
                    <Title order={3}>{value.title}</Title>
                    <Text>{value.para}</Text>
                  </Box>
                  <Group mt={"2rem"} justify="flex-end">
                    <Button
                      fullWidth
                      c={theme.colors.gray[7]}
                      bg={theme.colors.gray[5]}
                    >
                      Get It Now
                    </Button>
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

export default OurCourses;
