import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import User from './User';
import Forms from './Forms';
import './App.css'

const API_URL = 'https://jsonplaceholder.typicode.com/users';

const App = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await axios.get(API_URL);
    setUsers(response.data);
  };

  const addUser = async (user) => {
    const response = await axios.post(API_URL, user);
    setUsers([...users, response.data]);
  };

  const updateUser = async (user) => {
    const response = await axios.put(`${API_URL}/${user.id}`, user);
    setUsers(users.map(u => (u.id === user.id ? response.data : u)));
    setSelectedUser(null);
  };

  const deleteUser = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div>
      <h1>User Management</h1>
      <Forms onSubmit={selectedUser ? updateUser : addUser} initialData={selectedUser} />
      <User users={users} onEdit={setSelectedUser} onDelete={deleteUser} />
    </div>
  );
};

export default App;
