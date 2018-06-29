require('dotenv').config()

module.exports = {
  "development": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_DATABASE,
    "host": process.env.DB_HOST || "127.0.0.1",
    "dialect": "postgres",
    "ssl": true,
    "dialectOptions": {
      "ssl": true
    }
  },
  "production": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_DATABASE,
    "host": process.env.DB_HOST || "127.0.0.1",
    "port": 5432,
    "dialect": "postgres",
    "ssl": true,
    "dialectOptions": {
      "ssl": true
    }
  }
}
