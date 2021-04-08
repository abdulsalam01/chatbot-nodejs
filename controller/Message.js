'use strict';

const connection = require('../config');
const table = "messages";

const postReply = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    const message = req.body.message;

    if (message) {

        const data = {
            id_rand_user: req.body.counter,
            message: message
        }
    
        connection.query(`INSERT INTO ${table} SET ?`, data, (err, response) => {
            if (err) throw err;
            
            res.status(200).json({data: message, type: 'user', success: true});
        })
    } else {
        res.status(200).json({data: message, type: 'user', success: false});
    }
}

const counter = (req, res, next) => {
    connection.query(`SELECT COUNT(*) cnt FROM ${table}`, (err, response) => {
        if (err) throw err;

        res.status(200).json({data: response[0].cnt + 1})
    });
}

const getById = (req, res, next) => {
    const id = req.params.id;
    connection.query(`SELECT * FROM ${table} WHERE id = ${id}`, (err, rows) => {
        if (err) throw err;

        res.status(200).json({data: rows, success: true});
    });
}

const removeById = (req, res, next) => {
    const id = req.params.id;
    connection.query(`DELETE FROM ${table} WHERE id = ?`, id, (err, rows) => {
        if (err) throw err;

        res.status(200).json({data: `successfully delete id = ${id}`})
    });
}

module.exports = {
    _removeById: removeById,
    _postReply: postReply,
    _getById: getById,
    _counter: counter
}