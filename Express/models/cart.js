const Sequelize = require('sequelize')
const {sequelize} = require('../DB/mySql')


const Cart = sequelize.define('cart',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allownull: false,
        primaryKey: true
    }
})

module.exports = {Cart}