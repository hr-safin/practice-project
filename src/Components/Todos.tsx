import { useTodos } from "../store/Todo";

const Todos = () => {
  const { todos } = useTodos();
  const filterData = todos;
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
            {
                todo.completed && (
                    <button onClick={() => handleDeletTodo(todo.id)} type="button">Delete</button>
                )
            }
          </li>
        );
      })}
    </ul>
  );
};

export default Todos;
