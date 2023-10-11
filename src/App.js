import logo from "./logo.svg";
import "./App.css";

import UserCounter from "./Components/UserCounter/UserCounter";
import LoginForm from "./Components/LoginForm/LoginForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LoginForm/>
      </header>
    </div>
  );
}

export default App;
