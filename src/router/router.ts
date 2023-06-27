import { Router } from 'express';
import mainController from '../controllers/main';
import departamentoController from '../controllers/departamento';
import funcionarioController from '../controllers/funcionario';
import checkAuth from '../middlewares/checkAuth';

const router = Router();

// Main controller
router.get('/', mainController.index);
router.get('/about', mainController.about);
router.get('/ui', mainController.ui); // elementos ui

// Cookies
router.get('/create-cookie', mainController.createCookie);
router.get('/clear-cookie', mainController.clearCookie);

// Login/Logout
router.get('/login', mainController.login);
router.post('/login', mainController.login);
router.get('/logout', mainController.logout);

// Sign Up
router.get('/signup', mainController.signUp);
router.post('/signup', mainController.signUp);

// Departamento controller
router.get('/departamento', checkAuth, departamentoController.index);
router.get('/departamento/create', checkAuth, departamentoController.create);
router.post('/departamento/create', checkAuth, departamentoController.create);
router.get('/departamento/:id', checkAuth, departamentoController.read);
router.get(
  '/departamento/update/:id',
  checkAuth,
  departamentoController.update,
);
router.post(
  '/departamento/update/:id',
  checkAuth,
  departamentoController.update,
);
router.get(
  '/departamento/delete/:id',
  checkAuth,
  departamentoController.remove,
);

// router.put('/departamento/:id', departamentoController.update);
// router.delete('/departamento/:id', departamentoController.remove);

// Funcionario controller
router.get('/funcionario', checkAuth, funcionarioController.index);
router.get('/funcionario/create', checkAuth, funcionarioController.create);
router.post('/funcionario/create', checkAuth, funcionarioController.create);
router.get('/funcionario/:id', checkAuth, funcionarioController.read);
router.get('/funcionario/update/:id', checkAuth, funcionarioController.update);
router.post('/funcionario/update/:id', checkAuth, funcionarioController.update);
router.get('/funcionario/delete/:id', checkAuth, funcionarioController.remove);

export default router;
