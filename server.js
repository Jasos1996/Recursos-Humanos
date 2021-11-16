const express = require("express");

const morgan = require("morgan");

const app = express();

const path = require("path");

var dirname = "M:/0-Programacion/1-Proyectos/16-Desarrollo Web/2-D-RH/src/";

var dirname3 = "/data/data/com.termux/files/home/storage/shared/1-Dany Phone/9-Proyectos Web/2-D-RH/src/";




//routes



app.use(require("./routes/basic_routes.js"));



//settings



app.set("port",3000);

app.use(express.static(path.join(dirname+"public")));



//middleware

app.use(morgan("dev"));



//listening

app.listen(app.get("port"),()=>{



console.log("server started on port "+app.get("port"));



})







