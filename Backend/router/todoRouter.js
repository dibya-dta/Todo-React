import express from 'express'
import { addTodo, deleteTodo, editTodo, getTodo } from '../controller/todoController.js'

const router = express.Router()

router.post('/addTodo', addTodo)
router.get('/getTodo', getTodo)
router.delete('/deleteTodo/:id', deleteTodo)
router.patch('/editTodo/:id', editTodo)

export default router;