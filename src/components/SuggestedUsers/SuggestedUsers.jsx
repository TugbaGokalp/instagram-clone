import { Flex, Text, VStack } from "@chakra-ui/react";
import SuggestedHeader from "./SuggestedHeader";

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
    </VStack>
  );
};

export default SuggestedUsers;
