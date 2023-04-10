import { useState } from 'react';
import './App.css';

import City from './assets/city.jpg';
import CarDetails from './components/CarDetails';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import Fragment  from "./components/Fragment";
import Container from './components/Container';

// caso seja necessario utilizar em vario lugarem e venha a trocar o caminho, só precisa trocar em um unico lugar

function App() {
  //const name = "Julio";
  const [userName] = useState("Matheus");
  
  const cars=[
    {id: 1, brand:"Ferrari", color:"Amarela", newCar: true, km: 0},
    {id: 2, brand:"KIA", color:"Branco", newCar: false, km: 2312},
    {id: 3, brand:"Renault", color:"Azul", newCar: false, km: 908},
  ]

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

      {/* Renderiza uma lista */}
      <ListRender/>

      <ConditionalRender/>
      <br/>
      <br/>
      {/* props */}
      <ShowUserName name={userName}/>

      {/* destructuring */}
      <CarDetails brand="VW" km={100000} color="Azul" newCar={false}/>

      {/*Reaproveitando*/}
      <CarDetails brand="Fiat" color="Vermelha" km={2000} newCar={false}/>
      <CarDetails brand="Ford" color="Preto" km={0} newCar={true}/>

       {/* Loop em array de objetos */}
      {cars.map((car) => (
         <CarDetails 
         brand={car.brand}
         color={car.color}
         km={car.km}
         newCar={car.newCar}/>
      ))}
    {/* Fragment */}
    <Fragment propFragment="Teste"/>

    {/* Children*/}
    <Container myValue="Testing">
    <p>E este é o conteúdo</p>
    </Container>

    </div>
  );
}

export default App;
