import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Fetch data from your local Node.js server
    axios.get('https://focus-path-api.vercel.app/api/tasks')
      .then(response => {
        setTasks(response.data);
      })
      .catch(error => {
        console.error("Error fetching tasks:", error);
      });
  }, []);

  return (
    <div className="dashboard">
      <h1>FocusPath Tasks</h1>
      <div className="task-list">
        {tasks.map(task => (
          <div key={task._id} className={`task-card ${task.priority}`}>
            <h3>{task.title}</h3>
            <p>{task.status}</p>
            <span className="badge">{task.priority}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;