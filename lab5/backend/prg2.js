import express from 'express'
import path from 'path'
import { fileURLToPath } from 'node:url';
const app=express();

const filename=fileURLToPath(import.meta.url);
const dirname=path.dirname(filename);


app.listen(4444, () => {
    app.get("/", (req, res) => {
      // res.end("Hello Express");
      res.sendFile(path.join(dirname,"pages","product.html"))

    
    });
    app.get("/contact", (req, res) => {
      // res.end("Hello Express");
      res.sendFile(path.join(dirname, "pages", "contactUs.html"));
    });

    app.use((req,res)=>{
        res.status(404).send("<h2>Page not Found</h2>")
    })


  console.log("prg2 is running at server 4444");
});