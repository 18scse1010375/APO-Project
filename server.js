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

app.get('/env', (req, res) => {
  var obj = {};
  obj.status = 'ok';
  obj.isProd = process.env.IS_PROD;
  obj.currentEnv = process.env.CURRENT_ENV;
  obj.imsClientId = process.env.IMS_CLIENT_ID;
  obj.serviceApiKey = process.env.SERVICE_API_KEY;
  obj.serviceHost = process.env.SERVICE_HOST;
  obj.maxFileSizeMB = process.env.MAX_FILESIZE_IN_MB;
  obj.imsEnvironment = process.env.IMS_ENV;
  res.json(obj);
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
