
import './App.css'
import { useState } from 'react'
import Calculator from './component-note/Calculator'
import Key from './component-note/Key'
import History from './component-note/History'

function App() {

  let [keys, addKey] = useState([])
  const [history, setHistory] = useState([])

  function checkAdd(event){
    return event.currentTarget.getAttribute("val")
  }

  function CLS(){
    addKey([])
    setHistory([])
  }

  function addSym(event){
    if(checkAdd(event)){      
      addKey([...keys, event.currentTarget.getAttribute("val")])
    }
  }

  function addOper(event){
    if(checkAdd(event)){      
      addKey([...keys, event.currentTarget.getAttribute("val")])
    }
  }

  function calculate(){
    const res = eval(keys.join(''))
    if(Number(keys.join('')) !== res){
      addKey([res])
      setHistory([...history,keys.join('')])
    }
  }
  function setRes(event){
    if(checkAdd(event)){      
      addKey([event.currentTarget.getAttribute("val")])
    }
  }
  
  return (    
    <div className='preRoot'> 
      <div className='root'>
        <Calculator value={keys}/>
        <div className="keyBoard">
          <Key key = "k1" val="1" setRes={addSym}/>
          <Key key = "k2" val="2" setRes={addSym}/>
          <Key key = "k3" val="3" setRes={addSym}/>
          <Key key = "k4" val="4" setRes={addSym}/>
          <Key key = "k5" val="5" setRes={addSym}/>
          <Key key = "k6" val="6" setRes={addSym}/>
          <Key key = "k7" val="7" setRes={addSym}/>
          <Key key = "k8" val="8" setRes={addSym}/>
          <Key key = "k9" val="9" setRes={addSym}/>
          <Key key = "o+" val="+" setRes={addOper}/>
          <Key key = "k0" val="0" setRes={addSym}/>
          <Key key = "o-" val="-" setRes={addOper}/>          
          <Key key = "o*" val="*" setRes={addOper}/>
          <Key key = "o=" val="=" setRes={calculate}/>
          <Key key = "oCLS" val="CLS" setRes={CLS}/>
        </div>        
      </div>      
      <div className='history-block'>
        <label>История:</label>        
        {history.map((item, i) => (<History key = {item+i} val={eval(item)} history={item + '=' + eval(item) + '-(' + (new Date()).toLocaleTimeString() + ')'} setRes={setRes}/>))}
      </div>
    </div>
  )  
} 

export default App;
