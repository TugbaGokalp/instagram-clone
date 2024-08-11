import { Box, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { InstagramLogo, InstagramMobileLogo } from "../../assets/constants";

import SidebarItems from "./SidebarItems";

const Sidebar = () => {
  // const { handleLogout, isLoggingOut } = useLogout();
  return (
    <Box
      height={"100vh"}
      borderRight={"1px solid "}
      borderColor={"whiteAlpha.300"}
      py={8}
      position={"sticky"}
      top={0}
      left={0}
      px={{ base: 2, md: 4 }}
    >
      <Flex
        direction={"column"}
        gap={10}
        w="full"
        height={"full"}
        alignItems={{ base: "center", md: "flex-start" }}
      >
        <Link
          to={"/"}
          as={RouterLink}
          pl={2}
          display={{ base: "none", md: "block" }}
          cursor="pointer"
        >
          <InstagramLogo />
        </Link>
        <Link
          to={"/"}
          as={RouterLink}
          p={2}
          display={{ base: "block", md: "none" }}
          borderRadius={6}
          _hover={{
            bg: "whiteAlpha.200",
          }}
          w={10}
          cursor="pointer"
        >
          <InstagramMobileLogo />
        </Link>
        <Flex
          direction={"column"}
          gap={5}
          cursor={"pointer"}
          alignItems={{ base: "center", md: "flex-start" }}
        >
          <SidebarItems />
        </Flex>

        {/* LOG OUT */}
        {/* <Tooltip
          hasArrow
          label={"Log out"}
          placement="left"
          ml={1}
          openDelay={500}
          display={{ base: "block", md: "none" }}
        >
          <Link
            alignItems={"center"}
            gap={4}
            _hover={{ bg: "whiteAlpha.400" }}
            borderRadius={6}
            p={2}
            w={{ base: 10, md: "full" }}
            justifyContent={{ base: "center", md: "flex-start" }}
            mt={"auto"}
            display={"flex"}
          >
            <BiLogOut size={25} />
            <Button
              variant={"ghost"}
              _hover={{ bg: "transparent" }}
              isLoading={isLoggingOut}
              display={{ base: "none", md: "block" }}
              onClick={() => handleLogout}
            >
              Log out
            </Button>
          </Link>
        </Tooltip> */}
      </Flex>
    </Box>
  );
};

export default Sidebar;
