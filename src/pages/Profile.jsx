/* eslint-disable react-hooks/exhaustive-deps */
import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Text,
  Avatar,
  Flex,
  Divider,
} from "@chakra-ui/react";
import { useContext } from "react";
import { UserContext } from "./UserContext";

export const Profile = () => {
  const { user } = useContext(UserContext);

  return (
    <Flex
      w={"100vw"}
      h={"calc(100vh - 70px)"}
      justify={"center"}
      align={"center"}
    >
      <Card
        display={"flex"}
        flexDir={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <CardHeader>
          <Heading size="md">Este es mi perfil, ¡viva!</Heading>
        </CardHeader>

        <CardBody
          display={"flex"}
          flexDir={"column"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Avatar name={user.name.first} src={user.picture.large} size="2xl" />
          <Text
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <br />
            ¡Soy {user.name.first}!
          </Text>

          <Divider />

          <Text
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            ¡Mi apellido es {user.name.last}!
          </Text>

          <Divider />

          <Text
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            ¡Vivo en {user.location.city}, que está en {user.location.country}!
          </Text>
        </CardBody>
      </Card>
    </Flex>
  );
};
