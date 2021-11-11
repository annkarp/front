import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { login } from '../../services/auth';
import './index.css';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  let location = useLocation();

  console.log(location.state?.from?.pathname)
  console.log(location)

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email, password })
      .then(() => navigate('/dashboard'))
  }

  return (
    <div className='Login'>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={({target: {value}}) => setEmail(value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={({target: {value}}) => setPassword(value)}/>
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Log in
        </Button>
      </Form>
    </div>
  );
}
