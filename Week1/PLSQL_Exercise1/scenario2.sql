-- Scenario 2: Set VIP status for customers with balance over $10,000
SET SERVEROUTPUT ON;
BEGIN
    FOR cust IN (SELECT customer_id, balance FROM customers) LOOP
        IF cust.balance > 10000 THEN
            UPDATE customers
            SET is_vip = 'Y'
            WHERE customer_id = cust.customer_id;

            DBMS_OUTPUT.PUT_LINE('VIP status set for customer: ' 
                                  || cust.customer_id);
        END IF;
    END LOOP;
    COMMIT;
END;
/