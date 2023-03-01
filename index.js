const express = require("express");
const mongoose = require("mongoose")
// const exphbs = require('express-handlebars')
const todoRoutes = require("./routes/todos");


const PORT = process.env.PORT || 5000;

const app = express()
// const hbs = exphbs.create({
//     defaultLayout: 'main',
//     extname: 'hbs'
// })

// app.engine('hbs', hbs.engine)
// app.set('view engine', 'hbs')
// app.set('views', 'views')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(todoRoutes)

async function start () {
    try {
        await mongoose.connect('mongodb+srv://dima:qwerty123@cluster0.x1gracp.mongodb.net/todos', {
            useNewUrlParser: true,
            // useFindAndModify: false,
            retryWrites: true,
            w: "majority",
        })

        app.listen(PORT, () => {
            console.log("start");
        })
    } catch(e) {
        console.log(e);
    }
}

start()

//?retryWrites=true&w=majority