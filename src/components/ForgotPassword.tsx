import React from "react";
import {
  TextInput,
  Button,
  Container,
  Title,
  Text,
  Group,
  Flex,
  Box,
} from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";

const ForgotPassword: React.FC = () => {
  return (
    <Container size={"70%"} mt={"xl"}>
      <Flex justify={"space-between"}>
        <Box>
          <Title order={2} mb="xs">
            Forgot Your Password?
          </Title>
          <Text size="sm" w={"90%"} c="dimmed" mb="lg">
            Don't worry, we'll send you a link to reset your password.
          </Text>
        </Box>

        <form>
          <TextInput
            label="Enter Your Email Address"
            placeholder="eg. yourname@email.com"
            required
            w={"25rem"}
          />

          <Group justify="flex-end" mt="lg">
            <Button
              type="submit"
              color="black"
              rightSection={<IconArrowRight size={16} />}
            >
              Send Reset Link
            </Button>
          </Group>
        </form>
      </Flex>
    </Container>
  );
};

export default ForgotPassword;
