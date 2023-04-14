import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Gabriel", "João", "Lucas"]);
  const [users, setUsers] = useState([
    { id: 1, name: "Gabriel", age: 20 },
    { id: 2, name: "João", age: 53 },
    { id: 3, name: "Lucas", age: 12 },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);
    // eslint-disable-next-line
    {/* Pega o valor anterior de um dado */}
    setUsers((prevUsers) => {
      return prevUsers.filter((user) => randomNumber !== user.id);
    });
  };

  return (
    <div>
      {/* render primeiramente utilizando o index(indice) do map como key */}

      {/* Utilizar indice como key é uma má pratica, porque caso delete alguma informação outro
       dado passa a ter a key do dado deletado, exmeplo:
      se eu deletar o "João" que tem o indice de 1, o "Lucas" ira pegar o indice de 1 agora */}
      <ul> 
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age} anos
          </li>
        ))}
      </ul>
      {/* Deleta um usuario aleatorio utilizando o "Math.random" */}
      <button onClick={deleteRandom}>Delete random user</button>
    </div>
  );
};


export default ListRender;
