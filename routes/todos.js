const express = require('express')
const router = express.Router()
const todosController = require('../controllers/todos') 
const { ensureAuth } = require('../middleware/auth') // destructuring because other things can do done; go to middleware folder and find auth.js file

// all the requests we can listen for on the todos route; knows which controller to send to
router.get('/', ensureAuth, todosController.getTodos) // if request is a GET request, ensureAuth (middleware; essentially a function) checks to make sure if you're logged in; if logged in, it'll run next bit of code (.getTodos method from todosController)

router.post('/createTodo', todosController.createTodo)

router.put('/markComplete', todosController.markComplete)

router.put('/markIncomplete', todosController.markIncomplete)

router.delete('/deleteTodo', todosController.deleteTodo)

module.exports = router