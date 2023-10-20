const express = require('express');
const path = require('path');
const hbs = require("hbs");
const { log } = require('console');

const app = express();
const port = process.env.PORT || 3000;
const staticPath = path.join(__dirname, '../public');
const templatePath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');


//to set the view engin

app.set("view engine", "hbs");
app.set("views", templatePath);
hbs.registerPartials(partialsPath);

// Serve static files from the 'public' directory
app.use(express.static(staticPath));

//templete engine route

app.get("/", (req, res)=>{
    res.render("index.hbs");
});
app.get("/about", (req, res)=>{
    res.render("about.hbs");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
