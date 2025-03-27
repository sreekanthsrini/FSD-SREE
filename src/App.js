// import logo from './logo.svg';
// import './App.css';
// import UserComponent from './Components/UserComponent';
// import SreeComponents from'./Components/SreeComponents';

// function App() {
//   return (
//     <div className="App">
//       {/* <UserComponent/>
//        */}
//        <SreeComponents/>
      
//     </div>
//   );
// }

// export default App;


import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SreeComponents from "./Components/SreeComponents";
import Advice from "./Components/Advice"; 

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SreeComponents />} />
                <Route path="/advice" element={<Advice />} />
            </Routes>
        </Router>
    );
}

export default App;

