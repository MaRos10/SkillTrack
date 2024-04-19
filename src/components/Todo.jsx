import { useState } from "react";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  return (
    <section>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        className="addTodo"
        onClick={() => {
          setTodos([...todos, todo]);
          setTodo("");
        }}
      >
        Lägg till
      </button>

      <ul className="todoUl">
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </section>
  );
}
