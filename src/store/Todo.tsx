import { createContext, ReactNode, useContext, useState } from "react";


export type TodoProviderProps = {
    children : ReactNode
}

export type Todo = {
  id : string;
  task : string;
  completed : boolean;
  createdAt : Date
}

export type TodoContext = {
  todos : Todo[];
  handleTodo : (task : string) => void
}



export const todoContext = createContext<TodoContext | null>(null)

export const TodosProvider = ({children} : TodoProviderProps) => {
  
  const [todos, setTodos] = useState<Todo[]>([])
  const handleTodo = (task : string) => {
    setTodos((prev) => {
      const newTodos : Todo[] = [
        {
          id : Math.random().toString(),
          task : task,
          completed : false,
          createdAt : new Date()
        },
        ...prev
      ]
      console.log("my previous " + prev)
      console.log(newTodos)
      return newTodos
    })
  }
  return <todoContext.Provider value={{todos, handleTodo}}>
    {children}
  </todoContext.Provider>
}


//Consumer

export const useTodos = () => {
  const todosConsumer = useContext(todoContext)

  if(!todosConsumer){
    throw new Error("use todos used outside of provider")
  }

  return todosConsumer
}