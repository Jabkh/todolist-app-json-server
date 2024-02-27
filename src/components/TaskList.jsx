import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onDelete, onUpdate }) => {
  return (
    <div>
      <h2>Liste des tâches</h2>
      <ul>
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} onDelete={onDelete} onUpdate={onUpdate} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
