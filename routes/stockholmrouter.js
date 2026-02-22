import express from "express";
import { swedenData } from "../data/swedenData.js";

const stockholmRouter = express.Router();

stockholmRouter.get("/", (req, res) => {
    const data = swedenData.stockholm;
    res.render("pages/featured", { 
        pageTitle: data.title, 
        subTitle: data.subTitle, 
        description: data.description,
        extraInfo:data.extraInfo,
        className: data.className,
        image:data.image
    });
});

stockholmRouter.get("/:subpage", (req, res) => {
    const subpageKey = req.params.subpage;
    const data = swedenData.stockholm.subPages[subpageKey];

    // Testing variables  before use , check http://localhost:5000/stockholm/djurgarden
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

export default stockholmRouter;