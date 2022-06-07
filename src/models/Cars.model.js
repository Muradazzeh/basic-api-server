
"use strict";

// Our table schema
const Car = (sequelize, DataTypes) =>
    sequelize.define("Car", {
        CarName: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        EngineSize: {
            type: DataTypes.STRING,
        },
        Manufacturer: {
            type: DataTypes.STRING,
        },
       Country: {
            type: DataTypes.STRING,
        },

    });

module.exports = Car;