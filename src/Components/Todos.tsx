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
    <ul className=" pt-7 flex items-center flex-col justify-around max-w-3xl">
      {filterData.map((todo) => {
        return (
          <li key={todo.id}>
            <input
              className="mr-1 text-lg"
              type="checkbox"
              checked={todo.completed}
              name=""
              onChange={() => toggleTodoAsCompleted(todo.id)}
              id={`todo-${todo.id}`}
            />
            <label className="text-lg" htmlFor={`todo-${todo.id}`}>{todo.task}</label>
            {todo.completed && (
              <button className=" px-4 py-2 rounded-md ml-10 text-white bg-red-500" onClick={() => handleDeleteTodo(todo.id)} type="button">
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
