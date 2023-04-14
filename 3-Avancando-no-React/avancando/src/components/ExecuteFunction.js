const ExecuteFunction = ({myFunction}) => {
    return <div>
        {/*Sem "()" para nao executar ao carregar o codigo somente no click
         */}
        <button onClick={myFunction}>Clique aqui para executar a função</button>
    </div>
};

export default ExecuteFunction;