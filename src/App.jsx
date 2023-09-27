import './App.css'
import {
  Box,
  ChakraProvider,
  Flex,
  Heading,
  Link,
} from '@chakra-ui/react'
import { BrowserRouter, Routes, Route, Link as RouterLink, Navigate } from "react-router-dom";
import { Login } from "./pages/Login"
import Dashboard from './pages/Dashboard';
import { ProtectedRoute } from './pages/ProtectedRoute';
import { useState } from 'react';

function App() {

  const [user, setUser] = useState("");

  return (
    <BrowserRouter>
      <ChakraProvider>
        <Flex justify={'space-evenly'}>
          
          <Box bg={"purple.100"} borderRadius={"md"}
            _hover={{
              background: "purple.50",
            }}
            boxShadow={{
              base: 'none',
              sm: 'md',
            }}>
            <Link
              as={RouterLink}
              to="/login"
            >
              <Heading fontSize="md" m={2}>Login</Heading>
            </Link>
          </Box>
          
          <Box bg={"purple.100"} borderRadius={"md"}
            _hover={{
              background: "purple.50",
            }}
            boxShadow={{
              base: 'none',
              sm: 'md',
            }}>
            <Link
              as={RouterLink}
              to="/dashboard"
            >
              <Heading fontSize="md" m={2}>Dashboard</Heading>
            </Link>
          </Box>

        </Flex>

        <Routes>
          <Route path='login/*' element={<Login setUser={setUser} />} />
          <Route path='*' element={<Navigate to={"/login"} />} />
          <Route path='dashboard' element={<ProtectedRoute user={user}/>}>
            <Route path="/dashboard" element={ <Dashboard /> }/>
          </Route>
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  )
}

export default App
