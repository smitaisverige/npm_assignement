import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import stockholmRouter from "./routes/stockholmrouter.js";
import gotlandRouter from "./routes/gotlandrouter.js";

dotenv.config();
const app = express();


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


app.use(express.static(path.join(__dirname, "public")));

// Home Route
app.get("/", (req, res) => {
    res.render("pages/index", { 
        title: "Welcome to Sweden ",
        subTitle: "Discover the beauty of the North"
    });
});

// Use 2 Routers which have 2 sub routes each 
app.use("/stockholm", stockholmRouter);
app.use("/gotland", gotlandRouter);


const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
    console.log(`Server is curling! on http://localhost:${PORT}`);
});