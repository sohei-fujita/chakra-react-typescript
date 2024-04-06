import { Box, Flex, Heading, IconButton } from "@chakra-ui/react";
import { FC, memo } from "react";
import { Link } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";

export const Header: FC = memo(() => {
  return (
    <Flex
      as="nav"
      bg="teal.500"
      color="gray.50"
      align="center"
      justify="space-between"
      padding={{ base: 3, md: 5 }}
    >
      <Flex align="center" as="a" mr={8} _hover={{ cursor: "pointer" }}>
        <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
          ユーザー管理アプリ
        </Heading>
      </Flex>
      <Flex
        align="center"
        fontSize="sm"
        flexGrow={2}
        display={{ base: "none", md: "flex" }}
      >
        <Box pr={4}>
          <Link to={"/about"}>ユーザー一覧</Link>
        </Box>
        <Link to={"/about"}>設定</Link>
      </Flex>
      <IconButton
        aria-label="メニューボタン"
        icon={<HamburgerIcon />}
        size="sm"
        variant="unstyled"
        display={{ base: "block", md: "none" }}
      />
    </Flex>
  );
});
