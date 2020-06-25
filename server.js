const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const data = require('./data')


server.use(express.static('public'))
server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    noCache: true,
    autoescape: false

})

server.get("/", (req, res) => {
    return res.render("index", { data })
})
server.get('/about', (req, res) => {
    return res.render("about")
})

server.get('/recipes', (req, res) => {
    return res.render("recipes", { data })
})

server.get("/recipes/:index", function (req, res) {
    const recipes = data // Array de receitas carregadas do data.js
    const recipeIndex = req.params.index;
    const recipe = recipes.find((e)=>{
        if(e.id == recipeIndex)
        return recipes[e.id]
    })

    if(!recipe){
        return res.render("not-found")
    }

return res.render("recipe", {recipe})
})

server.use((req, res) => {
    res.status(404).render("not-found")
})

server.listen(7000, () => {
    console.log("server is running")
})