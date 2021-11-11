export const getAllTasks = () => {
  const options = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };

  return fetch('http://localhost:8084/tasks', options)
    .then(res => res.json())
};

export const createTask = (data) => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  };

  return fetch('http://localhost:8084/tasks', options)
    .then(res => res.json())
};

export const getMyTasks = (id) => {
  const options = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };

  return fetch('http://localhost:8084/tasks?' + new URLSearchParams({userId: id}), options)
    .then(res => res.json())
};

export const finishMyTask = (id) => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  };

  return fetch(`http://localhost:8084/tasks/${id}`, options)
    .then(res => res.json())
};

export const reassignTasks = () => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  };

  return fetch(`http://localhost:8084/tasks/reassign`, options)
    .then(res => res.json())
};
