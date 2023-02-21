import { useState } from 'react';
import './App.css';

import City from './assets/city.jpg';
import CarDetails from './components/CarDetails';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';

// caso seja necessario utilizar em vario lugarem e venha a trocar o caminho, só precisa trocar em um unico lugar

function App() {
  const name = "Julio";
  const [userName] = useState("Matheus");

  return (
    <div className="App">
    <h1>Avançando e m React</h1>
      
      <div>
          <img src="/img1.jpeg" alt="Paisagem"/>
      </div>
        
      <div>
        {/* Imagem em public */}
        <img src="/img1.jpg" alt="Paisagem" />

        {/* Imagem em assets */}
        <img src={City} alt="Cidade" />
      </div>
      <ManageData/>
      <ListRender/>
      <ConditionalRender/>
      <br/>
      <br/>
      {/* props */}
      <ShowUserName name={userName}/>
      {/* destructuring */}
      <CarDetails brand="VW" km={100000} color="Azul"/>

    </div>
  );
}

export default App;
