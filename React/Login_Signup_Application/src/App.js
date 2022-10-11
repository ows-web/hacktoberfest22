import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/signup";

function App() {
  const [signUp, setSignUp] = useState(false);
  const [session, setSession] = useState("");
  const handlePageChange = () => {
    setSignUp((prev) => !prev);
  };
  useEffect(() => {
    const ses = localStorage.getItem("session");
    setSession(ses);
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          {session ? (
            <>
              <Dashboard />
            </>
          ) : (
            <>
              {signUp ? (
                <Signup pageHandler={handlePageChange} />
              ) : (
                <Login pageHandler={handlePageChange} />
              )}
            </>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;

