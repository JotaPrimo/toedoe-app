import axios from "axios";
import api from "./api";

export const csrfCookie = () => api.get('/sanctum/csrf-cookie')

export const login = (credentials) => axios.post('/auth/login', credentials);

export const register = (user) => axios.post('/auth/register', user);

export const logout = () => axios.post('/auth/logout');

export const getUser = () => axios.get('/api/user');