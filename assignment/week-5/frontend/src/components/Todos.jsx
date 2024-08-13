export function Todos({ todos }) {
  console.log(todos);
  return (
    <div>
      {todos.map((todo) => {
        return (
          <div className="todos">
            <b>{todo.title}</b>
            <p>{todo.description}</p>
            <button>{todo.Completed ? 'Completed' : 'Done'}</button>
          </div>
        );
      })}
    </div>
  );
}
