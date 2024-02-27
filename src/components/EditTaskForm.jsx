import React, { useState } from 'react';

const EditTaskForm = ({ task, onUpdate }) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate({ ...task, title, description });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <br/>
      <input type="text" value={description} onChange={(e) => setTitle(e.target.value)} />
      <br/>
      <button type="submit">Enregistrer</button>
    </form>
  );
};

export default EditTaskForm;
