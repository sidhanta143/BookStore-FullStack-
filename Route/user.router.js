// import { signup } from "../Controller/user.controller";
import { signup } from "../Controller/user.controller";
// import express, { Router } from "express";
import express from "express"
const router=express.Router();
router.post("/signup",signup);
export default user.router