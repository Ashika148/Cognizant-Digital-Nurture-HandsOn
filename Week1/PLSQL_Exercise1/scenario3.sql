-- Scenario 3: Send reminders for loans due within 30 days
SET SERVEROUTPUT ON;
BEGIN
    FOR loan IN (
        SELECT l.loan_id, l.customer_id, l.due_date, c.name
        FROM loans l
        JOIN customers c ON l.customer_id = c.customer_id
        WHERE l.due_date <= SYSDATE + 30
    ) LOOP
        DBMS_OUTPUT.PUT_LINE('Reminder: Dear ' || loan.name ||
            ', your loan (ID: ' || loan.loan_id ||
            ') is due on ' || TO_CHAR(loan.due_date, 'DD-MON-YYYY') || '.');
    END LOOP;
END;
/