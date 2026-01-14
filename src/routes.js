import { Router } from 'express';
import {getAllUsers, ping, saveUserLocation} from './controllers.js';

const router = Router();

router.get('/ping', ping);
router.get('/getAllUsers', getAllUsers);
router.post('/location', saveUserLocation);

export default router;