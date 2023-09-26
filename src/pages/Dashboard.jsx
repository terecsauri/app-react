import { Card, CardBody, CardHeader, Flex, Heading, Text } from "@chakra-ui/react";


export default function Dashboard() {
    return (
        <Flex>
            <Card align='center'>
                <CardHeader>
                    <Heading size='md'> Buenos días, </Heading>
                </CardHeader>
                <CardBody>
                    <Text>Acabas de iniciar sesión y tu contraseña es </Text>
                </CardBody>
            </Card>
        </Flex>
    )
}