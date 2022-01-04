import './App.css';

import { useEffect, useState } from 'react';

function App() {

  //sesi 21 fetch data
  const [ url ] = useState('http://127.0.0.1:5000/articles')
  const [ articles, setArticles ] = useState([])
  const [ article, setArticle ] = useState()

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(result => setArticles(result))
  }, [])

  return ( 
    //render dari class components
    <div className="App">
      <div className="container">{
        articles.map(article => (
          <div className="cards">
              <div className="head">
                  <h1>{ article.title }</h1>
              </div>
              <div className="body">
                  <p>{ article.id }</p>
              </div>
              <div className="foot">
                  <ul>
                      <li>{ article.date }</li>
                      <li>{ article.body }</li>
                  </ul>
              </div>
          </div>))
      }</div>
    </div>
  );
}

export default App;
