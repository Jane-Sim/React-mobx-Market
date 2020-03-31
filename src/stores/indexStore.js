import { MarketStore } from './market';
import { CounterStore } from './counter';

export function useStore() {
  return { MarketStore, CounterStore };
}

export default useStore;
