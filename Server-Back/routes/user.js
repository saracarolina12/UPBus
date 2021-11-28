import express from "express";
import { getUser, createUser } from "../controller/user.js";

const router = express.Router();

router.get('/', getUser);
router.post('/', createUser);
// router.delete('/:id', deleteTodos)
export default router;