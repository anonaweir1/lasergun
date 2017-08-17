
DROP DATABASE IF EXISTS lasergun;

CREATE DATABASE IF NOT EXISTS lasergun;

USE lasergun;


CREATE TABLE IF NOT EXISTS department(

	departmentID SMALLINT NOT NULL AUTO_INCREMENT,

	departmentName VARCHAR(100),

	PRIMARY KEY (departmentID)

);


CREATE TABLE IF NOT EXISTS employee (

    	employeeNumber SMALLINT NOT NULL AUTO_INCREMENT,

 	name VARCHAR(100) NOT NULL,

   	address VARCHAR(100) NOT NULL,

    	initialSalary DECIMAL(11 , 2 ) NOT NULL,

   	nin CHAR(9) NOT NULL,

    	bankAccountNo CHAR(8) NOT NULL,

	sortCode CHAR(6) NOT NULL,

	departmentID SMALLINT NOT NULL,

    	PRIMARY KEY (employeeNumber),

	FOREIGN KEY (departmentID) REFERENCES department (departmentID)

);




CREATE TABLE IF NOT EXISTS project(

	projectID SMALLINT NOT NULL AUTO_INCREMENT,

	projectName VARCHAR(100) NOT NULL,

	PRIMARY KEY (projectID)

);




CREATE TABLE IF NOT EXISTS assignment( 

	assignmentID SMALLINT NOT NULL AUTO_INCREMENT,

	projectID SMALLINT NOT NULL,

	employeeNumber SMALLINT NOT NULL,

	startDate DATE NOT NULL,

	endDate DATE,

	PRIMARY KEY (assignmentID),

	FOREIGN KEY (projectID) REFERENCES project (projectID),

	FOREIGN KEY (employeeNumber) REFERENCES employee (employeeNumber)

);




CREATE TABLE IF NOT EXISTS salesEmployee( 

	employeeNumber SMALLINT,

	commissionRate FLOAT,

	salesTotal FLOAT,

	PRIMARY KEY (employeeNumber),

	FOREIGN KEY (employeeNumber) REFERENCES employee (employeeNumber)

);

USE lasergun;

INSERT INTO department(departmentName) 
VALUES ('Evolve'), ('Enterprise'), ('Government');


INSERT INTO employee(name, address, initialSalary, nin, bankAccountNo, sortCode, departmentID)

VALUES ('Rhianna Dorrian', '8 Rathmore Road', 16000.00,'PC123456B', '98098765', '070896', 2),

('Daniel Weir', '32 Belfast Road', 16000.00, 'PD123456G', '98091234', '090706', 2),

('Helina G', '45 Bangor Road', 16000.00, 'PC125689F', '01234467', '080904', 1),

('Jeremy Smith', '90 Down South', 16000.00, 'TG789993G', '10299322', '080406', 3), 

('Anona', 'Address test', 20000.00, 'SS123456D', '12345678', '123456', 1),

('Eduard', 'Address test', 20000.00, 'SS123456D', '12345678', '123456', 2),

('Shannon', 'Address test', 20000.00, 'SS123456D', '12345678', '123456', 3);




INSERT INTO project(projectName)

VALUES ('Building new platform'), ('Enterprise Rerun'), ('Trial Run');




INSERT INTO assignment(projectID, employeeNumber, startDate, endDate)

VALUES (1, 1, '2016-09-12', '2018-09-12'), (1, 4, '2017-07-08', '2019-10-10'),

(2, 4, '2015-09-27', '2019-07-20'), (3, 5, '2017-01-23', '2020-03-20');


INSERT INTO salesEmployee(employeeNumber, commissionRate, salesTotal)

VALUES (1, 0.89, 1200.50), (4, 0.25, 305.75);

-- drop users
drop user if exists 'hr'@'%';
drop user if exists 'finance'@'%';
drop user if exists 'salesManager'@'%';
drop user if exists 'talentManager'@'%';

create user 'hr'@'%' identified by 'hrPassword';
create user 'finance'@'%' identified by 'financePassword';
create user 'salesManager'@'%' identified by 'salesManagerPassword';
create user 'talentManager'@'%' identified by 'talentManagerPassword';

-- grant permis

-- hr
grant insert, select, update on obodb.employee to 'hr'@'%';
grant insert, select, update on obodb.department to 'hr'@'%';
grant insert, select, update on obodb.salesEmployee to 'hr'@'%';

-- finance
grant select on obodb.employee to 'finance'@'%';
grant select on obodb.salesEmployee to 'finance'@'%';

-- salesManager
grant select on obodb.employee to 'salesManager'@'%';
grant select on obodb.salesEmployee to 'salesManager'@'%';

-- talentManager
grant insert, select, update on obodb.assignment to 'talentManager'@'%';
grant insert, select, update on obodb.project to 'talentManager'@'%';
grant select on obodb.employee to 'talentManager'@'%';
