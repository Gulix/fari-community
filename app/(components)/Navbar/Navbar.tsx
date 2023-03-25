"use client";

import { AddIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/next-js";
import { BsDiscord } from "react-icons/bs";

import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Show,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import { usePathname } from "next/navigation";

export function Navbar() {
  const colorModeManager = useColorMode();
  const pathname = usePathname();
  return (
    <Box>
      <Container background="" height="4rem" maxWidth="container.xl">
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <Stack direction="row" spacing={4}>
            <Box fontWeight="bold" mr="4">
              <Link href="/">Fari Community</Link>
            </Box>
            <Box>
              <Button
                isActive={pathname === "/browse"}
                variant="link"
                as={Link}
                cursor="pointer"
                minW={0}
                href="/browse"
                _hover={{
                  textDecoration: "none",
                }}
              >
                Browse
              </Button>
            </Box>
            <Show above="md">
              <Menu>
                <MenuButton
                  variant="link"
                  cursor="pointer"
                  minW={0}
                  as={Button}
                  _hover={{
                    textDecoration: "none",
                  }}
                >
                  Fari Projects
                </MenuButton>
                <MenuList alignItems="center">
                  {/* <MenuDivider /> */}
                  <MenuItem
                    as={Link}
                    href="/creators/fari-rpgs/projects/charge"
                  >
                    Charge
                  </MenuItem>
                  <MenuItem
                    as={Link}
                    href="/creators/fari-rpgs/projects/breathless"
                  >
                    Breathless
                  </MenuItem>
                  {/* <MenuItem as={Link} href="/creators/fari-rpgs/projects/firelights">
                  Firelights
                </MenuItem> */}
                  <MenuItem
                    as={Link}
                    href="/creators/fari-rpgs/projects/hopes-and-dreams"
                  >
                    Hopes & Dreams
                  </MenuItem>
                </MenuList>
              </Menu>
            </Show>
          </Stack>

          <Flex alignItems="center">
            <Stack direction="row" spacing={4}>
              <Show above="md">
                <Button
                  leftIcon={<AddIcon />}
                  as={Link}
                  href="/creators/fari-rpgs/projects/fari-community"
                >
                  Add Your Own Content
                </Button>
                <Button
                  as={Link}
                  href="https://farirpgs.com/discord"
                  target="_blank"
                  rel="noopener noreferrer"
                  leftIcon={<Icon as={BsDiscord} />}
                >
                  Join our Discord
                </Button>
              </Show>
              <Button
                aria-label="Toggle Dark Mode"
                onClick={colorModeManager.toggleColorMode}
              >
                {colorModeManager.colorMode === "light" ? (
                  <MoonIcon />
                ) : (
                  <SunIcon />
                )}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Container>
      <Divider />
    </Box>
  );
}
