import axios from 'axios';

export const authInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

const setToken = token => {
  if (token) {
    return (authInstance.defaults.headers.authorization = `Bearer ${token}`);
  }
  authInstance.defaults.headers.authorization = '';
};

export const signup = async data => {
  const { data: result } = await authInstance.post('/users/signup', data);
  setToken(result.token);
  return result;
};

export const login = async userData => {
  const { data } = await authInstance.post('/users/login/', userData);
  setToken(data.token);
  return data;
};

export const logout = async token => {
  const { data } = await authInstance.post('/users/logout', token);
  setToken();
  return data;
};

export const getCurrent = async token => {
  try {
    setToken(token);
    const { data } = await authInstance.get('/users/current');
    return data;
  } catch (error) {
    setToken();
    throw error;
  }
};

export default authInstance;
