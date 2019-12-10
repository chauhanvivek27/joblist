const express = require('express');
const app = express();
const render= require('./dist/render');
const path = require('path');

// Serving static files
app.use('/asset', express.static(path.resolve(__dirname, 'asset')));
app.use('/media', express.static(path.resolve(__dirname, 'media')));

// hide powered by express
app.disable('x-powered-by');
// start the server
app.listen(process.env.PORT || 3000);

// our apps data model
const data = require('./asset/data.json');

let initialState = {
  isavailable: false,
  data: data
}

const ssrrender = require('./dist/renderer').default;



// server rendered home page
app.get('*', (req, res) => {
    const { preloadedState, pageContent}  = ssrrender(initialState, req)
    const response = render("Server Rendered Page", preloadedState, pageContent)
    res.setHeader('Cache-Control', 'assets, max-age=604800')
    res.send(response);
  });
  