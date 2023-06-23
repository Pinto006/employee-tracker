USE employeeTracker_db;

INSERT INTO department (name, department_id)
VALUES 
('Technology', 1),
('Finance', 2),
('Legal', 3),
('Human Resources', 4),
('Marketing', 5),
('Sales', 6);

INSERT INTO role (title, salary, department_id)
VALUES
('Web Developer', 90000, 1),
('Accountant', 70000, 2),
('Paralegal', 50000, 3),
('HR Director', 70000, 4),
('Marketing Director', 90000, 5),
('Recruiter', 40000, 6);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
('Mallorie', 'Pinto', 1, 'Jessica Smith'),
('Brandon', 'Wong', 2, 'Karen Sealer'),
('Lucy', 'Gaughran', 3, 'Molly Morgan'),
('Julie', 'Baum', 4, 'Ashley Keather'),
('Megan', 'Cano', 5, 'Brittney Goins'),
('John', 'Carpenter', 6, 'Tabitha Levitt');