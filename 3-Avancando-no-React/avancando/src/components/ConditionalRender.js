import React, { useState } from "react";

function ConditionalRender() {
  const [x] = useState(false);

  const [name, setName] = useState("João");

  return (
    <div>
      <h1>Isto será exibido?</h1>
      {x && <p>Se x for true, sim!</p>}
      {!x && <p>Agora x é false!</p>}

      <h1>IF Ternário</h1>
      {name === "João" ? (
        <div>O nome é João</div>
      ) : (
        <div>Nome não encontrado!</div>
      )}
      <button onClick={() => setName("Lucas")}>Clica aqui!</button>
    </div>
  );
}

export default ConditionalRender;
