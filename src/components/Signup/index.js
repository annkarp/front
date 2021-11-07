import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { signup } from '../../services/auth';
import './index.css';

export function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup({ username, email, password, role: 'worker' })
      .then(() => navigate('/dashboard'))
  }

  return (
    <div className='Signup'>
      <Form>
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Username" onChange={({target: {value}}) => setUsername(value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={({target: {value}}) => setEmail(value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={({target: {value}}) => setPassword(value)}/>
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Sign up
        </Button>
      </Form>
    </div>
  );
}
