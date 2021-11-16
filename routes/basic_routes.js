const express = require("express");

const router = express.Router();

var dirname = "M:/0-Programacion/1-Proyectos/16-Desarrollo Web/2-D-RH/src/views/";
var dirname3 = "/data/data/com.termux/files/home/storage/shared/1-Dany Phone/9-Proyectos Web/2-D-RH/src/views/";



router.get("/dashboard", function(req, res){



res.sendFile(dirname+"dashboard.html");



})



router.get("/", function(req, res){



    res.sendFile(dirname+"index.html");

    

    })



    router.get("/recursos_laborales", function(req, res){



        res.sendFile(dirname+"recursos_laborales.html");

        

        })



        router.get("/empleados", function(req, res){



            res.sendFile(dirname+"empleados.html");

            

            })

            

        

    



module.exports = router;