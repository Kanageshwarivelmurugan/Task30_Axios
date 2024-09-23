/*import React, { useState, useEffect } from 'react';

const Forms = ({ onSubmit, initialData }) => {
  const [user, setUser] = useState({ name: '', email: '' });

  useEffect(() => {
    if (initialData) {
      setUser(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(user);
    setUser({ name: '', email: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{initialData ? 'Edit User' : 'Add User'}</h2>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        type="email"
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <button  className='btn btn-primary' type="submit">{initialData ? 'Update' : 'Add'}</button>
    </form>
  );
};

export default Forms;*/

// src/components/UserForm.js
import React, { useState, useEffect } from 'react';

// Component for adding or editing user data
const Forms = ({ onSubmit, initialData }) => {
  const [user, setUser] = useState({ name: '', email: '', phone: '', website: '', address: { street: '', city: '', zipcode: '' }, company: { name: '' } });

  // Set user data if editing an existing user
  useEffect(() => {
    if (initialData) {
      setUser(initialData);
    }
  }, [initialData]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("address.") || name.startsWith("company.")) {
      const [prefix, field] = name.split('.');
      setUser({
        ...user,
        [prefix]: {
          ...user[prefix],
          [field]: value
        }
      });
    } else {
      setUser({ ...user, [name]: value });
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(user); // Call the onSubmit function with user data
    setUser({ name: '', email: '', phone: '', website: '', address: { street: '', city: '', zipcode: '' }, company: { name: '' } }); // Reset form fields
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <h2>{initialData ? 'Edit User' : 'Add User'}</h2>
      <div className="mb-3">
        <input type="text" name="name" value={user.name} onChange={handleChange} className="form-control" placeholder="Name" required />
      </div>
      <div className="mb-3">
        <input type="email" name="email" value={user.email} onChange={handleChange} className="form-control" placeholder="Email" required />
      </div>
      <div className="mb-3">
        <input type="text" name="phone" value={user.phone} onChange={handleChange} className="form-control" placeholder="Phone" />
      </div>
      <div className="mb-3">
        <input type="text" name="website" value={user.website} onChange={handleChange} className="form-control" placeholder="Website" />
      </div>
      <div className="mb-3">
        <input type="text" name="address.street" value={user.address.street} onChange={handleChange} className="form-control" placeholder="Street" />
      </div>
      <div className="mb-3">
        <input type="text" name="address.city" value={user.address.city} onChange={handleChange} className="form-control" placeholder="City" />
      </div>
      <div className="mb-3">
        <input type="text" name="address.zipcode" value={user.address.zipcode} onChange={handleChange} className="form-control" placeholder="Zipcode" />
      </div>
      <div className="mb-3">
        <input type="text" name="company.name" value={user.company.name} onChange={handleChange} className="form-control" placeholder="Company Name" />
      </div>
      <button type="submit" className="btn btn-primary">{initialData ? 'Update' : 'Add'}</button>
    </form>
  );
};

export default Forms;

