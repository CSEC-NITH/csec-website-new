var express = require("express"),
    app = express(),
    PORT = 5000 || process.env.PORT;

app.get("/", function(req, res){
       res.send("Website under construction...");
});

app.listen(PORT, function(err){
    if(err)
        console.log(err);
    else
        console.log("Server started at port : "+PORT+"... ");
});

