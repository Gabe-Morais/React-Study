import React, { useState } from "react";

function ConditionalRender() {
  const [x] = useState(false);

  const [name, setName] = useState("João");

  return (
    <div>
      <h1>Isto será exibido?</h1>
      {/*Só ira exibir o elemento se a condição "x" for correta*/}
      {/* se for verdadeiro*/}
      {x && <p>Se x for true, sim!</p>}
      {/* se for falso*/}
      {!x && <p>Agora x é false!</p>}


      <h1>IF Ternário</h1>
      {/*  Condição    ?    se a condição for verdadeira : se for falsa */}
      {name === "João" ? (<div>O nome é João</div>) : (<div>O nome NÃO é João</div>)}
      <button onClick={() => setName("Lucas")}>Clica aqui! - Trocar para Lucas</button>
    </div>
  );
}

export default ConditionalRender;
