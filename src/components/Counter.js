import React, { useCallback } from 'react';
import { useStore } from '../stores/indexStore';
import { useObserver } from 'mobx-react';

const Counter = () => {
  const { CounterStore } = useStore();

  const onIncrease = useCallback(() => {
    CounterStore.increase();
  }, [CounterStore]);

  const onDecrease = useCallback(() => {
    CounterStore.decrease();
  }, [CounterStore]);

  return useObserver(() => (
    <div>
      <h1>{!CounterStore.number ? '' : CounterStore.number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  ));
};

export default Counter;
