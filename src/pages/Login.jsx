/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Box, Button, Checkbox, Container, FormControl, FormLabel, HStack, Heading, Image, Input, InputGroup, InputRightElement, Stack, useToast,} from "@chakra-ui/react"
import { useNavigate } from "react-router-dom";
import starFall from "../../public/star-fall-svgrepo-com.svg"
import { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "./UserContext";

export const Login = ((props) => {
  const [usuarioEntero, setUsuarioEntero] = useState({});

  const { user, setUser } = useContext(UserContext);

  const [usuario, setUsuario] = useState("");
  const [correctUsername, setCorrectUsername] = useState("");
  const [password, setPassword] = useState("");
  const [correctPassword, setCorrectPassword] = useState("");

  const [datosFetcheados, setDatosFetcheados] = useState(false);

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
  
      userGet().then(() => {
        setDatosFetcheados(true);
      });
    }
  }, [])
  
  useEffect(() => {
    if (datosFetcheados) {
    console.log(usuarioEntero.name.first + ", " + correctUsername + ", " + correctPassword);
    toast({
      title: usuarioEntero.name.first + ', estos son los datos de login',
      description: correctUsername + ", " + correctPassword,
      status: 'info',
      duration: 100000000000,
      isClosable: true,
    });
    }
  }, [correctUsername, correctPassword, datosFetcheados]);
  
  const handleSubmit = () => {

    if (usuario === correctUsername && password === correctPassword) {
      navigate("/dashboard");

      props.setUser(usuarioEntero);
      toast.closeAll();

    }

  }

  return(
    <Box
      boxSize={"full"}
      w={"100vw"}
      h={"calc(100vh - 70px)"}
      py={"8"}
      px={"0"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
    <Stack maxW={"lg"} display={"flex"} justifyContent={"center"} alignItems={"center"} spacing="24">
      <Stack h="1px" display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Image boxSize={"84px"} src={starFall} alt="estrellita" />
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
              <FormLabel>👤 Usuario</FormLabel>
              <Input
              borderColor={"purple.900"}
              _hover={{
                borderColor: "purple.900",
                background: "purple.200",
              }}
              id="username" name="username" onChange={(event)=>{hanldeChange(event)}} />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">*️⃣ Contraseña</FormLabel>
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
  </Box>
  )
})