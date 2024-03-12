import React, { useState } from 'react';
import './booking.css'
const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    startDate: '',
    endDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the form submission logic here
    console.log('Booking submitted:', formData);
    // Reset the form after submission
    setFormData({
      name: '',
      email: '',
      startDate: '',
      endDate: '',
    });
  };

  return (
    <div className='center'>
      <h1>Booking Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Start Date:
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          End Date:
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default Booking;
