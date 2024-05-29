const Employee = require('../models/employee');

// Create Employee
exports.createEmployee = async (req, res) => {
    try {
        const newEmployee = new Employee(req.body);
        const employee = await newEmployee.save();
        res.status(201).json(employee);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get All Employees
exports.getAllEmployees = async (req, res) => {
    try {
        const employees = await Employee.find();
        res.status(200).json(employees);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get Employee by ID
exports.getEmployeeById = async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id);
        if (!employee) return res.status(404).json({ message: 'Employee not found' });
        res.status(200).json(employee);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update Employee
exports.updateEmployee = async (req, res) => {
    try {
        const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!employee) return res.status(404).json({ message: 'Employee not found' });
        res.status(200).json(employee);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete Employee
exports.deleteEmployee = async (req, res) => {
    try {
        const employee = await Employee.findByIdAndDelete(req.params.id);
        if (!employee) return res.status(404).json({ message: 'Employee not found' });
        res.status(200).json({ message: 'Employee deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get Employees by Filters
exports.getEmployeesByFilter = async (req, res) => {
    try {
        const filter = req.params.filter;
        const employees = await Employee.find({ role: filter });
        res.status(200).json(employees);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
