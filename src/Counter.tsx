import CounterNested from "./CounterNested";
import { memo } from "react";
type CounterProps = {
  counter: number;
};

export const Counter = memo((props: CounterProps) => {
  return (
    <div>
      The current counter value: {props.counter}
      <CounterNested counter={props.counter}></CounterNested>
    </div>
  );
});
