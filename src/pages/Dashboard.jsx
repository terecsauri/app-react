import { Card, CardBody, CardHeader, Flex, Heading, Text } from "@chakra-ui/react";

export const Dashboard = () => {

    return (
        <Flex>
            <Card align='center'>
                <CardHeader>
                    <Heading size='md'>Holaaaaaaa</Heading>
                </CardHeader>
                <CardBody>
                    <Text>Acabas de iniciar sesión y tu contraseña es ¡viva la seguridad!</Text>
                </CardBody>
            </Card>
        </Flex>
    )
}