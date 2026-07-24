-- Scenario 1: Process Monthly Interest for all savings accounts
CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest AS
BEGIN
    FOR acc IN (SELECT account_id, balance FROM savings_accounts) LOOP
        UPDATE savings_accounts
        SET balance = balance + (balance * 0.01)
        WHERE account_id = acc.account_id;

        DBMS_OUTPUT.PUT_LINE('Interest applied for account: '
                              || acc.account_id ||
                              ' | New Balance: ' ||
                              TO_CHAR(acc.balance * 1.01, '99999.99'));
    END LOOP;
    COMMIT;
    DBMS_OUTPUT.PUT_LINE('Monthly interest processed successfully.');
END;
/

-- Execute
SET SERVEROUTPUT ON;
EXECUTE ProcessMonthlyInterest;