import { Router } from "express";
import {getIndex} from "../controllers/controllers.js"

const router = Router()

router.get('/', getIndex)

export default router