CREATE TABLE customers (
    customer_id NUMBER PRIMARY KEY,
    name        VARCHAR2(50),
    age         NUMBER,
    balance     NUMBER,
    is_vip      CHAR(1) DEFAULT 'N'
);

CREATE TABLE loans (
    loan_id       NUMBER PRIMARY KEY,
    customer_id   NUMBER REFERENCES customers(customer_id),
    interest_rate NUMBER,
    due_date      DATE
);

INSERT INTO customers VALUES (1, 'Alice', 65, 5000,  'N');
INSERT INTO customers VALUES (2, 'Bob',   45, 12000, 'N');
INSERT INTO customers VALUES (3, 'Carol', 70, 15000, 'N');
INSERT INTO customers VALUES (4, 'David', 30, 2000,  'N');

INSERT INTO loans VALUES (101, 1, 7.5, SYSDATE + 10);
INSERT INTO loans VALUES (102, 2, 6.0, SYSDATE + 45);
INSERT INTO loans VALUES (103, 3, 8.0, SYSDATE + 5);
INSERT INTO loans VALUES (104, 4, 9.0, SYSDATE + 60);

COMMIT;