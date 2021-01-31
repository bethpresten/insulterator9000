import './App.css';
// import { useEffect } from "react";
// import axios from "axios";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Welcome from "./containers/Welcome/Welcome";
import About from "./containers/About/About";
import Contact from "./containers/Contact/Contact";
import Login from "./containers/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  // useEffect(() => {
  //   // axios.get("/api/config").then((response) => {
  //   //   console.log(response.data).catch((err) => {
  //   //     if (err) throw err;
  //   //   });
  //   // });
  // }, []);

  return (
    <>
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/login" component={Login} />
            <Route path="/" component={Welcome} />
          </Switch>
        </Router>
        <Footer />
      </div>
    </>
  )
}

export default App;
