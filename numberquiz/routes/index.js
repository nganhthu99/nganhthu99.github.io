var express = require('express');
var router = express.Router();

const questions = [
    [3, 1, 4, 1, 5],
    [1, 1, 2, 3, 5],
    [1, 2, 4, 8, 16],
    [2, 3, 5, 7, 11],
    [0, 1, 1, 2, 3]
];

const answers = [9, 8, 32, 13, 55];

router.get('/', function(req, res, next) {
    const index = req.session.index || 0;
    const score = req.session.score || 0;

    res.render("home", {
        title: 'Number Quiz',
        question: questions[index].join(", "),
        score: score,
    });
});

router.post("/", (req, res) => {
    const answer = req.body.answer;
    const index = req.session.index || 0;
    const score = req.session.score || 0;

    if (!answer) {
        res.redirect("/");
        return;
    }
    if (parseInt(answer) === answers[index]) {
        req.session.score = score + 1;
    }
    req.session.index = index + 1;

    if (req.session.index < questions.length) {
        res.redirect("/");
    } else {
        res.render("result", {
            title: 'Number Quiz',
            score: req.session.score || 0,
            length: questions.length,
        });
    }
});

module.exports = router;
