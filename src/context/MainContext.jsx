import { createContext } from 'react';

const MainContext = createContext();

export const MainProvider = ({ children }) => {
  return <MainContext.Provider value={{}}>{children}</MainContext.Provider>;
};

export default MainContext;
