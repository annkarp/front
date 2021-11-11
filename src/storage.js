import { USER_STORAGE_ID } from './constants';

export const setUser = user => {
  localStorage.setItem(USER_STORAGE_ID, JSON.stringify(user));
  return user
};

export const getUser = () => JSON.parse(localStorage.getItem(USER_STORAGE_ID));

export const removeUser = () => localStorage.removeItem(USER_STORAGE_ID);
