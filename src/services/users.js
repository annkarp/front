export const getAllUsers = (params) => {
  const options = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };

  return fetch('http://localhost:8083/users?' + new URLSearchParams(params), options)
    .then(res => res.json())
};
