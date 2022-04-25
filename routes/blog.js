const express = require('express');
const path = require('path');
const blogs = require('../data/blogs');

const router = express.Router();


router.get('/', (req, res) => {
    res.render('blog/listing', { blogs: blogs });
})

router.get('/:slug', (req, res) => {
    const slug = req.params.slug;
    let blog = blogs.filter(item => item.slug == slug)
    blog = blog[0];
    if (!blog) {
        res.render('layout/404');
    }

    res.render('blog/view', { blog: blog });
})

module.exports = router;