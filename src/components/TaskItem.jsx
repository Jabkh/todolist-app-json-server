import React from 'react';
import Button from 'react-bootstrap/Button';

const TaskItem = ({ task, onDelete, onUpdate }) => {
  const handleDelete = () => {
    onDelete(task.id);
  };

  const handleUpdate = () => {
    onUpdate({ ...task, completed: !task.completed });
    console.log(task);
  };

  return (
    <div>
      {task.title}
      <Button variant={task.completed ? 'warning' : 'success'} onClick={handleUpdate}>
        {task.completed ? 'À faire' : 'Fait'}
      </Button>
      <Button variant="secondary" onClick={handleUpdate}>
        Modifier
      </Button>
      <Button variant="danger" onClick={handleDelete}>
        Supprimer
      </Button>
      
    </div>
  );
};

export default TaskItem;