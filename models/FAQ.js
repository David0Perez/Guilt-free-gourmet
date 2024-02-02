// Section in which the most Frequently Asked Questions are going to be displayed =>
// Stored in database = In that way, the user can have a more general idea about
// the meals. => Local database
// const { Model, DataTypes, DatabaseError } = require('sequelize');
// const sequelize = require('../config/connection');

// class FAQ extends Model {};

// FAQ.init(
//     {
//         id: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//             primaryKey: true,
//             autoIncrement: true,
//         },
//         questions: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
//         answers: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         }
//     },
//     {
//         sequelize,
//         freezeTableName: true,
//         underscored: true,
//         modelName: 'FAQ',
//     }
// );

// module.exports =  FAQ;