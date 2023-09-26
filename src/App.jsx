import './App.css'
import {
  ChakraProvider,
  Flex,
  Link,
} from '@chakra-ui/react'
import { BrowserRouter, Routes, Route, Link as RouterLink, Navigate } from "react-router-dom";
import { Login } from "./pages/Login"
import Dashboard from './pages/Dashboard';

function App() {

  return (
    <BrowserRouter>
      <ChakraProvider>
        <Flex>
          <Link
            as={RouterLink}
            to="/login"
          >
            Login
          </Link>

          <Link
            as={RouterLink}
            to="/dashboard"
          >
            Dashboard
          </Link>
        </Flex>

        <Routes>
          <Route path='login/*' element={<Login />} />
          <Route path='*' element={<Navigate to={"/login"} />} />

          <Route path='dashboard' element={<Dashboard />}/>

        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  )
}

export default App
