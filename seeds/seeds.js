// Double check on the API cause i think just the nutrition facts are added

const sequelize = require('../config/connection');
const { User, Recipes, Comments } = require('../models');

const userData = require('./userData.json');
const recipeData = require('./recipeData.json');
const commentData = require('./commentData.json');

const seedDatabase = async ()=>{
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    for (const recipe of recipeData){
        await Recipes.create({
            ...recipe,
            user_id: users[Math.floor(Math.random() * users.length)].id,
        });
    };

    for (comment of commentData){
        await Comments.create({
            ...comment,
            user_id: users[Math.floor(Math.random() * users.length)].id,
        });
    };

    process.exit(0);

};

seedDatabase();