import { useState } from "react";

const ManageData = () => {
    let someData = 10;
    console.log(someData);

    const [number, setNumber] = useState(15);

  return (
    <div>
        <div>
            <p>Valor: {someData}</p>
            {/*Ao clicar o valor ira mudar de 10 para 15*/}
            <button onClick={() => (someData = 15)}>Mudar Variavel</button>
        </div>
        <div>
            <p>Valor: {number}</p>
            {/* Alterando o valor pelo setNumber */}
            <button onClick={() => setNumber(25)}>Mudar State</button>
        </div>
    </div>

  );
}

export default ManageData;