/* eslint-disable no-unused-vars */
import { Box, Button, Flex, Heading, Link } from "@chakra-ui/react";
import { useContext } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";

export const NavBar = () => {
  const { user, setUser } = useContext(UserContext);

  const navigate = useNavigate();

  const handleClick = () => {
    setUser(null);

    navigate("/login");
  };

  return (
    <Flex
      justify={"space-evenly"}
      align={"center"}
      h="70px"
      w="400px"
      margin="0"
      padding="0"
    >
      <Box
        bg={"purple.100"}
        borderRadius={"md"}
        _hover={{
          background: "purple.50",
        }}
        boxShadow={{
          base: "none",
          sm: "md",
        }}
      >
        <Button
          background={"purple.100"}
          _hover={{
            background: "purple.300",
            border: "0",
          }}
          onClick={handleClick}
        >
          Logout
        </Button>
      </Box>

      <Box
        bg={"purple.100"}
        borderRadius={"md"}
        _hover={{
          background: "purple.50",
        }}
        boxShadow={{
          base: "none",
          sm: "md",
        }}
      >
        <Button
          background={"purple.100"}
          _hover={{
            background: "purple.300",
            border: "0",
          }}
          onClick={()=>navigate("/dashboard")}
        >
          Dashboard
        </Button>
      </Box>
      <Box
        bg={"purple.100"}
        borderRadius={"md"}
        _hover={{
          background: "purple.50",
        }}
        boxShadow={{
          base: "none",
          sm: "md",
        }}
      >
        <Button
          background={"purple.100"}
          _hover={{
            background: "purple.300",
            border: "0",
          }}
          onClick={()=>navigate("/profile")}
        >
          Perfil
        </Button>
      </Box>
    </Flex>
  );
};
