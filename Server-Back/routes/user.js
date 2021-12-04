import express from "express";
import { getUser, createUser, SearchUser, updatePassword, NewLocation } from "../controller/user.js";

const router = express.Router();

router.get('/', getUser);
router.post('/', createUser);
router.post('/', SearchUser);
//router.put('/', updatePassword);
router.put('/', NewLocation);



export default router;