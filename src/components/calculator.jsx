import Numbers from "./numbers";
import "../styles/app.css";
import History from "./history";
import { useState } from "react";
import Operators from "./operators";

function Calculator() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState("");
  const [history, setHistory] = useState("");
  function updateInput(e) {
    setInput([...input, e]);
  }
  function result() {
    const str = input.join("");
    setResults(String(eval(str)));
    setHistory([...history, str]);
  }
  function clearInputs() {
    setInput("");
  }
  function handleHistoty(e) {

    //Вот тут не понял почему не срабатываете код
    /* 
        clearInputs();
        setInput(e);
    */
    setInput(e.split(""));
  }
  return (
    <div className="calculator">
      <div className="body">
        <div className="body__input">{input}</div>
        <Operators handleUpdate={updateInput} />
        <Numbers handleUpdate={updateInput} />
        <div id="num2">{results}</div>

        <button onClick={result}>Посчитать</button>
        <button onClick={clearInputs}>Очистить инпут</button>
      </div>
      <div>
        <History history={history} handleUpdate={handleHistoty} />
      </div>
    </div>
  );
}

export default Calculator;
