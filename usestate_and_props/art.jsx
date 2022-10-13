import React, {useState} from "react";

function Identity(props) {
    return <h2>Main Identity: { props.name }</h2>;
}

function Moonknight() {

    const [initial, newname] = useState("Mark Spectre");
    return (
        <>
        <h1>{initial}</h1>
        <Identity name="Mark Spectre" />
        <button onClick={() => newname("Steven")}>2nd Identity</button><br /><br />
        <button onClick={() => newname("Jake Lockely")}>3rd Identity</button>
        </>
    );
    }
  
export default Moonknight;