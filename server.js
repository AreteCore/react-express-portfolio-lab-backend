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