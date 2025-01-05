import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="todo-container">
        <h1>My to do lists</h1>
        
        <div className="todo-wrapper">
          <div className="input-section">
            <div className="todo-input-item">
              <label>Title</label>
              <input type="text" placeholder="ex: sport,.." />
            </div>
            
            <div className="todo-input-item">
              <label>Description</label>
              <input type="text" placeholder="ex: play football,..." />
            </div>
            
            <div className="todo-input-item">
              <button className="primaryBt">Add</button>
            </div>
          </div>

          <div className="controls-section">
            <div className="btn-group">
              <button className="secondBT">To do</button>
              <button className="secondBT">Completed</button>
            </div>
          </div>

          <div className="todo-list">
            <div className="todo-item">
              <div className="content">
                <h3>Task title</h3>
                <p>Task description</p>
              </div>
              <div className="btn-group">
                <button className="primaryBt">Edit</button>
                <button className="primaryBt">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
