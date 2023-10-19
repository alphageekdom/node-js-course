const express = require('express');
require('dotenv').config({ path: './config/config.env' });
const morgan = require('morgan');
const port = process.env.PORT || 5000;
const connectDB = require('./config/db');
const colors = require('colors');

connectDB();

// Route files
const bootcamps = require('./routes/bootcamps');

const app = express();

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Mount routers
app.use('/api/v1/bootcamps', bootcamps);

const server = app.listen(port, () =>
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port: ${port}`.yellow
      .bold
  )
);

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red.bold);

  // Close server & exit process
  server.close(() => process.exit(1));
});
