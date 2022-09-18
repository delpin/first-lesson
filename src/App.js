import { useState } from "react";
import { ListKeyboard } from "./components/listKeyboard";
import Result from "./components/result";

function App() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  function updateResult(e) {
    setResult([...result, e.target.innerText]);
  }
  function updateValue(e) {
    setValue([...value, e.nativeEvent.data]);
  }
  return (
    <div>
      поле ввода:
      <input type="text" onChange={updateValue} />
      <ListKeyboard text={value} myClick={updateResult} />
      <Result text={result} />
    </div>
  );
}

export default App;
