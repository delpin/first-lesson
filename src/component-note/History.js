
function History(props) {
  return (
    <div className="history">
      <label className="history-input" val={props.val} onClick ={props.setRes}>{props.history}</label>
    </div>
  );
}

export default History;
