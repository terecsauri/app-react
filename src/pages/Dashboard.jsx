import { Button, Card, CardBody, CardHeader, Flex, Heading, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {

    const navigate = useNavigate();

    return (
        <Flex>
            <Card spacing="8" align='center'>
                <CardHeader>
                    <Heading size='md'>Buenos días</Heading>
                </CardHeader>
                <CardBody>
                    <Text>Acabas de iniciar sesión</Text>
                    <Text>Ahora puedes ir a tu perfil</Text>
                    <Button 
                    background={"purple.100"}
                    _hover={{
                      background: "purple.300",
                    }}
                    onClick={()=>navigate("/profile")}>Ir a mi perfil</Button>
                </CardBody>
            </Card>
        </Flex>
    )
}