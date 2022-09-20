import Numbers from "./numbers";
import "../styles/app.css";
import History from "./history";
import { useState } from "react";
import Operators from "./operators";

function Calculator() {
  const initial = {
    result: "",
    timer: "",
    input: "",
    history: "",
    historyResult: "",
  };
  const [state, setState] = useState(initial);
  function updateInput(e) {
    setState((prevState) => ({
      ...prevState,
      input: [...state.input, [e]],
    }));
  }
  function result() {
    var time = performance.now();
    const str = state.input.join("");
    const res = String(eval(str));
    setState((prevState) => ({
      ...prevState,
      result: res,
      history: [...state.history, [str]],
      historyResult: [...state.historyResult, [res]],
    }));
    time = performance.now() - time;

    setState((prevState) => ({
      ...prevState,
      timer: [...state.timer, [time]],
    }));
  }
  function clearInputs() {
    setState((prevState) => ({
      ...prevState,
      input: "",
    }));
  }
  function handleHistoty(e) {
    setState((prevState) => ({
      ...prevState,
      input: [e],
    }));
  }
  return (
    <div className="calculator">
      <div className="body">
        <div className="body__input">{state.input}</div>
        <Operators handleUpdate={updateInput} />
        <Numbers handleUpdate={updateInput} />
        <div id="num2">{state.result}</div>

        <button onClick={result}>Посчитать</button>
        <button onClick={clearInputs}>Очистить инпут</button>
      </div>
      <div>
        <History history={state} handleUpdate={handleHistoty} />
      </div>
    </div>
  );
}

export default Calculator;
