import { Router } from "express";
import {getIndex, getClickCounter} from "../controllers/controllers.js"

const router = Router()

router.get('/', getIndex);
router.get('/click-counter', getClickCounter)

export default router