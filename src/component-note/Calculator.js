 function Calculator(props) {
    return (
        <div className="result">
          <label className="result-label">
            Подсчет:
          </label>
          <label className="result-input">{props.value}</label>
        </div>
    );
  }  
  export default Calculator;
  