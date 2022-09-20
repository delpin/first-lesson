import { useState } from "react";
import Calculator from "./components/calculator";
import { ListKeyboard } from "./components/listKeyboard";
import Result from "./components/result";

function App() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  function updateResult(e) {
    setResult([...result, e.target.innerText]);
  }
  function updateValue(e) {
    setValue(e.split(""));
  }

  const clearResult = () => {
    setResult("");
  };

  return (
    <div>
      поле ввода:
      <input
        type="text"
        onChange={(event) => updateValue(event.target.value)}
      />
      <ListKeyboard text={value} myClick={updateResult} />
      <Result text={result} clear={clearResult} />
      <Calculator />
    </div>
  );
}

export default App;
