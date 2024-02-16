const router = require('express').Router();
const { User, Recipes, Comments } = require('../models');
// Import Authentification middleware
const withAuth = require('../utils/auth');

//Route for the homepage
router.get('/', async (req, res)=>{
   res.render('homepage', {
        logged_in: req.session.logged_in
   })
})

router.get('/discoverRecipes', async (req, res) =>{
    if(!req.session.logged_in){
        res.redirect('/login');
        return;
    };

    try{
        // GET all recipes and JOIN with user Data
        const recipeData = await Recipes.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        });

        // Serialize data so it's gonna be easier to read it.
        const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));

        // We pass the serialized data and session into template
        res.render('discoverRecipes', {
            recipes,
            logged_in: req.session.logged_in
        });
    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
});

//Single recipe Card => Comments on it.
router.get('/recipe/:id', async (req, res)=>{
    try{
        const recipeData = await Recipes.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
                {
                    model: Comments,
                },

            ],
        });

        const recipe = recipeData.get({ plain: true });
        console.log(recipe)

        res.render('viewSavedRecipes', {
            ...recipe,
            currentRecipeId: req.params.id,
            logged_in: req.session.logged_in
        });
    }catch(err){
        res.status(500).json(err);
    }
});

//Use withAuth middleware to prevent access to route
    router.get('/profile', withAuth, async (req, res)=>{
    try{
        //find the logged in user based on the session ID.
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password']},
            // Comments model as well?
            include: [{ model: Recipes }],
        });

        const user = userData.get({ plain: true });

        res.render('userprofile', {
            ...user,
            logged_in: true
        });
    }catch(err){
        res.status(500).json(err);
    }
});

//If the user is already logged in, he can have access to the profile session.
router.get('/login', (req, res)=>{
    if(req.session.logged_in){
        res.redirect('/profile');
        return;
    }

    res.render('login');
});

router.get('/createRecipe', withAuth, (req, res)=>{
   //need to add with auth
   if(req.session.logged_in){
    res.redirect('/createRecipe');
    return;
    }

    res.render('createRecipe');
});
module.exports = router;







