import "./App.css";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Login } from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { ProtectedRoute } from "./pages/ProtectedRoute";
import { useMemo, useState } from "react";
import { Profile } from "./pages/Profile";
import { UserContext } from "./pages/UserContext";
import { NavBar } from "./pages/NavBar";

function App() {
  const [user, setUser] = useState(null);

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <BrowserRouter>
      <ChakraProvider>
        <UserContext.Provider value={value}>
          <Box
            h={"100vh"}
            display={"flex"}
            alignItems={"center"}
            flexDirection={"column"}
            justifyContent="center"
            bg="linear-gradient(45deg, #faaca8 10%, #ddd6f3 90%)"
          >
            {user && <NavBar />}
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
          </Box>
        </UserContext.Provider>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
