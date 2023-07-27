import { useCounterContext } from "../hooks/useCounterContext";

import { useTitleColorContext } from "../hooks/useTitleColorContext";

import ChangeCounter from "../components/ChangeCounter";

const About = () => {
  const { counter } = useCounterContext();

  const { color } = useTitleColorContext();

  return (
    <div>
      <h1 style={{ color: color }}>Sobre</h1>
      <p>Valor do contador: {counter}</p>
      {/* changing context value */}
      <ChangeCounter />
    </div>
  );
};

export default About;
