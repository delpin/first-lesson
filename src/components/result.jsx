function Result(props) {
  /*  function parseInput(){

  } */
  return (
    <div>
      <div>Результат:{props.text}</div>
      <button onClick={props.clear}>Очистка</button>
    </div>
  );
}

export default Result;
