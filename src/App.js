import "./App.css";
import { useState } from "react";

function App() {
  const [isCompleteScreen, setIsCompleteScreen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (title.trim() && description.trim()) {
      setTasks([
        ...tasks,
        {
          id: Date.now(),
          title,
          description,
          completed: false,
        },
      ]);
      setTitle("");
      setDescription("");
    }
  };

  const handleComplete = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const handleDelete = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <div className="todo-container">
        <h1>My to do lists</h1>

        <div className="todo-wrapper">
          <div className="input-section">
            <div className="todo-input-item">
              <label>Title</label>
              <input
                type="text"
                placeholder="ex: sport,.."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleAddTask();
                }}
              />
            </div>

            <div className="todo-input-item">
              <label>Description</label>
              <input
                type="text"
                placeholder="ex: play football,..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleAddTask();
                }}
              />
            </div>

            <div className="todo-input-item">
              <button className="primaryBt" onClick={handleAddTask}>
                Add
              </button>
            </div>
          </div>

          <div className="controls-section">
            <div className="btn-group">
              <button
                className={`secondBT ${!isCompleteScreen && "active"}`}
                onClick={() => setIsCompleteScreen(false)}
              >
                To do
              </button>
              <button
                className={`secondBT ${isCompleteScreen && "active"}`}
                onClick={() => setIsCompleteScreen(true)}
              >
                Completed
              </button>
            </div>
          </div>

          <div className="todo-list">
            {tasks
              .filter((task) => task.completed === isCompleteScreen)
              .map((task) => (
                <div className="todo-item" key={task.id}>
                  <div className="content">
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                  </div>
                  <div className="btn-group">
                    <button
                      className="primaryBt"
                      onClick={() => handleComplete(task.id)}
                    >
                      {isCompleteScreen ? "Undo" : "Complete"}
                    </button>
                    <button
                      className="primaryBt"
                      onClick={() => handleDelete(task.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
