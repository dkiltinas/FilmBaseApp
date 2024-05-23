const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("filmbasedb", "kiltinas", "Grandkhavatari1", {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connected successfully");
  } catch (error) {
    console.error("Error connecting to the database", error);
  }
})();
module.exports = sequelize;
