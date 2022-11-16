import express from 'express';
import { login, register } from '../controllers/auth.controller.js';
// import { body } from "express-validator";
import { validator } from '../middlewares/validator.js'

const router = express.Router();


router.post("/register", validator, register);

router.post("/login", validator, login)

export default router;