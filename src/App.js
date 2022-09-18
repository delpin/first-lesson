
import './App.css'
import { useState } from 'react'
import Key from './component/Key'
import Result from './component/Result'

function App() {

  const [keys, addKey] = useState([])
  const [result, setResult] = useState([])
  
  function addComponent(ev) {
    console.log(ev)
    if(ev.nativeEvent.data){
      addKey([...keys, ev.nativeEvent.data])
    }
  }

  function setRes(ev){
    if(ev.target.attributes.val)
      setResult([...result, ev.target.attributes.val.value])
  }
  
  return (    
    <div className='preRoot'> 
      <div className="customEdit">
        <label className="customEdit-label">
          Поле Ввода
        </label>
        <input className="customEdit-input" type='edit' onChange = {addComponent}></input>
      </div>
      <div className="keyBoard">
        {keys.map((item, i) => ( <Key key = {item+i} val={item} setRes = {setRes} />))}
      </div>
      <Result value = {result} ></Result>
    </div>
  )
  
} 

export default App;
