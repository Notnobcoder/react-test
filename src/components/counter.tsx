import { Dispatch, SetStateAction } from "react";

type CounterProps = {
  title: string;
  count: number;
  setCount: Dispatch<SetStateAction<number>>
}
export function Counter({ title, count, setCount }: CounterProps) {
  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <h4>{title}</h4>
      <div>
        <button onClick={handleDecrement}>-</button>
        {count}
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
}
