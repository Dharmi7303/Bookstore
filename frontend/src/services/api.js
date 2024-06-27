import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
});

export const getBooks = () => api.get('/books');
export const addBook = (bookData) => api.post('/books', bookData);

const apis = {
  getBooks,
  addBook,
};

export default apis;
