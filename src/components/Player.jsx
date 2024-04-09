import { useState, useRef } from "react";

export default function Player() {
  // lets you reference a value that’s not needed for rendering. Does not re-render Component
  // DON'T READ OR WRITE DURING RENDERING
  const inputRef = useRef()
  
  const [playerName, setPlayerName] = useState("");

  const handleClick = () => {
      setPlayerName(inputRef.current.value); 
      inputRef.current.value = "";
  }

  return (
    <section id="player">
      <h2>Welcome {playerName || 'unknown entity'}</h2>
      <p>
        <input ref={inputRef} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
