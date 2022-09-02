const mongoose = require('mongoose') // mongoose talks to database; helps model application data; provides a repeatable structure within out collection

const TodoSchema = new mongoose.Schema({ // mongoose provides structure in the from of schemas which map to a MongoDB collection; whenever a todo is created it will have the todo, a completed, and the user ID
  todo: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  userId: {
    type: String,
    required: true
  }
})
// each document going into collection will have this structure; essentially a constructor
module.exports = mongoose.model('Todo', TodoSchema) 
