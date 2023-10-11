import logo from "./logo.svg";
import "./App.css";
import DivComp from "./Components/DivComp/divcomp";
import { useEffect, useState } from "react";

function App() {
  const [userCount, setUserCount] = useState(0);
  const [adminCount, setAdminCount] = useState(0);
  const [totalUserCount, setTotalUserCount] = useState(0);

  useEffect(() => {
    setTotalUserCount(adminCount+userCount)
  }, [userCount,adminCount]);

  return (
    <div className="App">
      <header className="App-header">
        Kullanıcı Sayısı: {userCount}
        <button onClick={() => setUserCount(userCount + 1)}>
          Arttır
        </button>
        Admin Sayısı: {adminCount}
        <button onClick={() => setAdminCount(adminCount + 1)}>
          Arttır
        </button>
        Tüm Kullanıcıların Sayısı{totalUserCount}
      </header>
    </div>
  );
}

export default App;
