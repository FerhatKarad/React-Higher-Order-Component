import './App.css';
import SearchUsers from './components/UsersList';
import SearchTodos from './components/TodoList';


function App() {
  return (
    <div>
      <h3>Higher Order Component</h3>
      <div className='app'>
        <div> <SearchUsers /></div>
        <div><SearchTodos /></div>
      </div>
    </div>
  );
}

export default App;
