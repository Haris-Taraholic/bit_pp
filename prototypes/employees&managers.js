"use strict";

function Person(name, surname) {
    this.name = name;
    this.surname = surname;
}
Person.prototype.fullName = function () {
    return this.name + " " + this.surname;
}

function Employee(job, salary) {
    Person.call(this, name, surname);
    this.job = job;
    this.salary = salary;}

Employee.prototype.getData = function () {
    return Person.prototype.fullName + " " + this.salary;
}
Employee.prototype.getSalary = function () {
    return this.salary;
}
Employee.prototype.increaseSalary = function () {
    return this.salary * 1.1;
}

function Developer(specialization) {
    Employee.call(this, name, surname, job, salary);
    this.specialization = specialization;
}
Developer.prototype.getSpecialization = function () {
    return this.specialization;
}
function Manager(department) {
    Developer.call(this, name, surname, job, salary, specialization);
    this.department = department;
}
Manager.prototype.getDepartment = function () {
    return this.department;
}
Manager.prototype.changeDepartment = function (newDepartment) {
    return this.department = newDepartment;
}

var personOne = new Person('Bojan', 'Zerajic');
var employeeOne = new Employee('front end developer', 1000);
var developerOne = new Developer('JavaScript');
var managerOne = new Manager('Web design');
console.log(personOne.getFullname());
