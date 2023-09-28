/* eslint-disable react-hooks/exhaustive-deps */
import { Card, CardHeader, CardBody, Heading, Text, Avatar } from '@chakra-ui/react'
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

    useEffect(() => {
        apiGet();
    }, []);

    return (
        <Card>
            
            <CardHeader>
                <Heading size='md'>Este es mi perfil, ¡viva!</Heading>
            </CardHeader>

            {resultado.map((item, index) => {
                return (
                    <CardBody key={index}>
                        <Avatar name={item.name.first} src={item.picture.large} size="l" />
                        <Text>¡Soy {item.name.first}!</Text>
                        <Text>¡Mi apellido es {item.name.last}!</Text>
                        <Text>¡Vivo en {item.location.city}, que está en {item.location.country}!</Text>
                    </CardBody>
                )
            })}
            
        </Card>

    )
        
}