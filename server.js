//import dependencies
const express = require("express")
const cors = require("cors")

//import JSON
const projects = require("./projects.json")
const about = require("./about.json")

//app object so we can use express
const app = express()

//middleware
app.use(cors())

//home route for testing
app.get("/", (req,res) => {
    res.send("Hello world")
})


//routes for retreiving projects
app.get("/projects", (req,res) => {
    //send projects via json
    res.json(projects)
})

// route for retreiving about info 
const PORT = process.env.PORT || 4001

//listener
app.listen(PORT, () => console.log(`listening: ${PORT}`))