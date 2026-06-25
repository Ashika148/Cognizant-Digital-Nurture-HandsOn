package com.bank;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class LoggingExample {

    private static final Logger logger = LoggerFactory.getLogger(LoggingExample.class);

    public static void main(String[] args) {

        // Error level - serious problems
        logger.error("This is an error message");

        // Warning level - potential issues
        logger.warn("This is a warning message");

        // Info level - general information
        logger.info("This is an info message");

        // Debug level - debugging details
        logger.debug("This is a debug message");

        System.out.println("Logging complete!");
    }
}
