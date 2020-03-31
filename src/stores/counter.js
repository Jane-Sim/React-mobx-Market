import { observable } from 'mobx';

export const CounterStore = observable({
  number: 0,
  increase() {
    this.number++;
  },
  decrease() {
    this.number--;
  },
});
