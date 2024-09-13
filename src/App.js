// // import React from "react";
// // import Home from "./Components/Home/home";
// // import About from "./Components/About/About";
// // import Contact from "./Components/Contact/Contact";
// // function App() {
// //   return (
// //     <div className="App">
// //       <Home/>
// //       <About/>
// //       <Contact/>
// //     </div>
// //   );
// // }

// // export default App;

// import React, { Component } from 'react'; 
// import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom'; 
//  import Home from "./Components/Home/home";
//  import About from "./Components/About/About";
//  import Contact from "./Components/Contact/Contact";

  
// class App extends Component { 
//   render() { 
//       return ( 
//       <Router> 
//           <div className="App"> 
//               <ul className="App-header"> 
//               <li> 
//                   <Link to="/">Home</Link> 
//               </li> 
//               <li> 
//                   <Link to="/about">About Us</Link> 
//               </li> 
//               <li> 
//                   <Link to="/contact">Contact Us</Link> 
//               </li> 
//               </ul> 
//           <Routes> 
//                   <Route exact path='/' element={< Home />}></Route> 
//                   <Route exact path='/about' element={< About />}></Route> 
//                   <Route exact path='/contact' element={< Contact />}></Route> 
//           </Routes> 
//           </div> 
//       </Router> 
//   ); 
//   } 
//   } 
    
//   export default App;

import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/About",
      element: <About />,
    },
    {
      path: "/Contact",
      element: <Contact />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
export default App;
