import './App.css';

function Header() {
  return (
    <header className="header">
      <h1>My first React app</h1>
    </header>
  )
}
function Content() {
  return (
    <div className="content">
      <p>
        Silahkan isikan dengan
        paragraf yang kamu kehendaki
      </p>
    </div>
  )
}
function Footer() {
  return(
    <div className="footer">
      <p>&copy; My self - 2022</p>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Header/>
      <hr/>
      <Content/>
      <hr/>
      <Footer/>
    </div>
  );
}

export default App;
