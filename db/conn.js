// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
const Sequelize = require('sequelize');

let conn = null;

if(process.env.JAWSDB_URL){

    // Creates mySQL connection using Sequelize
    conn = new Sequelize(process.env.JAWSDB_URL, {
        host: 'fugfonv8odxxolj8.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        dialect: 'mysql',
        pool: {
            max: 5,
            min: 0,
            idle: 10000,
        },
        define: {
            // don't add the timestamp attributes (updatedAt, createdAt)
            timestamps: false,
            // disable the modification of tablenames; By default, sequelize will automatically
            // transform all passed model names (first parameter of define) into plural.
            freezeTableName: true,
        },
    });
} else{
    // Creates mySQL connection using Sequelize
    conn = new Sequelize('bmi', 'root', '', {
        host: 'localhost',
        dialect: 'mysql',
        pool: {
            max: 5,
            min: 0,
            idle: 10000,
        },
        define: {
            // don't add the timestamp attributes (updatedAt, createdAt)
            timestamps: false,
            // disable the modification of tablenames; By default, sequelize will automatically
            // transform all passed model names (first parameter of define) into plural.
            freezeTableName: true,
        },
    });

}

// Exports the connection for other files to use
module.exports = conn;
