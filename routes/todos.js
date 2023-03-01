const { Router } = require("express")
const Todo = require("../models/Todos")
const router = Router()

router.get('/', async (req, res) => {
    const todos = await Todo.find({})

    return res.json({todos})
    // return res.render('index')
})

router.post('/create', async (req, res) => {
    const { title } = req.body
    const todo = new Todo({
        title
    })

    await todo.save()
    return res.json({todo})
} )

router.post('/completed/:id', async (req, res) => {
    const todo = await Todo.findById(req.params.id)

    todo.completed = !todo.completed;
    await todo.save()
    return res.json(todo)
})

module.exports = router;