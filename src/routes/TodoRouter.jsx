import React from 'react';
import {Route, Routes } from 'react-router-dom';
import TaskList from '../components/TaskList';
import Navbar from '../components/Navbar';

const TodoRouter = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<TaskList />} />
    </Routes>
    </>
  );
};

export default TodoRouter;