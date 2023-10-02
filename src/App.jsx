import "./App.css";
import { Box, ChakraProvider, Flex, Heading, Link } from "@chakra-ui/react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link as RouterLink,
  Navigate,
} from "react-router-dom";
import { Login } from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { ProtectedRoute } from "./pages/ProtectedRoute";
import { useMemo, useState } from "react";
import { Profile } from "./pages/Profile";
import { UserContext } from "./pages/UserContext";

function App() {
  const [user, setUser] = useState(null);

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <BrowserRouter>
      <ChakraProvider>
        <Box
          display={"flex"}
          alignItems={"center"}
          flexDirection={"column"}
          justifyContent="center"
          bg="linear-gradient(45deg, #faaca8 10%, #ddd6f3 90%)"
        >
          <Flex
            justify={"space-evenly"}
            align={"center"}
            h="70px"
            w="400px"
            margin="0"
            padding="0"
          >
            <Box
              bg={"purple.100"}
              borderRadius={"md"}
              _hover={{
                background: "purple.50",
              }}
              boxShadow={{
                base: "none",
                sm: "md",
              }}
            >
              <Link as={RouterLink} to="/login">
                <Heading fontSize="md" m={2}>
                  Login
                </Heading>
              </Link>
            </Box>

            <Box
              bg={"purple.100"}
              borderRadius={"md"}
              _hover={{
                background: "purple.50",
              }}
              boxShadow={{
                base: "none",
                sm: "md",
              }}
            >
              <Link as={RouterLink} to="/dashboard">
                <Heading fontSize="md" m={2}>
                  Dashboard
                </Heading>
              </Link>
            </Box>
          </Flex>

          <UserContext.Provider value={value}>
            <Routes>
              <Route path="login/*" element={<Login setUser={setUser} />} />
              <Route path="*" element={<Navigate to={"/login"} />} />
              <Route path="dashboard" element={<ProtectedRoute user={user} />}>
                <Route path="/dashboard" element={<Dashboard />} />
              </Route>
              <Route path="profile" element={<ProtectedRoute user={user} />}>
                <Route path="/profile" element={<Profile />} />
              </Route>
            </Routes>
          </UserContext.Provider>
        </Box>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
