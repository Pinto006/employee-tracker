USE employeeTracker_db;

INSERT INTO department (department_name, department_id)
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
('Mallorie', 'Pinto', 2, null),
('Brandon', 'Wong', 1, 1),
('Julie', 'Brown', 4, null),
('Ashley', 'Keather', 3, 3),
('Molly', 'Moore', 6, null),
('Julie', 'Sanchez', 5, 5),
('John', 'Smith', 7, null),
('Katrina', 'Martinez', 8, 7);