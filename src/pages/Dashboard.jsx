import { Card, CardBody, CardHeader, Flex, Heading, Text } from "@chakra-ui/react";

export default function Dashboard() {

    return (
        <Flex>
            <Card spacing="8" align='center'>
                <CardHeader>
                    <Heading size='md'>Buenos días</Heading>
                </CardHeader>
                <CardBody>
                    <Text>Acabas de iniciar sesión</Text>
                </CardBody>
            </Card>
        </Flex>
    )
}