const mongoose = require ("mongoose");

const todoSchema = new mongoose.Schema({

    id: {
       type: String
    },
    
     title: {
        type: String
     },

    completed:{
        type: Boolean
    }
})

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;






