import React from 'react';

export const UsersList = ({ users, onDelete, onRename }) => (
  <ul>
    {users.map((user) => (
      <li key={user.id}>
        {user.name}

        <input
          type="text"
          value={user.name}
          onChange={(event) => onRename(user.id, event.target.value)}
        />

        <button
          onClick={() => onDelete(user.id)}
        >
          X
        </button>
      </li>
    ))}
  </ul>
);
