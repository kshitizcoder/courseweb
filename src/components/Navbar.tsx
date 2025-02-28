import {
  AppShell,
  Group,
  Burger,
  Title,
  Anchor,
  Button,
  Flex,
  useMantineTheme,
  Drawer,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import React from "react";
import Hero from "./Hero";

function Navbar() {
  const theme = useMantineTheme();
  const [opened, { toggle, close }] = useDisclosure(false);
  const [activeLink, setActiveLink] = React.useState(0);

  const links = [
    { label: "Home" },
    { label: "Courses" },
    { label: "About Us" },
    { label: "Pricing" },
    { label: "Contact" },
  ];

  const items = links.map((link, index) => (
    <Anchor
      key={index}
      underline="never"
      onClick={(event) => {
        event.preventDefault();
        setActiveLink(index);
        close();
      }}
    >
      <Text
        style={(theme) => ({
          fontSize: "1.2rem",
          color: theme.colors.gray[8],
        })}
      >
        {link.label}
      </Text>
    </Anchor>
  ));

  return (
    <AppShell header={{ height: "60" }} padding="md">
      <AppShell.Header>
        <Flex justify="space-between" align="center" h="100%" px="md">
          <Group>
            <Title order={3} c={theme.primaryColor}>
              Course Ninja
            </Title>
          </Group>

          <Group visibleFrom="sm">{items}</Group>

          <Burger hiddenFrom="sm" opened={opened} onClick={toggle} size="sm" />
        </Flex>
      </AppShell.Header>

      <Drawer
        opened={opened}
        onClose={close}
        position="right"
        title=""
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <Flex direction="column" gap="md">
          {items}
        </Flex>
      </Drawer>
    </AppShell>
  );
}

export default Navbar;
