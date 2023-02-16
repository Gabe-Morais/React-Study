import './App.css';

import City from './assets/city.jpg';
// caso seja necessario utilizar em vario lugarem e venha a trocar o caminho, só precisa trocar em um unico lugar

function App() {
  return (
    <div className="App">
    <h1>Avançando em React</h1>
      
      <div>
          <img src="/img1.jpeg" alt="Paisagem"/>
      </div>
      
      <div>
        {/* Imagem em public */}
        <img src="/img1.jpg" alt="Paisagem" />

        {/* Imagem em assets */}
        <img src={City} alt="Cidade" />
      </div>

    </div>
  );
}

export default App;
