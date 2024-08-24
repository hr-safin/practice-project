import { createContext } from "react";


export const todoContext = createContext(null)

export const TodosProvider = ({children}) => {
  return <todoContext.Provider>
    {children}
  </todoContext.Provider>
}