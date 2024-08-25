import { useSearchParams } from "react-router-dom";
import { useTodos } from "../store/Todo";

const Todos = () => {
  const { todos, toggleTodoAsCompleted, handleDeleteTodo } = useTodos();

  const [searchParams] = useSearchParams();
  const todosData = searchParams.get("todos")
  console.log(todosData)
  
  let filterData = todos;


  if(todosData === "active"){
    filterData = filterData.filter((task) => !task.completed)
  }

  if(todosData === "completed"){
    filterData = filterData.filter(task => task.completed)
  }



  return (
    <ul>
      {filterData.map((todo) => {
        return (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              name=""
              onChange={() => toggleTodoAsCompleted(todo.id)}
              id={`todo-${todo.id}`}
            />
            <label htmlFor={`todo-${todo.id}`}>{todo.task}</label>
            {todo.completed && (
              <button onClick={() => handleDeleteTodo(todo.id)} type="button">
                Delete
              </button>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default Todos;
