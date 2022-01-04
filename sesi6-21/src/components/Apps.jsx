import React, {useEffect, useState} from 'react';

function App(){
    const [date, setDate] = useState(new Date())
    function tick(){
        setDate(new Date())
    }
    useEffect(()=>{
        const interval = setInterval(() => tick(),1000);
        return () => {
            clearInterval(interval);
        }
    },[])
    //setInterval(()=> tick(), 1000)
    return (
        <div className="App-clock">
        <h1>Realtime CLOCK</h1>
        <hr/>
        <h1>{date.toLocaleTimeString()}</h1>
      </div>
    )
  }
  
  export default App;