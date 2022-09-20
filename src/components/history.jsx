import "../styles/app.css";

function History(props) {
  const history = props.history;
  if (!history?.length) return "";

  const updateItems = (e) => {
    props.handleUpdate(e.target.innerText);
  };
  const test = history.map(function (item, index) {
    return (
      <li key={new Date().getTime() + index} onClick={updateItems}>
        {item}
      </li>
    );
  });
  return <ul>{test}</ul>;
}
export default History;
