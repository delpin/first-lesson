import "../styles/app.css";

function History(props) {
  const state = props.history;

  const updateItems = (item) => {
    console.log(item);
    props.handleUpdate(item);
  };
  if (!state.history.length) return;
  const test = state.history.map(function (item, index) {
    return (
      <li key={new Date().getTime() + index} onClick={() => updateItems(item)}>
        %{item} -% {state.historyResult[index]} -% {state.timer[index]}
      </li>
    );
  });
  return <ul className="history">{test}</ul>;
}
export default History;
