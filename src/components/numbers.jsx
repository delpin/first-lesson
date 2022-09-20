import "../styles/app.css";

function Numbers(props) {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const updateItems = (e) => {
    props.handleUpdate(e.target.innerText);
  };
  const number = numbers.map(function (item, index) {
    return (
      <div
        className="number"
        key={new Date().getTime() + index}
        onClick={updateItems}
      >
        {item}
      </div>
    );
  });
  return <div className="numbers">{number}</div>;
}
export default Numbers;
