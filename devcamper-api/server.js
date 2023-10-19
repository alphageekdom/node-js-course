const express = require('express');
require('dotenv').config({ path: './config/config.env' });
const port = process.env.PORT || 5000;

// Route files
const bootcamps = require('./routes/bootcamps');

const app = express();

// Mount routers
app.use('/api/v1/bootcamps', bootcamps);

app.listen(port, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port: ${port}`)
);
