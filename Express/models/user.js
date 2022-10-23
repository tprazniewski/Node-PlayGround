const Sequelize = require('sequelize')


 const sequelize = Sequelize.define(user,{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allownull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allownull: false,
    },
    surname: {
        type: Sequelize.STRING,
        allownull: false,
    },
    age: {
        type: Sequelize.INTEGER,
        allownull: false,
    }
 })

 module.exports = {sequelize}