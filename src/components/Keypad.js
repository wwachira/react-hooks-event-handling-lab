//onChange event handler triggered by input for obscurity
function Keypad (){
    return (
      <div>
        <input
          onChange={() => console.log("Entering password...")}
          type="password"
        ></input>
      </div>
    );
}

export default Keypad;