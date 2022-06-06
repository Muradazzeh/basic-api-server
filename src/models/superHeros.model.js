`use strict`

const superHeroes = (sequelize, DataTypes) =>
sequelize.define("superHeroesr", {
    Name: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    superPower: {
        type: DataTypes.STRING,
    },
   isFlying: {
        type: DataTypes.BOOLEAN,
    },
   country: {
        type: DataTypes.STRING,
    },

});

module.exports = superHeroes;