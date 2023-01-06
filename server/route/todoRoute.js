const router = require("express").Router();
const Todo = require("../model/todoDB");


router.route("/").get((req, res)=>{

    Todo.find().then((item) => res.json(item))
    .catch((err) => res.status(400).json("Error: " + err));

}).delete((req, res)=>{
    Todo.deleteMany({ completed: true })
    .then( () => res.json("successfully deleted!"))
    .catch(err => res.status(400).json("Error: " + err));
})

router.route("/:id").get((req, res)=>{
     Todo.findOne({id: req.params.id})
     .then(item => res.json(item))
     .catch(err => res.status(400).json("Error: " + err));
})
.patch((req, res)=>{
    Todo.findOneAndUpdate({id: req.params.id}, {$set: req.body} )
    .then( () => res.json("successfully updated!"))
    .catch(err => res.status(400).json("Error: " + err));
})
.delete((req, res)=> {

    Todo.findOneAndDelete({id: req.params.id})
    .then( () => res.json("deleted successfully!"))
    .catch(err => res.status(400).json("Error: " + err));
})




router.route("/create").post((req, res) => {
     const id = req.body.id
     const title = req.body.title;
     const completed = req.body.completed;

     const newTodo = new Todo ({
        id,
        title,
        completed
     })

     newTodo.save()
     .then((item) => res.json(item))
     .catch((err) => res.status(400).json("Error: " + err));
})


module.exports = router;

