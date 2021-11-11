 import { createContext } from 'react';

const StoreContext = createContext({
  session: null,
  setSession: () => {},
});

export default StoreContext;