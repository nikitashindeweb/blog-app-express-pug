const express = require('express');
const blogs = require('./routes/blog');
const port = 3000

const app = new express();

app.set("view engine", "pug")
app.set('views', './views')

app.use('/blogs', blogs);

app.get('/', (req, res) => {
    res.render('layout/nav', { welcome: "Welcome to Blog Learning!" });
})

app.listen(port, () => {
    console.log("Server listening at ", port)
})