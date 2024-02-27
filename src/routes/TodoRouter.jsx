import React from 'react';
import {Route, Routes } from 'react-router-dom';
import TaskList from '../components/TaskList';
import Navbar from '../components/Navbar';
// import TaskDetail from '../components/TaskDetail';

const TodoRouter = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<TaskList />} />
      {/* <Route path="/tasks/:id" element={<TaskDetail/>} /> */}
    </Routes>
    </>
  );
};

export default TodoRouter;