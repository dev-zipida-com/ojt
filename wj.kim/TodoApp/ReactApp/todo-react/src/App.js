import { useState } from "react";
import Header from "./components/Header";
import Login from "./pages/Login";
import List from "./pages/List";
import Write from "./pages/Write";
import Signup from "./pages/Signup";
import Chat from "./pages/Chat";
import { Route, Routes } from "react-router-dom";

function App() {
  const [username, setUsername] = useState("");

  return (
    <>
      <Header />
      <Routes>
        <Route path="/list" element={<List />} />
        <Route path="/login" element={<Login setUsername={setUsername} />} />
        <Route path="/write" element={<Write username={username} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/chat" element={<Chat username={username} />} />
      </Routes>
    </>
  );
}

export default App;
