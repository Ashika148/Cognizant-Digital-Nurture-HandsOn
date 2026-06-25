-- Scenario 1: Apply 1% discount to loan interest rates for customers above 60
SET SERVEROUTPUT ON;
DECLARE
    CURSOR cust_cursor IS
        SELECT customer_id, age FROM customers;
BEGIN
    FOR cust IN cust_cursor LOOP
        IF cust.age > 60 THEN
            UPDATE loans
            SET interest_rate = interest_rate - (interest_rate * 0.01)
            WHERE customer_id = cust.customer_id;

            DBMS_OUTPUT.PUT_LINE('Discount applied for customer: ' 
                                  || cust.customer_id);
        END IF;
    END LOOP;
    COMMIT;
END;
/