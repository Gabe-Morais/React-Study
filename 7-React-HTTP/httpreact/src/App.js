import "./App.css";

import { useState, useEffect } from "react";

// 4 - custom hook
import { useFetch } from "./hooks/useFetch";
const url = "http://localhost:3000/products";

function App() {
  const [products, setProducts] = useState([]);

  // 4 - custom hook
  const { data: items, httpConfig, loading, error } = useFetch(url);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  //1 -resgatando dados
  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await fetch(url);

  //     const data = await res.json();

  //     setProducts(data);
  //   }

  //   fetchData();
  // }, []);

  // 2 - add produtos
  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
    };

    // const res = await fetch(url, {

    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(product),
    // });

    // // 3 - carregamento dinamico
    // const addedProducts = await res.json();
    // setProducts((prevProducts) => [...prevProducts, addedProducts]);

    // 5 - refatorando POST
    httpConfig(product, "POST");

    // clear the inputs
    setName("");
    setPrice("");
  };

  const handleDelete = async (id) => {
    const productId = `${url}/${id}`;
    httpConfig(productId, "DELETE");
  };

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>

      {loading && <p>Carregando dados...</p>}
      {error && <p>{error}</p>}
      {!error && (
        <ul>
          {items &&
            items.map((product) => (
              <li key={product.id}>
                {product.name} - R$: {product.price}{" "}
                <button onClick={() => handleDelete(product.id)}>
                  Excluir
                </button>
              </li>
            ))}
        </ul>
      )}

      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Preço:
            <input
              type="number"
              value={price}
              name="price"
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          {/*Desativa o botao acaso o loading esteja ativo*/}
          {loading && <input type="submit" disabled value="Aguarde" />}
          {!loading && <input type="submit" value="Criar" />}
        </form>
      </div>
    </div>
  );
}

export default App;
