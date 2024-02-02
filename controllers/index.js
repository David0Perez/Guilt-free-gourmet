const router = require('express').Router();

//We connect it to the main route of the application
const mainRoute = require('./main-routes');

router.use('/', mainRoute);

module.exports = router;