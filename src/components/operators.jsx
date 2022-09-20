import "../styles/app.css";

function Operators(props) {
  const operators = ['+', '-', '*', '/'];

  const updateItems = (e) => {
    props.handleUpdate(e.target.innerText);
  };
  const number = operators.map(function (item, index) {
    return (
      <div
        className="operator"
        key={new Date().getTime() + index}
        onClick={updateItems}
      >
        {item}
      </div>
    );
  });
  return <div className="operators">{number}</div>;
}
export default Operators;
