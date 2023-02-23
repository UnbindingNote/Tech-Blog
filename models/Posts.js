const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Posts extends Model {}

Posts.init(
    {

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'shop',
    }
);

module.exports = Posts;