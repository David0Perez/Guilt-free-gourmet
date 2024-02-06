const router = require('express').Router();
const { User, Recipes, Comments } = require('../models');
// Import Authentification middleware
const withAuth = require('../utils/auth');

//GET all recipes from an external API => Edamam 



