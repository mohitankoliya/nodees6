import { Router } from 'express';
import employeeController from '../Controller/employee.controller';
import loginController from '../Controller/login.controller';
import categoryController from '../Controller/category.controller'
import insertCategoryController from '../Controller/insertcategory.controller'
import inProductController from '..'
import Token from'../middleware/Auth.middleware'
// import insertCategoryController from '../Controller/insertcategory.controller'
const Employee = Router()

// Employee.post('/employee', Token, employeeController)
// Employee.post('/category', categoryController)
// Employee.post('/insertCategory', insertCategoryController)
// Employee.post('/login', loginController)

Employee.route('/category').post(categoryController, categoryController)

export default Employee;