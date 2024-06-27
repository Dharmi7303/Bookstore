const express = require('express');
const router = express.Router();
const booksController = require('../controllers/booksController');

// Get all books
router.get('/', booksController.getAllBooks);

// Get a single book
router.get('/:id', booksController.getBook);

// Create a new book
router.post('/', booksController.createBook);

// Update a book
router.put('/:id', booksController.updateBook);

// Delete a book
router.delete('/:id', booksController.deleteBook);

module.exports = router;