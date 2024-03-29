// Getting routes from the API folder
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const recipesRoutes = require('./recipesRoutes');
const commentRoutes = require('./commentsRoutes');
const externalRoute = require('./externalRoutes');

router.use('/users', userRoutes);
router.use('/recipes', recipesRoutes);
//These comments are supposed to be displayed with each recipe => Are they really gonna have a route for themselves?
router.use('/comments', commentRoutes);
router.use('/externalAPI', externalRoute);

module.exports = router;