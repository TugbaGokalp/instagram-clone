import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";

const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader />
      <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
        <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
          Suggested for you
        </Text>
        <Text
          fontSize={12}
          fontWeight={"bold"}
          color={"gray.500"}
          _hover={{ color: "gray.400" }}
          cursor={"pointer"}
        >
          See all
        </Text>
      </Flex>
      <SuggestedUser />
      <SuggestedUser />
      <SuggestedUser />

      <Box fontSize={12} color={"gray.500"} mt={5} alignSelf={"start"}>
        © 2024 Built by Tugba Gokalp
      </Box>
    </VStack>
  );
};

export default SuggestedUsers;
