const express = require('express');
const app = express();

// import path
const path = require('path')

// Create absolute path to dist/ folder
const pathToDistFolder = path.join(__dirname, '..', 'app', 'dist');

// middleware static
const serveStatic = express.static(pathToDistFolder);

//middleware function
const logRoute = (req, res, next) => {
  const time = new Date().toLocaleDateString()
  console.log(`${req.method}: ${req.originalUrl} -${time}`);
  next();
}

app.use(serveStatic);
app.use(logRoute);


const port = 8080;
app.listen(port, () => console.log(`listening at http://localhost:${port}`));