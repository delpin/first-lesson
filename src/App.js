
import './App.css'
import { useState } from 'react'
import Key from './component-note/Key'
import Result from './component-note/Result'

function App() {

  let [keys, addKey] = useState([])
  const [result, setResult] = useState([])

  Array.prototype.clear = function() {
    this.length = 0    
  }
  
  function addComponent(ev) {     
    if(ev.nativeEvent.data){
      addKey([...keys, ev.nativeEvent.data])
    }else{
      //Бред
      if(ev.nativeEvent.inputType === 'deleteContentBackward' || ev.nativeEvent.inputType === 'deleteContentForward'){
        //keys.clear()
        setResult([])
        addKey(ev.currentTarget.value.split(''))
      }      
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
        {keys.map((item, i) => (<Key key = {item+i} val={item} setRes = {setRes}/>))}
      </div>
      <Result value = {result}></Result>
    </div>
  )
  
} 

export default App;
