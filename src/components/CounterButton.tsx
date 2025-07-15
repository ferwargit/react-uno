import { useState } from "react";

const CounterButton = () => {
  const [counter, setCounter] = useState(0);

  const handleClickIncrement = () => {
    setCounter(counter + 1);
  };

  return <button onClick={handleClickIncrement}>Counter {counter}</button>;
};
export default CounterButton;
