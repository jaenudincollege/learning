export default function App() {
  return <TodoList />;
}

function TodoList() {
  const todos = [
    { id: crypto.randomUUID(), task: "Clean the room" },
    { id: crypto.randomUUID(), task: "Learning web development" },
    { id: crypto.randomUUID(), task: "Buy the food" },
  ];
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.task}</li>
      ))}
    </ul>
  );
}
