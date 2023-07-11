import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      <MyForm user={{name:"teste",  email:"teste@teste.com", bio:"Descrição de teste", role: "Admin"}}/>
    </div>
  );
}

export default App;
