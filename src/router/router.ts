import { Router } from 'express';
import mainController from '../controllers/main';
import departamentoController from '../controllers/departamento';

const router = Router();

// Main controller
router.get('/', mainController.index);
router.get('/about', mainController.about);
router.get('/ui', mainController.ui); // elementos ui
router.get('/create-cookie', mainController.createCookie);
router.get('/clean-cookie', mainController.clearCookie);

// Departamento controller

router.get('/departamento', departamentoController.index);
router.get('/departamento/create', departamentoController.create);
router.post('/departamento/create', departamentoController.create);
router.get('/departamento/:id', departamentoController.read);
router.get('/departamento/update/:id', departamentoController.update);
router.post('/departamento/update/:id', departamentoController.update);
router.post('/departamento/delete/:id', departamentoController.remove);

// router.put('/departamento/:id', departamentoController.update);
// router.delete('/departamento/:id', departamentoController.remove);

export default router;
