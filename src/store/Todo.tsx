import { createContext, ReactNode, useContext, useState } from "react";


export type TodoProviderProps = {
  children: ReactNode;
};

export type Todo = {
  id: string;
  task: string;
  completed: boolean;
  createdAt: Date;
};

export type TodoContext = {
  todos: Todo[];
  handleTodo: (task: string) => void;
  toggleTodoAsCompleted: (id: string) => void;
  handleDeleteTodo: (id: string) => void;
};

export const todoContext = createContext<TodoContext | null>(null);

export const TodosProvider = ({ children }: TodoProviderProps) => {

  const [todos, setTodos] = useState<Todo[]>(() => {
    try {
      const newTodos = localStorage.getItem("todos") || "[]"
      return JSON.parse(newTodos) as Todo[]
    } catch (error) {
      console.log(error)
      return []
    }
  });

  const handleTodo = (task: string) => {

    setTodos((prev) => {
      const newTodos: Todo[] = [
        {
          id: Math.random().toString(),
          task: task,
          completed: false,
          createdAt: new Date(),
        },
        ...prev,
      ];
      console.log("my previous " + prev);
      console.log(newTodos);

      localStorage.setItem("todos", JSON.stringify(newTodos))
      return newTodos;
    });
  };

  // Mark Completed
  const toggleTodoAsCompleted = (id: string) => {
    setTodos((prev) => {
      const newTodos = prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }

        return todo;
      });
      localStorage.setItem("todos", JSON.stringify(newTodos))
      return newTodos;
    });
  };
  
  // Delete Implementation
  const handleDeleteTodo = (id: string) => {
    setTodos((prev) => {
      
      const  newTodos = prev.filter(filterTodo => filterTodo.id !== id)
      localStorage.setItem("todos", JSON.stringify(newTodos))
      return newTodos
      
    })
  };
  return (
    <todoContext.Provider
      value={{ todos, handleTodo, toggleTodoAsCompleted, handleDeleteTodo }}
    >
      {children}
    </todoContext.Provider>
  );
};

//Consumer

export const useTodos = () => {
  const todosConsumer = useContext(todoContext);

  if (!todosConsumer) {
    throw new Error("use todos used outside of provider");
  }

  return todosConsumer;
};
