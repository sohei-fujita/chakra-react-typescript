import { Box, Image, Stack, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { FC, memo } from "react";

export const UserManagement: FC = memo(() => {
  return (
    <Wrap p={{ base: 4, md: 10 }}>
      <WrapItem>
        <Box
          w="260px"
          h="260px"
          bg="white"
          borderRadius="10px"
          shadow="md"
          p={4}
          _hover={{ cursor: "pointer", opacity: 0.8 }}
        >
          <Stack textAlign="center">
            <Image
              borderRadius="full"
              boxSize="160px"
              src="https://source.unsplash.com/random"
              alt="プロフィール"
              m="auto"
            />
            <Text fontSize="lg" fontWeight="bold">
              ふじた
            </Text>
            <Text fontSize="sm" color="gray">
              FUJITA
            </Text>
          </Stack>
        </Box>
      </WrapItem>
    </Wrap>
  );
});
