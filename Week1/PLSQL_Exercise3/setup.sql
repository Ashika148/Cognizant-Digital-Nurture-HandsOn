-- Setup: Create tables and insert data

CREATE TABLE savings_accounts (
    account_id    NUMBER PRIMARY KEY,
    customer_name VARCHAR2(50),
    balance       NUMBER,
    account_type  VARCHAR2(20) DEFAULT 'SAVINGS'
);

CREATE TABLE employees (
    employee_id   NUMBER PRIMARY KEY,
    employee_name VARCHAR2(50),
    department    VARCHAR2(50),
    salary        NUMBER
);

CREATE TABLE accounts (
    account_id    NUMBER PRIMARY KEY,
    customer_name VARCHAR2(50),
    balance       NUMBER
);

INSERT INTO savings_accounts VALUES (1, 'Alice',  5000,  'SAVINGS');
INSERT INTO savings_accounts VALUES (2, 'Bob',    8000,  'SAVINGS');
INSERT INTO savings_accounts VALUES (3, 'Carol',  3000,  'SAVINGS');
INSERT INTO savings_accounts VALUES (4, 'David',  12000, 'SAVINGS');

INSERT INTO employees VALUES (1, 'John',  'IT',      50000);
INSERT INTO employees VALUES (2, 'Sarah', 'IT',      60000);
INSERT INTO employees VALUES (3, 'Mike',  'HR',      45000);
INSERT INTO employees VALUES (4, 'Emma',  'HR',      48000);
INSERT INTO employees VALUES (5, 'Tom',   'Finance', 55000);

INSERT INTO accounts VALUES (101, 'Alice', 10000);
INSERT INTO accounts VALUES (102, 'Bob',   5000);
INSERT INTO accounts VALUES (103, 'Carol', 3000);

COMMIT;