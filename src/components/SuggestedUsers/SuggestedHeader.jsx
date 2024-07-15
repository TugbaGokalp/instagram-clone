import { Avatar, Flex, Text, Button } from "@chakra-ui/react";

const SuggestedHeader = () => {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Avatar name="As a programmer" size={"lg"} src="/profilepc.png" />
        <Text fontSize={12} fontWeight={"bold"}>
          tugbagokalp
        </Text>
      </Flex>
      <Button
        size={"xs"}
        background={"transparent"}
        _hover={{ background: "transparent" }}
        fontSize={14}
        fontWeight={"medium"}
        color={"blue.400"}
        cursor="pointer"
      >
        Log out
      </Button>
    </Flex>
  );
};

export default SuggestedHeader;
