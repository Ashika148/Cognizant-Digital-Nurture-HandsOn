package com.bank;
import org.junit.After;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.fail;
import org.junit.Before;
import org.junit.Test;

public class BankAccountTest {

    private BankAccount account;

    // Setup - runs BEFORE every test
    @Before
    public void setUp() {
        System.out.println("Setting up test...");
        account = new BankAccount("Alice", 1000.0);
    }

    // Teardown - runs AFTER every test
    @After
    public void tearDown() {
        System.out.println("Cleaning up after test...");
        account = null;
    }

    @Test
    public void testDeposit() {
        // Arrange
        double depositAmount = 500.0;

        // Act
        account.deposit(depositAmount);

        // Assert
        assertEquals(1500.0, account.getBalance(), 0.01);
        System.out.println("testDeposit passed!");
    }

    @Test
    public void testWithdraw() {
        // Arrange
        double withdrawAmount = 200.0;

        // Act
        account.withdraw(withdrawAmount);

        // Assert
        assertEquals(800.0, account.getBalance(), 0.01);
        System.out.println("testWithdraw passed!");
    }

    @Test
    public void testInsufficientBalance() {
        // Arrange
        double withdrawAmount = 2000.0;

        // Act & Assert
        try {
            account.withdraw(withdrawAmount);
            fail("Expected IllegalArgumentException!");
        } catch (IllegalArgumentException e) {
            assertEquals("Insufficient balance!", e.getMessage());
            System.out.println("testInsufficientBalance passed!");
        }
    }
}
