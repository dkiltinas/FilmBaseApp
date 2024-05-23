const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  database: "filmbasedb",
  username: "filmbase",
  password: "Filmbase1",
  host: "localhost",
  dialect: "mysql",
  port: 3306,
});

const syncModels = async () => {
  try {
    // Test database connection
    await sequelize.authenticate();
    console.log("Database connection test successful");
    // Sync Sequelize models with the database
    await sequelize.sync();
    console.log("Database sync successful");
  } catch (error) {
    console.error("Sync error", error);
  }
};
syncModels();
module.exports = sequelize;
