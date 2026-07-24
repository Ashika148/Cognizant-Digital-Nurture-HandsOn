-- Scenario 2: Update Employee Bonus based on department
CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus(
    dept_name     IN VARCHAR2,
    bonus_percent IN NUMBER
) AS
BEGIN
    FOR emp IN (SELECT employee_id, employee_name, salary
                FROM employees
                WHERE department = dept_name) LOOP

        UPDATE employees
        SET salary = salary + (salary * bonus_percent / 100)
        WHERE employee_id = emp.employee_id;

        DBMS_OUTPUT.PUT_LINE('Bonus applied for: ' || emp.employee_name ||
                             ' | Old Salary: ' || emp.salary ||
                             ' | New Salary: ' ||
                             TO_CHAR(emp.salary + (emp.salary * bonus_percent / 100),
                             '99999.99'));
    END LOOP;
    COMMIT;
    DBMS_OUTPUT.PUT_LINE('Bonus update completed for department: ' || dept_name);
END;
/

-- Execute
SET SERVEROUTPUT ON;
EXECUTE UpdateEmployeeBonus('IT', 10);