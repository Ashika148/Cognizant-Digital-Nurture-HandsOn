package com.library.repository;

public class BookRepository {

    public void findAllBooks() {
        System.out.println("Fetching all books from repository...");
    }

    public void saveBook(String bookName) {
        System.out.println("Saving book: " + bookName);
    }
}
    

