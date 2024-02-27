import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import EditTaskForm from './components/EditTaskForm';
import TaskController from './controllers/TaskController';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);

  // Chargement initial des tâches depuis le serveur
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const tasksData = await TaskController.getAllTasks();
        setTasks(tasksData);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };
    fetchTasks();
  }, []);

  // Fonction pour ajouter une tâche
  const addTask = async (newTask) => {
    try {
      const addedTask = await TaskController.addTask(newTask);
      setTasks([...tasks, addedTask]);
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  // Fonction pour mettre à jour une tâche
  const updateTask = async (updatedTask) => {
    try {
      const updatedTaskData = await TaskController.updateTask(updatedTask.id, updatedTask);
      setTasks(tasks.map(task => (task.id === updatedTaskData.id ? updatedTaskData : task)));
      setSelectedTask(null);
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  // Fonction pour supprimer une tâche
  const deleteTask = async (taskId) => {
    try {
      await TaskController.deleteTask(taskId);
      setTasks(tasks.filter(task => task.id !== taskId));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  // Fonction pour sélectionner une tâche à modifier
  const selectTask = (task) => {
    setSelectedTask(task);
  };

  return (
    <div>
      <h1>Todo App</h1>
      <TaskForm onSubmit={addTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} onUpdate={selectTask} />
      {selectedTask && <EditTaskForm task={selectedTask} onUpdate={updateTask} />}
    </div>
  );
};

export default App;
