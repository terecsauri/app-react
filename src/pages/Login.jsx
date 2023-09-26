import { Box, Button, Checkbox, Container, FormControl, FormLabel, HStack, Heading, Input, Stack,} from "@chakra-ui/react"
import { Logo } from '../logo'
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// eslint-disable-next-line no-unused-vars
export const Login = ((props) => {

  const [datosUsername, setDatosUsername] = useState({username: ""});
  const [datosPassword, setDatosPassword] = useState({password: ""});

  const rellenarDatosUsername = (event) => {
    
    setDatosUsername({...datosUsername, [event.target.name]: event.target.value})
    
  };

  const rellenarDatosPassword = (event) => {
    
    setDatosPassword({...datosPassword, [event.target.name]: event.target.value})
    
  };

  let navigate = useNavigate();

  const goToDashboard = () => {

    if (datosUsername.username === "zelda" && datosPassword.password === "lightdragon") {

      navigate("/dashboard");
      console.log("oleeeeee");
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
              <Input id="username" name="username" onChange={(event)=>{rellenarDatosUsername(event)}} />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Contraseña</FormLabel>
              <Input id="password" name="password" {...props} onChange={(event)=>{rellenarDatosPassword(event)}} />
            </FormControl>
          </Stack>
          <HStack justify="space-between">
            <Checkbox defaultChecked>Recuérdame</Checkbox>
            <Button variant="text" size="sm">
              ¿Has olvidado tu contraseña?
            </Button>
          </HStack>
          <Stack spacing="6">
            <Button onClick={()=>goToDashboard()}>Entrar</Button>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  </Container>
  )
})