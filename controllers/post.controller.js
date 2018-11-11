const Post = require('../models/post.model');

let data = [
    {
        title: 'First Post',
        content: 'I am first post'
    },
    {
        title: 'Second Post',
        content: 'I am Second post'
    },
    {
        title: 'Third Post',
        content: 'I am Third post'
    }
];

exports.getPost = (req, res) => {

    res.status(200).json({
        status: 200,
        message: 'Get Post Successful',
        data: data
    });

}

exports.addPost = (req, res) => {

    let post = new Post({
        title: req.body.title,
        content: req.body.content
    });

    res.status(201).json(post);

}

exports.editPost = (req, res) => {



}

exports.deletePost = (req, res) => {



}
