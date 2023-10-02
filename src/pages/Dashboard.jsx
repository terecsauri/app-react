import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./UserContext";

export default function Dashboard() {
  const navigate = useNavigate();

  const { user } = useContext(UserContext);

  return (
    <Flex
      w={"100vw"}
      h={"calc(100vh - 70px)"}
      direction={"column"}
      justify={"center"}
      align={"center"}
    >
      <Card
        spacing="8"
        display={"flex"}
        flexDir={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <CardHeader>
          <Heading size="md">Buenos días, {user.name.first}</Heading>
        </CardHeader>
        <CardBody
          display={"flex"}
          flexDir={"column"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Avatar name={user.name.first} src={user.picture.large} size="2xl" />
          <Text>Acabas de iniciar sesión</Text>
          <Text>Ahora puedes acceder a tu perfil</Text>
          <Button
            background={"purple.100"}
            _hover={{
              background: "purple.300",
              border: "0",
            }}
            onClick={() => navigate("/profile")}
          >
            Ir a mi perfil
          </Button>
        </CardBody>
      </Card>
    </Flex>
  );
}
