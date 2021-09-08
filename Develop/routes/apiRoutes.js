const notesData = require ("../db/db.json");

module.exports = function(app){
    app.get("/api/notes", function(req,res){
        readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
    });
    app.post("/api/notes", function(req,res){
        notesData.push(req.body);
        res.json(true);
    });
    
}