
function Result(props) {
  return (
    <div className="result">
      <label className="result-label">
        Результат:
      </label>
      <label className="result-input">{props.value}</label>
    </div>
  );
}

export default Result;
