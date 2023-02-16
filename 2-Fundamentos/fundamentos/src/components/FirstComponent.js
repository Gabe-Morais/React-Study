import MyComponent from "./MyComponent";

const FirstComponent = () => {   //Criando o Componente
    return(
        <div>
            <h1>Meu Primeiro Componente</h1>    
            <p>Meu texto</p>
            <MyComponent/>
        </div>
        
    );
}
//exportando o Componente
export default FirstComponent;

