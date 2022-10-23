const Sequelize = require('sequelize')
const {sequelize} = require('../DB/mySql')


const CartItem = sequelize.define('cartItem',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allownull: false,
        primaryKey: true
    },
    quantity: Sequelize.INTEGER
})

module.exports = {CartItem}