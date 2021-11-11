import { setUser } from '../storage';

export const login = (credentials) => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials)
  };

  return fetch('http://localhost:8083/auth/login', options)
    .then(res => res.json())
    .then((data) => setUser(data));
};

export const signup = (credentials) => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials)
  };

  return fetch('http://localhost:8083/auth/signup', options)
    .then(res => res.json())
    .then(data => setUser(data));
};
