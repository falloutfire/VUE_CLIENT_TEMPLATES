const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');
const history = require('connect-history-api-fallback');


/*let app = express();
app.use(serveStatic(__dirname + "/dist"));

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Listening on port ' + port)
});*/

const app = express();

const staticFileMiddleware = express.static(path.join(__dirname + '/dist'));

app.use(staticFileMiddleware);
app.use(history({
  disableDotRule: true,
  verbose: true
}));
app.use(staticFileMiddleware);

app.get('/', function (req, res) {
  res.render(path.join(__dirname + '/dist/index.html'));
});

var server = app.listen(process.env.PORT || 8080, function () {
  var port = server.address().port;
  console.log("App now running on port", port);
});
