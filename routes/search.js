import express from 'express';
const router = express.Router();
import { searchThreads } from '../controllers/searchController.js';

router.get('/', searchThreads);

export default router;
