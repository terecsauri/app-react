/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Box, Button, Checkbox, Container, FormControl, FormLabel, HStack, Heading, Input, Stack, useToast,} from "@chakra-ui/react"
import { Logo } from '../logo'
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// eslint-disable-next-line no-unused-vars
export const Login = ((props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const hanldeChange = (event) => {
    const { name, value } = event.target;
    
    if(name === "username") setUsername(value)
    if(name === "password") setPassword(value)
    
  };

  const toast = useToast()
  const navigate = useNavigate();

  const handleSubmit = () => {

    if (username === "zelda" && password === "lightdragon") {
      navigate("/dashboard");
      
      toast({
        title: 'Correcto',
        description: "Login",
        status: 'success',
        duration: 3000,
        isClosable: true,
      })

      props.setUser(username);

    } else {
      toast({
        title: 'Error',
        description: "Login incorrecto",
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
    }

  }

  return(
    <Container
    maxW="lg"
    py={"8"}
    px={"0"}
  >
    <Stack spacing="8">
      <Stack spacing="6">
        <Logo />
        <Stack
          spacing={{
            base: '2',
            md: '3',
          }}
          textAlign="center"
        >
          <Heading
            size={{
              base: 'xs',
              md: 'sm',
            }}
          >
            Inicia sesión en tu cuenta
          </Heading>
        </Stack>
      </Stack>
      <Box
        py={{
          base: '0',
          sm: '8',
        }}
        px={{
          base: '4',
          sm: '10',
        }}
        bg={{
          base: 'transparent',
          sm: 'bg.surface',
        }}
        boxShadow={{
          base: 'none',
          sm: 'md',
        }}
        borderRadius={{
          base: 'none',
          sm: 'xl',
        }}
      >
        <Stack spacing="6">
          <Stack spacing="5">
            <FormControl>
              <FormLabel>Usuario</FormLabel>
              <Input id="username" name="username" onChange={(event)=>{hanldeChange(event)}} />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Contraseña</FormLabel>
              <Input id="password" name="password" {...props} onChange={(event)=>{hanldeChange(event)}} />
            </FormControl>
          </Stack>
          <HStack justify="space-between">
            <Checkbox defaultChecked>Recuérdame</Checkbox>
            <Button variant="text" size="sm">
              ¿Has olvidado tu contraseña?
            </Button>
          </HStack>
          <Stack spacing="6">
              <Button onClick={handleSubmit}>Entrar</Button>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  </Container>
  )
})