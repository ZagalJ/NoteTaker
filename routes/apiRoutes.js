const fs = require("fs")
const { v4: uuid } = require('uuid')
const path = require("path")

module.exports = function(app){
app.get("/api/notes", (req, res) => res.sendFile(path.join(__dirname, "../db/db.json")))

 app.post("/api/notes", (req, res) => {
     let newNote ={
         id:uuid(),
         title:req.body.title,
         text:req.body.text
     };
     let oldNote =JSON.parse(fs.readFileSync(path.join(__dirname,"../db/db.json"),"utf-8")) 
     oldNote.push(newNote)
     fs.writeFileSync("./db/db.json",JSON.stringify(oldNote))
     res.json(oldNote)
 })

 
 app.delete("/api/notes/:id", (req, res) => {
     let choosen = req.params.id
     let oldNote =JSON.parse(fs.readFileSync(path.join(__dirname,"../db/db.json"),"utf-8"))
     const newNote =oldNote.filter(oldNote=>oldNote.id != choosen)
     fs.writeFileSync("./db/db.json",JSON.stringify(newNote))
     res.send(newNote)
 })
}