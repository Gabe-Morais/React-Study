// styles / css
import './App.css';

//componentes
import FirstComponent from './components/FirstComponent'; //Importando o Componente recem criado
import TemplateExpressions from './components/TemplateExpressions';


function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <FirstComponent/>
      <TemplateExpressions/>
      
    </div>
  );
}

export default App;
