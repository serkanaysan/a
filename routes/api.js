var express = require('express');
var db = require('../database/db');
var router = express.Router();

router.get('/category', function (req, res) {
    db.query("Select * From category order by queue", [], function (err, result) {
        if (err) {
            return res.status(400).json({ "error": err });
        }

        res.status(200).json(result);
    });
});

router.get('/news', function (req, res) {
    db.query("Select * From news", [], function (err, result) {
        if (err) {
            return res.status(400).json({ "error": err });
        }

        res.status(200).json(result);
    });
});

router.get('/carousel', function (req, res) {
    db.query("Select n.id, n.title, n.alias, i.imageUrl, i.title as imageAlt, c.title as category, c.alias as calias, c.color From news as n Left Join category as c on n.categoryId=c.id Left Join Image as i on n.imageId=i.id where carousel=1 order by n.queue LIMIT 10", [], function (err, result) {
        if (err) {
            return res.status(400).json({ "error": err });
        }
        res.status(200).json(result);
    });
});

router.get('/carousel/:category', function (req, res) {
    db.query("Select n.id, n.title, n.alias, i.imageUrl, i.title as imageAlt, c.title as category, c.alias as calias, c.color From news as n Left Join category as c on n.categoryId=c.id Left Join Image as i on n.imageId=i.id where carousel=1 and c.alias=? order by n.queue LIMIT 10", [req.params.category], function (err, result) {
        if (err) {
            return res.status(400).json({ "error": err });
        }
        res.status(200).json(result);
    });
});

router.get('/editorpick', function (req, res) {
    db.query("Select n.id, n.title, n.description, n.alias, n.publishDate, i.imageUrl, i.title as imageAlt, c.title as category, c.alias as calias, c.color From news as n Left Join category as c on n.categoryId=c.id Left Join Image as i on n.imageId=i.id where editorpick=1 order by n.queue LIMIT 8", [], function (err, result) {
        if (err) {
            return res.status(400).json({ "error": err });
        }
        res.status(200).json(result);
    });
});

router.get('/editorpick/:category', function (req, res) {
    db.query("Select n.id, n.title, n.description, n.alias, n.publishDate, i.imageUrl, i.title as imageAlt, c.title as category, c.alias as calias, c.color From news as n Left Join category as c on n.categoryId=c.id Left Join Image as i on n.imageId=i.id where editorpick=1 and c.alias=? order by n.queue LIMIT 8", [req.params.category], function (err, result) {
        if (err) {
            return res.status(400).json({ "error": err });
        }
        res.status(200).json(result);
    });
});

router.get('/lastnews', function (req, res) {
    db.query("SELECT n.categoryId, n.id, n.title, n.description, n.alias, n.publishDate, i.imageUrl, i.title as imageAlt, c.title as category, c.alias as calias, c.color FROM news n LEFT JOIN image as i ON n.imageId=i.id LEFT OUTER JOIN category c ON (n.categoryId = c.id) GROUP BY n.categoryId, n.id, n.title, n.description, n.alias, n.publishDate, i.imageUrl, imageAlt, category, calias, c.color HAVING COUNT(*) < 2", [], function (err, result) {
        if (err) {
            return res.status(400).json({ "error": err });
        }
        res.status(200).json(result);
    });
});

router.get('/lastnews/:category', function (req, res) {
    db.query("Select n.id, n.title, n.description, n.alias, n.publishDate, i.imageUrl, i.title as imageAlt, c.title as category, c.alias as calias, c.color From news as n LEFT OUTER JOIN category c ON (n.categoryId = c.id) Left Join Image as i on n.imageId=i.id GROUP BY n.categoryId, n.title HAVING COUNT(*) < 2 where editorpick=1 and c.alias=? order by n.queue LIMIT 8", [req.params.category], function (err, result) {
        if (err) {
            return res.status(400).json({ "error": err });
        }
        res.status(200).json(result);
    });
});

module.exports = router;


