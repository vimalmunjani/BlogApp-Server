const Post = require('../models/post.model');

exports.getPost = (req, res) => {

    Post.find().then(posts => {
        res.status(200).json({
            status: 200,
            message: 'Get Post Successful',
            data: posts
        });
    }).catch(err => {
        res.status(404).json({
            status: 404,
            message: 'Get Post unuccessful',
            data: err.message
        });
    });

}

exports.addPost = (req, res) => {

    let post = new Post({
        title: req.body.title,
        content: req.body.content
    });

    post.save().then((post) => {
        res.status(201).json({
            status: 201,
            message: 'Post Added Successfully',
            data: post
        });
    }).catch(err => {
        res.status(400).json({
            status: 400,
            message: 'Post not Added',
            data: err.message
        });
    });

}

exports.editPost = (req, res) => {



}

exports.deletePost = (req, res) => {

    let postId = req.params._id;


    Post.findByIdAndDelete(postId)
    .then((post) => {

        if(!post) {
            res.status(404).json({
                status: 404,
                message: 'Post not deleted',
                data: 'Post not found'
            });
        }

        res.status(200).json({
            status: 200,
            message: 'Post deleted',
            data: post
        });
    })
    .catch(err => {
        res.status(400).json({
            status: 400,
            message: 'Post not deleted',
            data: err.message
        });
    });

}
