// import React, { createContext, useState, useContext } from 'react';

// const TodoContext = createContext();

// export const TodoProvider = ({ children }) => {
//   const [todos, setTodos] = useState([]);

//   const addTodo = (newTodo) => {
//     setTodos([...todos, newTodo]);
//   };

//   const updateTodo = (updatedTodo) => {
//     setTodos(todos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo)));
//   };

//   const deleteTodo = (id) => {
//     setTodos(todos.filter((todo) => todo.id !== id));
//   };

//   return (
//     <TodoContext.Provider value={{ todos, addTodo, updateTodo, deleteTodo }}>
//       {children}
//     </TodoContext.Provider>
//   );
// };

// export default TodoContext;
