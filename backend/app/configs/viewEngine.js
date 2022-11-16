const express = require("express");

const viewEngine = (app) => {
        app.set("view engine", "ejs");
        app.set("views", __path_views);
        app.use(express.static("public"));
}

module.exports = viewEngine;