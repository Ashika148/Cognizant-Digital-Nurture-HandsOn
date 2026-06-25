-- Scenario 3: Transfer funds between accounts
CREATE OR REPLACE PROCEDURE TransferFunds(
    from_account IN NUMBER,
    to_account   IN NUMBER,
    amount       IN NUMBER
) AS
    from_balance NUMBER;
BEGIN
    SELECT balance INTO from_balance
    FROM accounts
    WHERE account_id = from_account;

    IF from_balance < amount THEN
        DBMS_OUTPUT.PUT_LINE('Transfer failed! Insufficient balance.');
        DBMS_OUTPUT.PUT_LINE('Available balance: ' || from_balance);
    ELSE
        UPDATE accounts
        SET balance = balance - amount
        WHERE account_id = from_account;

        UPDATE accounts
        SET balance = balance + amount
        WHERE account_id = to_account;

        COMMIT;
        DBMS_OUTPUT.PUT_LINE('Transfer successful!');
        DBMS_OUTPUT.PUT_LINE('Amount transferred: ' || amount);
        DBMS_OUTPUT.PUT_LINE('From account: ' || from_account);
        DBMS_OUTPUT.PUT_LINE('To account: ' || to_account);
    END IF;
END;
/

-- Execute
SET SERVEROUTPUT ON;
EXECUTE TransferFunds(101, 102, 3000);
EXECUTE TransferFunds(103, 101, 5000);