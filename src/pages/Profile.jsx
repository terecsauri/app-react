/* eslint-disable react-hooks/exhaustive-deps */
import { Card, CardHeader, CardBody, Heading, Text, Avatar, Flex, Divider } from '@chakra-ui/react'
import { useEffect, useState } from 'react';

export const Profile = () => {

    const [resultado, setResultado] = useState([]);

    const apiGet = async () => {
        await fetch('https://randomuser.me/api')
            .then((Response) => Response.json())
            .then(data => {
                setResultado(data.results);
            });
    }

    const [dataFetched, setDataFetched] = useState(false);
  
  useEffect(() => {
    if (!dataFetched) {
      apiGet();
      setDataFetched(true);
    }
  }, [dataFetched]);

    return (
        <Flex w={"100vw"}
        h={"calc(100vh - 35.2px)"}
        justify={"center"}
        align={"center"}>
        <Card display={"flex"} flexDir={"column"} alignItems={'center'} justifyContent={"center"}>
            
            <CardHeader>
                <Heading size='md'>Este es mi perfil, ¡viva!</Heading>
            </CardHeader>

            {resultado.map((item, index) => {
                return (
                    <CardBody display={"flex"} flexDir={"column"} alignItems={'center'} justifyContent={"center"} key={index}>
                        <Avatar name={item.name.first} src={item.picture.large} size="2xl" />
                        <Text display={"flex"} alignItems={'center'} justifyContent={"center"}><br/>¡Soy {item.name.first}!</Text>

                        <Divider />

                        <Text display={"flex"} alignItems={'center'} justifyContent={"center"}>¡Mi apellido es {item.name.last}!</Text>

                        <Divider />

                        <Text display={"flex"} alignItems={'center'} justifyContent={"center"}>¡Vivo en {item.location.city}, que está en {item.location.country}!</Text>
                    </CardBody>
                )
            })}
            
        </Card>

        </Flex>

    )
        
}