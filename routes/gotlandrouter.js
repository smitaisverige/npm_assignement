import express from "express";
import { swedenData } from "../data/swedenData.js";

const gotlandRouter = express.Router();

// Top-level Gotland page sam as Srockholm
gotlandRouter.get("/", (req, res) => {
    const data = swedenData.gotland;
    res.render("pages/featured", { 
        pageTitle: data.title, 
        subTitle: data.subTitle, 
        description: data.description,
        extraInfo:data.extraInfo,
        className: data.className,
        image:data.image
        
    });
});

// Sub-pages (Visby, Faro)
gotlandRouter.get("/:subpage", (req, res) => {
    const subpageKey = req.params.subpage;
    const data = swedenData.gotland.subPages[subpageKey];
    
// test http://localhost:5000/gotland/mumbai
    if (data) {
        res.render("pages/featured", { 
            pageTitle: data.title, 
            subTitle: data.subTitle, 
            description: data.description,
            extraInfo:data.extraInfo,
            className: data.className,
            image:data.image
        });
    } else {
        res.status(404).send("Page not found");
    }
});

export default gotlandRouter;