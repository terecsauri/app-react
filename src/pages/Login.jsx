/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Box, Button, Checkbox, Container, FormControl, FormLabel, HStack, Heading, Input, InputGroup, InputRightElement, Stack, useToast,} from "@chakra-ui/react"
import { Logo } from '../logo'
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export const Login = ((props) => {
  const [usuarioEntero, setUsuarioEntero] = useState({});

  const [usuario, setUsuario] = useState("");
  const [correctUsername, setCorrectUsername] = useState("");
  const [password, setPassword] = useState("");
  const [correctPassword, setCorrectPassword] = useState("");

  const [dataFetched, setDataFetched] = useState(false);

  const [show, setShow] = useState(false)

  const handleClick = () => setShow(!show)

  const hanldeChange = (event) => {
    const { name, value } = event.target;
    
    if(name === "username") setUsuario(value)
    if(name === "password") setPassword(value)
    
  };

  const toast = useToast()
  const navigate = useNavigate();

  const userGet = async () => {
    try {
      const response = await fetch('https://randomuser.me/api/?results=1');
      const data = await response.json();
  
      if (data.results && data.results.length > 0) {
        const firstUser = data.results[0];
        setUsuarioEntero(firstUser);
        setCorrectUsername(firstUser.login.username);
        setCorrectPassword(firstUser.login.password);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true
  
      userGet();
      setDataFetched(true);

    }
  }, [])
  
  useEffect(() => {
    console.log(correctUsername + ", " + correctPassword);
    toast({
      title: 'Datos de login',
      description: correctUsername + ", " + correctPassword,
      status: 'info',
      duration: 100000000000,
      isClosable: true,
    });
  }, [correctUsername, correctPassword]);
  
  const handleSubmit = () => {

    if (usuario === correctUsername && password === correctPassword) {
      navigate("/dashboard");
      
      toast({
        title: 'Correcto',
        description: "Login",
        status: 'success',
        duration: 3000,
        isClosable: true,
      })

      props.setUser(correctUsername);

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
        bg={"purple.100"}
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
              <Input
              borderColor={"purple.900"}
              _hover={{
                borderColor: "purple.900",
                background: "purple.200",
              }}
              id="username" name="username" onChange={(event)=>{hanldeChange(event)}} />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Contraseña</FormLabel>
              <InputGroup>
                  <Input
                    type={show ? 'text' : 'password'}
                    borderColor={"purple.900"}
                    _hover={{
                      borderColor: "purple.900",
                      background: "purple.200",
                    }}
                    id="password" name="password" {...props} onChange={(event) => { hanldeChange(event) }} />
                  <InputRightElement width='4.5rem'>
                    <Button 
                      background={"purple.50"}
                      _hover={{
                        background: "purple.300",
                      }}
                      h='1.75rem' size='sm' onClick={handleClick}>
                      {show ? 'Hide' : 'Show'}
                    </Button>
                  </InputRightElement>
              </InputGroup>
            </FormControl>
          </Stack>
          <HStack justify="space-between">
            <Checkbox defaultChecked>Recuérdame</Checkbox>
            <Button variant="text" size="sm">
              ¿Has olvidado tu contraseña?
            </Button>
          </HStack>
          <Stack spacing="6">
              <Button
              background={"purple.50"}
              _hover={{
                background: "purple.300",
              }}
              onClick={handleSubmit}>Entrar</Button>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  </Container>
  )
})