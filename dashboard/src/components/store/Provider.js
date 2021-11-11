import React from 'react';
import Context from './Context';
import useStorage from '../../utils/useStorage';

const StoreProvider = ({ children }) => {
  const [session, setSession] = useStorage('session');

  return (
    <Context.Provider
      value={{
        session,
        setSession,
      }}
    >
      {children}
    </Context.Provider>
  )
}


export default StoreProvider;