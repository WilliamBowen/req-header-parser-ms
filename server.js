var express = require("express")

var app = express()

app.get('/', function(req, res) {
  var ip = req.headers['x-forwarded-for']
  var language = req.headers['accept-language'].split(',')[0]
  var software = req.headers['user-agent'].match(/\(([^)]+)\)/)[1]

  var identity = {
    'ipaddress' : ip,
    'language' : language,
    'software' : software
  }
  res.send(JSON.stringify(identity))
})
app.listen(process.env.PORT || 8080, function() {
  console.log("app listening on port 8080")
})