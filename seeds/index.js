const sequelize = require('../config/connection');
//Requiring file for any local data that we wanna add for it.

const seedAll = async () =>{
    await sequelize.sync({ force: true });


    process.exit(0);
};

seedAll();