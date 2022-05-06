import HOC from "./HOC";

const TodoList = ({ data }) => {
  let renderTodos = data.map((todo) => {
    console.log(todo.userId)
    return (
      <div key={todo.userId}>
        <p>
          <strong>{todo.title}</strong>
        </p>
      </div>
    );
  });
  return (
    <div>
      <div>{renderTodos}</div>
    </div>
  );
};

const SearchTodos = HOC(TodoList, "todos");

export default SearchTodos;