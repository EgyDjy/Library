
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const OsisForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    address: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formName">
        <Form.Control
          type="text"
          placeholder="Masukkan nama"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="formGender">
        <Form.Label>Jenis Kelamin</Form.Label>
        <Form.Check
          type="radio"
          label="Laki-laki"
          name="gender"
          value="laki-laki"
          checked={formData.gender === 'laki-laki'}
          onChange={handleChange}
          required
        />
        <Form.Check
          type="radio"
          label="Perempuan"
          name="gender"
          value="perempuan"
          checked={formData.gender === 'perempuan'}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="formAddress">
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Masukkan alamat"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </Form.Group>
        <br/>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default OsisForm;
