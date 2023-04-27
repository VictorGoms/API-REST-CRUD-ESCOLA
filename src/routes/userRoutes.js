import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';
const router = new Router();

// Não deveria existir
router.get('/', userController.index); //index
router.get('/:id', userController.show); //Show

router.post('/',loginRequired, userController.store); //Store/Create
router.put('/', loginRequired, userController.update); //Update
router.delete('/', loginRequired, userController.delete); //Delete
export default router;
