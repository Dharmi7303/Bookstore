import './styles/main.css';
import React from 'react';
import BookList from './components/BookList';
import BookForm from './components/BookForm';

const App = () => {
  return (
    <div>
      <h1>Bookstore App</h1>
      <BookList />
      <BookForm />
    </div>
  );
};

export default App;
