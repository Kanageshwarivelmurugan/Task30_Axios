// src/components/UserList.js
import React from 'react';

// Component to display a list of users with full details in neatly organized cards
const List = ({ users, onEdit, onDelete }) => {
  return (
    <div className="row">
      {users.map(user => (
        <div key={user.id} className="col-lg-4 col-md-6 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">{user.name}</h5>
              <p className="card-text"><strong>Email:</strong> {user.email}</p>
              <p className="card-text"><strong>Phone:</strong> {user.phone}</p>
              <p className="card-text"><strong>Website:</strong> <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a></p>
              <p className="card-text">
                <strong>Address:</strong> {user.address.street}, {user.address.city}, {user.address.zipcode}
              </p>
              <p className="card-text"><strong>Company:</strong> {user.company.name}</p>
              <div className="d-flex justify-content-between">
                <button className="btn btn-warning btn-sm" onClick={() => onEdit(user)}>Edit</button>
                <button className="btn btn-danger btn-sm" onClick={() => onDelete(user.id)}>Delete</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
