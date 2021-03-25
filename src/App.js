import React, { Component } from "react";
import { UsersList } from './UsersList';
import { NewUserForm } from './NewUserForm';

import "./style.css";

const usersFromServer = [
  { id: 1, name: 'Yura' },
  { id: 2, name: 'Lesya' },
  { id: 3, name: 'Oleg' },
]

class App extends Component {
  state = {
    users: usersFromServer,
  };

  addUser = (name) => {
    this.setState(state =>{
      const newUser = {
        id: this.state.users.length + 1,
        name,
      };

      return {
        users: [...state.users, newUser],
      }
    })
  };

  deleteUser = (userId) => {
    this.setState(state => ({
      users: state.users.filter(user => user.id !== userId),
    }));
  };

  renameUser = (userId, name ) => {
    this.setState(state => ({
      users: state.users.map(user => {
        if (user.id !== userId) {
          return user;
        }

        return { ...user, name };
      }), 
    }));
  };

  render() {
    return (
      <div>
        <h1>Words list</h1>

        <NewUserForm onAdd={this.addUser} />

        <UsersList
          users={this.state.users}
          onDelete={this.deleteUser}
          onRename={this.renameUser}
        />
      </div>
    )
  }
}

export default App;