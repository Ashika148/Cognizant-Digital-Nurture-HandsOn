package com.library;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.library.service.BookService;

public class LibraryManagementApp {

    public static void main(String[] args) {

        // Load Spring context
        ApplicationContext context = 
            new ClassPathXmlApplicationContext("applicationContext.xml");

        // Get BookService bean
        BookService bookService = 
            (BookService) context.getBean("bookService");

        // Test the application
        bookService.getAllBooks();
        bookService.addBook("Spring in Action");
        bookService.addBook("Clean Code");

        System.out.println("Library Management App running successfully!");
    }
}