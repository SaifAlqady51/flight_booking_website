import {Router} from 'express';
import { getAirport } from './api';

const router = Router();

router.get('/airports', getAirport); // gets n airports from Amadeus API

export default router;
