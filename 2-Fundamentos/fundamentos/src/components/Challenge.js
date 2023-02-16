const Challenge = () => {
    const v1 = 9;
    const v2 = 13;

    return(
        <div>
            <h1>Valor 1: {v1}</h1>
            <h1>valor 2: {v2}</h1>
            <button onClick={() => console.log(v1 + v2)}>Somar Valores</button>
        </div>
    );
}

export default Challenge;