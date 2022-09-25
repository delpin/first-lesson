function Key(props) {
    /* console.log('create Key: ' + props.text) */
    return (
      <div className="myKey" val={props.val} onClick={props.setRes}>
          {props.val}     
      </div>
    );
  }
  
  export default Key;
  