package com.bank;

import org.junit.Test;
import org.junit.Before;
import static org.junit.Assert.*;

public class AppTest {

    private Calculator calculator;

    @Before
    public void setUp() {
        calculator = new Calculator();
    }

    @Test
    public void testAddition() {
        assertEquals(10, calculator.add(4, 6));
    }

    @Test
    public void testSubtraction() {
        assertEquals(4, calculator.subtract(10, 6));
    }

    @Test
    public void testMultiplication() {
        assertEquals(20, calculator.multiply(4, 5));
    }

    @Test
    public void testDivision() {
        assertEquals(5, calculator.divide(10, 2));
    }
}