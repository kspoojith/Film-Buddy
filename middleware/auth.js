const express = require("express")

const router = express.Router()

function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next()
    }
    res.redirect('/login')
}

function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return res.redirect('/')
    }
    next()
}

function isAdmin(req, res, next) {
    if (req.isAuthenticated() && req.user.isAdmin) {
        return next();
    }
    return res.redirect('/login'); // Redirect to login if not an admin
}



module.exports = {
    checkAuthenticated,
    checkNotAuthenticated,
    isAdmin
}
