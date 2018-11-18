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

exports.getPostById = (req, res) => {

    postId = req.params.id;
    
    Post.findById(postId).then((post) => {
        res.status(200).json({
            status: 200,
            message: 'Get Post Successful',
            data: post
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

    let postID = req.body._id.trim();
    let updatedPost = new Post({
        title: req.body.title,
        content: req.body.content
    });

    console.log('post ID ', postID);
    console.log('upadted post -', updatedPost);

    Post.findById(postID).then(post => {
        console.log('found.', post);
        post.title = updatedPost.title;
        post.content = updatedPost.content;
        
        post.save().then((post) => {
            res.status(200).json({
                status: 200,
                message: 'Post updated Successfully',
                data: post
            });
        }).catch(err => {
            res.status(400).json({
                status: 400,
                message: 'Post not updated',
                data: err.message
            });
        });

    }).catch(err => {
        console.log('not found', err.message);
    })

    // Post.findOne({ _id: postID }).then(post => {

    //     console.log('found', post);
    // }).
    // catch(err => {
    //     console.log('not found ', err.message);
    // });

    // Post.findOneAndUpdate({ _id: postID }, updatedPost).then((post) => {
    //     console.log('found', post);
    //     res.status(201).json({
    //         status: 201,
    //         message: 'Post Updated Successfully',
    //         data: post
    //     });
    // }).catch(err => {
    //     console.log('not found ', err.message);
    //     res.status(400).json({
    //         status: 400,
    //         message: 'Post not Updated',
    //         data: err.message
    //     });
    // });
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
