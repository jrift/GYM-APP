// creating authentication endpoints 
import express from "express"
import { register, login, logout } from "../controllers/auth.js"
const router = express.Router()

router.post("/register", register)
router.post("/login", login)
router.post("/logout", logout)

export default router

// Routes define the URL patterns (endpoints) and the corresponding HTTP methods (GET, POST, PUT, DELETE, etc.) that your application responds to.