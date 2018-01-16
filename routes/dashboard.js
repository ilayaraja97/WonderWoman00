var express = require('express');
var router = express.Router();

router.get('/:id', function (req, res, next) {
    var id = req.params.id;
    console.log(req.params.id);
    res.render('dashboard', {id: id});
});

module.exports = router;