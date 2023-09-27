import './App.css'
import {
  ChakraProvider,
  Flex,
  Link,
} from '@chakra-ui/react'
import { BrowserRouter, Routes, Route, Link as RouterLink, Navigate } from "react-router-dom";
import { Login } from "./pages/Login"
import { Dashboard } from './pages/Dashboard';
import { ProtectedRoute } from './pages/ProtectedRoute';
import { useState } from 'react';

function App() {

  const [user, setUser] = useState("");


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
          <Route path='login/*' element={<Login setUser={setUser} />} />
          <Route path='*' element={<Navigate to={"/login"} />} />
          <Route path='/dashboard'
          element={
            <ProtectedRoute user={user}>
              <Dashboard />
            </ProtectedRoute>
          }
          />
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  )
}

export default App
