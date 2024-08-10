import { Avatar, Box, Flex, SkeletonCircle, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const PostHeader = ({ post, creatorProfile }) => {
  console.log("creatorProfile", creatorProfile);
  return (
    <Flex
      justifyContent={"flex-start"}
      alignItems={"center"}
      w={"full"}
      my={2}
      gap={2}
    >
      {creatorProfile ? (
        <Link to={`/${creatorProfile.username}`}>
          <Avatar
            src={creatorProfile.profilePicURL}
            alt="user profile pic"
            size={"sm"}
          />
        </Link>
      ) : (
        <SkeletonCircle size={10} />
      )}

      <Flex fontSize={12} fontWeight={"bold"} gap={2}>
        {creatorProfile ? (
          <Link to={`/${creatorProfile.username}`}>
            {creatorProfile.username}
          </Link>
        ) : (
          <SkeletonCircle w={"100px"} h={"10px"} />
        )}
        <Box color={"gray.500"}>•1w</Box>
      </Flex>
      <Box cursor={"pointer"}>
        <Text
          fontSize={12}
          color={"blue.500"}
          fontWeight={"bold"}
          _hover={{ color: "white" }}
          transition={"0.2s ease-in-out"}
        >
          Unfollow
        </Text>
      </Box>
    </Flex>
  );
};

export default PostHeader;
