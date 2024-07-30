import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Coding1 from "./pages/coding1";
import Coding2 from "./pages/coding2";
import Coding3 from "./pages/coding3";
import Coding4 from "./pages/coding4";
import Coding5 from "./pages/coding5";
import Coding6 from "./pages/coding6";


function App(){
  return (
    <Router>
      <NavBar></NavBar>
      <Routes>
        <Route exact path="/" Component={Home}/>
      </Routes>
      <Routes>
        <Route exact path="/coding1" Component={Coding1}/>
      </Routes>
      <Routes>
        <Route exact path="/coding2" Component={Coding2}/>
      </Routes>
      <Routes>
        <Route exact path="/coding3" Component={Coding3}/>
      </Routes>
      <Routes>
        <Route exact path="/coding4" Component={Coding4}/>
      </Routes>
      <Routes>
        <Route exact path="/coding5" Component={Coding5}/>
      </Routes>
      <Routes>
        <Route exact path="/coding6" Component={Coding6}/>
      </Routes>
    </Router>
  )
}

export default App;