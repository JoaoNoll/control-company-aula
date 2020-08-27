import { Router } from 'express';
import cors from 'cors';
import CompanyController from '../src/app/controllers/CompanyController';
import EmployeeController from '../src/app/controllers/EmployeeController';
import RoleController from '../src/app/controllers/RoleController';
import UserController from './app/controllers/UserController';
import AuthController from './app/controllers/AuthController';

import authMiddleware from './app/middlewares/auth';

const routes = Router();
routes.use(cors());
routes.get('/', (req, res) => res.json({ result: 'TEST-API' }));

//routes USER
routes.post('/users', UserController.store);
routes.put('/users/:uid', UserController.update);

//routes AUTH
routes.post('/login', AuthController.store);

routes.get('/companies', CompanyController.index);

routes.use(authMiddleware);
// routes COMPANY (AUTH)
routes.post('/companies', CompanyController.store);

routes.get('/companies/:uid', CompanyController.show);

//routes EMPLOYEE (AUTH)
routes.post('/employees', EmployeeController.store);
routes.get('/employees', EmployeeController.index);
routes.get('/employees/:uid', EmployeeController.show);


//routes ROLE (AUTH)
routes.post('/roles', RoleController.store);
routes.get('/roles', RoleController.index);
routes.get('/roles/:uid', RoleController.show);



export default routes;
