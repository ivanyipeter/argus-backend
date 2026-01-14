import { Router } from 'express';
import { ping, saveLocation } from './controllers.js';

const router = Router();

router.get('/ping', ping);
router.post('/location', saveLocation);

export default router;