import { interceptor } from './index';
import { setUser } from '../storage';

export const login = (credentials) => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials)
  };

  return fetch('http://localhost:8083/auth/login', options)
    .then(res => res.json())
    .then(({ token, ...user}) => {
      setUser(user);
      interceptor(token);
    });
};

export const signup = (credentials) => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials)
  };

  return fetch('http://localhost:8083/auth/signup', options)
    .then(res => res.json())
    .then(({ token, ...user}) => {
      setUser(user);
      interceptor(token);
    });
};

export const verify = () => {
  const options = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };

  fetch('http://localhost:8083/auth/verify', options)
    .then(res => res.json())
    .then(res => console.log(res))
};
