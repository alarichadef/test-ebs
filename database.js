const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.RDS_DB_NAME || 'postgres',
                                process.env.RDS_USERNAME || 'postgres',
                                process.env.RDS_PASSWORD || 'postgres',
                                {
                                    host: process.env.RDS_HOSTNAME || 'localhost',
                                    port: process.env.RDS_PORT || 5432,
                                    dialect: 'postgres',
                                    dialectOptions: {
                                        ssl: process.env.DB_SSL == "true"
                                    }
                                });

module.exports = sequelize;