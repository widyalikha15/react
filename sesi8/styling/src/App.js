import React from 'react';
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

//import './App.css';

// function Header() {
//   return (
//     <header className="header">
//       <h1>My first React app</h1>
//     </header>
//   )
// }
// function Content() {
//   return (
//     <div className="content">
//       <p>
//         Silahkan isikan dengan
//         paragraf yang kamu kehendaki
//       </p>
//     </div>
//   )
// }
// function Footer() {
//   return(
//     <div className="footer">
//       <p>&copy; My self - 2022</p>
//     </div>
//   )
// }



function App() {
  return (
    // <div className="App">
    //   <Header/>
    //   <hr/>
    //   <Content/>
    //   <hr/>
    //   <Footer/>
    // </div>
    <>
      <Header/>
      <div className="container">
        <Content/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
