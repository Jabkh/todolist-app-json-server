import TodoModel from '../models/TodoModel';

const getAllTasks = async () => {
  try {
    const tasks = await TodoModel.getAll();
    return tasks;
  } catch (error) {
    console.error('Error getting tasks:', error);
    throw new Error('Failed to get tasks');
  }
};

const getTaskById = async (taskId) => {
  try {
    const task = await TodoModel.getById(taskId);
    return task;
  } catch (error) {
    console.error(`Error getting task with ID ${taskId}:`, error);
    throw new Error(`Failed to get task with ID ${taskId}`);
  }
};

const addTask = async (newTask) => {
  try {
    const addedTask = await TodoModel.add(newTask);
    return addedTask;
  } catch (error) {
    console.error('Error adding task:', error);
    throw new Error('Failed to add task');
  }
};

const updateTask = async (taskId, updatedTask) => {
  try {
    const updatedTaskData = await TodoModel.update(taskId, updatedTask);
    return updatedTaskData;
  } catch (error) {
    console.error('Error updating task:', error);
    throw new Error('Failed to update task');
  }
};

const deleteTask = async (taskId) => {
  try {
    const deletedTask = await TodoModel.delete(taskId);
    return deletedTask;
  } catch (error) {
    console.error('Error deleting task:', error);
    throw new Error('Failed to delete task');
  }
};

const TodoController = {
  getAllTasks,
  getTaskById,
  addTask,
  updateTask,
  deleteTask
};

export default TodoController;
