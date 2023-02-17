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

    setUsers((prevUsers) => {
      return prevUsers.filter((user) => randomNumber !== user.id);
    });
  };

  return (
    <div>
      {/* render sem key primeiramente */}
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
      <button onClick={deleteRandom}>Delete random user</button>
    </div>
  );
};


export default ListRender;
