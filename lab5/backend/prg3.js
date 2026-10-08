import express from "express";
import path from "path";
import { fileURLToPath } from "node:url";
const app = express();
const urlpath = fileURLToPath(import.meta.url); // refence name of the place where the project is saved
const rootFolder = path.dirname(urlpath);

app.use(express.static(path.join(rootFolder, "pages")));
app.use((req,res) => {
    res.status(404).send("<h1>page not found </h1>");
});
app.listen(4444, () => console.log("prg3 is running at 4444"));
