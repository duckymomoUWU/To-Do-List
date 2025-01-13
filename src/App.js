// import logo from './whiteLogo.svg';
import "./App.css";
import { useState, useEffect } from "react";
import { MdDeleteForever } from "react-icons/md";
import { FaUndo } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

function App() {
  const [isCompleteScreen, setIsCompleteScreen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tasks, setTasks] = useState(() => {
    // Load tasks from localStorage when initializing state
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // Save to localStorage whenever tasks changes
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    if (title.trim() && description.trim()) {
      const newTask = {
        id: Date.now(),
        title,
        description,
        completed: false,
      };
      setTasks([...tasks, newTask]);
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
      <header id="navHead">
        {/* <img src={logo} alt="Logo" id="headLogo" /> */}
        {/* navbar  */}
        <ul>
          <div id="navBut">
            <button className="primaryBt">Login</button>
            <button className="primaryBt">Sign Up</button>
          </div>
        </ul>
      </header>
      {/* body */}
      <div className="todo-container">
        <div className="todo-wrapper">
          <h1>My to do lists</h1>
          <div className="input-section">
            <div className="todo-input-item">
              <label>Title</label>
              <input
                type="text"
                placeholder="ex: study,.."
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
                placeholder="ex: i will study at 5pm,..."
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
                    {isCompleteScreen ? (
                      <FaUndo
                        className="icon"
                        onClick={() => handleComplete(task.id)}
                      />
                    ) : (
                      <FaCheck
                        className="icon"
                        onClick={() => handleComplete(task.id)}
                      />
                    )}
                    <MdDeleteForever
                      className="icon"
                      onClick={() => handleDelete(task.id)}
                    />
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
