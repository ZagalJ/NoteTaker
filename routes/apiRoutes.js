const fs = require("fs")
const path = require("path")

module.exports = function(app){
app.get("/api/notes", (req, res) => res.sendFile(path.join(__dirname, "../db/db.json")))

 //API for storing user added note and renderning updated  notes stored on db.json
 app.post("/api/notes", (req, res) => {
     let newNote ={
         title:req.body.title,
         text:req.body.text
     };
     let oldNote =JSON.parse(fs.readFileSync(path.join(__dirname,"../db/db.json"),"utf-8")) 
     oldNote.push(newNote)
     fs.writeFileSync("./db/db.json",JSON.stringify(oldNote))
     res.json(oldNote)
 })

}