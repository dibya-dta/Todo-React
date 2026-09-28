import express from 'express'
import { addTodo } from '../controller/todoController.js'

const router = express.Router()

router.post('/addTodo', addTodo)

export default router;