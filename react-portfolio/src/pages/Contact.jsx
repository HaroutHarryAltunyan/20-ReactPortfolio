import React, { useState } from 'react';

function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });

    // Validation
    if (!value.trim()) {
      setErrors((prev) => ({ ...prev, [name]: `${name} is required` }));
    } else {
      setErrors((prev) => ({ ...prev, [name]: '' }));
      if (name === 'email') {
        // Simple email regex
        const validEmail = /^\S+@\S+\.\S+$/.test(value);
        if (!validEmail) {
          setErrors((prev) => ({
            ...prev,
            email: 'Email is invalid'
          }));
        }
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally handle form submission to a back end
    console.log('Submitted form:', formState);
  };

  return (
    <section>
      <h2>Contact</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formState.name}
            onChange={handleChange}
            onBlur={handleChange}
          />
          {errors.name && <p className="error-text">{errors.name}</p>}
        </div>
        
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formState.email}
            onChange={handleChange}
            onBlur={handleChange}
          />
          {errors.email && <p className="error-text">{errors.email}</p>}
        </div>
        
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            id="message"
            value={formState.message}
            onChange={handleChange}
            onBlur={handleChange}
          />
          {errors.message && <p className="error-text">{errors.message}</p>}
        </div>
        
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;