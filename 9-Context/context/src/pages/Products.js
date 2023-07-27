import { useCounterContext } from "../hooks/useCounterContext";

import ChangeCounter from "../components/ChangeCounter";

const Products = () => {
  const { counter } = useCounterContext();

  return (
    <div>
      <h1>Produtos</h1>
      <p>Valor do contador: {counter}</p>
      {/* changing context value */}
      <ChangeCounter />
    </div>
  );
};

export default Products;
