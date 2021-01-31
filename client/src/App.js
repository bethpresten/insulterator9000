import './App.css';
import { useEffect } from "react";
import axios from "axios";

function App() {
  useEffect(() => {
    axios.get("/api/config").then((response) => {
      console.log(response.data).catch((err) => {
        if (err) throw err;
      });
    });
  }, []);

  return (
    <div className="App">

    </div>
  );
}

export default App;
