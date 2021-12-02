import express from "express";
import { getUser, createUser, SearchUser, updatePassword } from "../controller/user.js";

const router = express.Router();

router.get('/', getUser);
router.post('/', createUser);
router.post('/', SearchUser);
router.put('/', updatePassword)
// router.delete('/:id', deleteTodos)
export default router;