import React from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Group,
  PasswordInput,
  Title,
} from "@mantine/core";

import { IconArrowRight } from "@tabler/icons-react";
const ResetPassword: React.FC = () => {
  return (
    <>
      <Container mt={"xl"} size={"70%"}>
        <Flex justify="space-between">
          <Box>
            <Title>Reset Password</Title>
          </Box>
          <Box>
            <Box>
              <PasswordInput
                placeholder="Create A Password"
                styles={{
                  input: {
                    width: "30rem",
                    backgroundColor: "transparent",
                    "&:focus": {
                      border: "none",
                      boxShadow: "none",
                    },
                  },
                }}
                label="New Password"
              />
            </Box>
            <Box my={15}>
              <PasswordInput
                placeholder="Confirm Password"
                styles={{
                  input: {
                    width: "30rem",
                    backgroundColor: "transparent",
                    "&:focus": {
                      border: "none",
                      boxShadow: "none",
                    },
                  },
                }}
                label="Confirm Password"
              />
            </Box>
            <Group justify="end">
              <Button
                type="submit"
                color="black"
                rightSection={<IconArrowRight size={16} />}
              >
                Reset Password
              </Button>
            </Group>
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default ResetPassword;
