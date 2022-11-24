// Modules
var logger = require('./utils/logger.js')()
var fs = require('fs');
if (fs.existsSync('newrelic.js')) {
  logger.info("Using newrelic")
  require('newrelic');
}
var express = require('express')
var morgan = require('morgan')
var constants = require('./utils/constants.js')

// App
var app = express()
app.use(morgan('dev'))
app.use(constants.API_PREFIX + '/templates', express.static('templates'))
app.use(express.static('public'))

app.get('/ping', (req, res) => {
  res.send('pong');
})
// Server
var server = app.listen(process.env.DEFAULT_PORT || 8080, function () {
  logger.info('Server is listening on port %d, env', server.address().port)
})

/**
 * @see {https://jira.corp.adobe.com/browse/EON-6340}
 * @see {https://nodejs.org/docs/latest-v10.x/api/http.html#http_server_keepalivetimeout}
 * @see {https://github.com/envoyproxy/envoy/issues/1979}
 */
server.keepAliveTimeout = 0;
