import React from 'react';
import { useStore } from '../stores/indexStore';

const storeContext = React.createContext(useStore);

export const UseStore = () => {
  const store = React.useContext(storeContext);
  if (!store) {
    // this is especially useful in TypeScript so you don't need to be checking for null all the time
    throw new Error('useStore must be used within a StoreProvider.');
  }
  return store;
};
