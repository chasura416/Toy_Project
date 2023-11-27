import TodoItem from "./todoItem";

interface TodoListProps {
  todos: string[];
}

const TodoList = ({todos}: TodoListProps) => {
  return (
    <div>
      {todos.map((todo, index) => (
        <TodoItem key={index} text={todo} />
      ))}
    </div>
  )
}

export default TodoList;