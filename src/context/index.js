import React from 'react';
import { useStore } from '../stores/indexStore';
import { useLocalStore } from 'mobx-react';

const storeContext = React.createContext(useStore);

export const StoreProvider = children => {
  const store = useLocalStore(() => ({
    bugs: ['Centipede'],
    addBug: bug => {
      store.bugs.push(bug);
    },
    get bugsCount() {
      return store.bugs.length;
    },
  }));

  return (
    <storeContext.Provider value={store}>{children}</storeContext.Provider>
  );
};

export const UseStore = () => {
  const store = React.useContext(storeContext);
  if (!store) {
    // this is especially useful in TypeScript so you don't need to be checking for null all the time
    throw new Error('useStore must be used within a StoreProvider.');
  }
  return store;
};
