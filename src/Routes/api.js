const express = require('express');
const userRoutes = express.Router();

const adminController = require('../Controllers/adminController');
const postController = require('../Controllers/postController');
const subAdminController = require('../Controllers/subAdminController');
const userController = require('../Controllers/userController');

userRoutes.get('/adminCreate', adminController.create);
userRoutes.get('/adminRead', adminController.read);
userRoutes.get('/adminDelete', adminController.delete);
userRoutes.get('/adminUpdate', adminController.update);

userRoutes.get('/postCreate', postController.create);
userRoutes.get('/postRead', postController.read);
userRoutes.get('/postDelete', postController.delete);
userRoutes.get('/postUpdate', postController.update);

userRoutes.get('/subAdminCreate', subAdminController.create);
userRoutes.get('/subAdminRead', subAdminController.read);
userRoutes.get('/subAdminDelete', subAdminController.delete);
userRoutes.get('/subAdminUpdate', subAdminController.update);

userRoutes.get('/userCreate', userController.create);
userRoutes.get('/userRead', userController.read);
userRoutes.get('/userDelete', userController.delete);
userRoutes.get('/userUpdate', userController.update);

module.exports = userRoutes;