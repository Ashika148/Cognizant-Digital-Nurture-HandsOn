package com.library.service;

import com.library.repository.BookRepository;

public class BookService {

    private BookRepository bookRepository;

    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void getAllBooks() {
        System.out.println("BookService: Getting all books...");
        bookRepository.findAllBooks();
    }

    public void addBook(String bookName) {
        System.out.println("BookService: Adding book - " + bookName);
        bookRepository.saveBook(bookName);
    }
}
