var express = require('express');
const { Post } = require('../models');
var router = express.Router();

router.post('/', (req,res) => {
    Post.create({
        title: req.body.title,
        content: req.body.content,
    }, (err,post) => {
        if(err){
            return res.status(500).send('Post 생성 실패');
        }
        res.status(200).send(post);
    });
});

router.get('/', (req, res) => {
    Post.find( {}, (err, posts) => {
        if(err){
            return res.status(500).send("Post 전체 조회 실패.");
        }
        res.status(200).send(posts);
    });
});

router.get('/:id', (req, res) => {
    User.findById(req.params.id, (err, post) => {
        if (err) return res.status(500).send("Post 조회 실패");
        if (!post) return res.status(404).send("Post 없음.");
        res.status(200).send(post);
    });
});

router.delete('/:id', (req, res) => {
    User.findByIdAndRemove(req.params.id, (err, post) => {
        if (err) return res.status(500).send("Post 삭제 실패");
        res.status(200).send("Post "+ post.title +" 삭제됨.");
    });
});

router.put('/:id', (req, res) => {    
    User.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, post) => {
        if (err) return res.status(500).send("Post 수정 실패.");
        res.status(200).send(post);
    });
});

module.exports = router;