var express = require('express');
var app = express();

var port = process.env.PORT || 1337;


app.get('/api/whoami', function(req, res) {
    var ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    var language = req.headers["accept-language"].split(',')[0];
    var software = req.headers['user-agent'].split(') ')[0].split(' (')[1];

    res.json({
      'ipaddress': ipAddress,
      'language': language,
      'software': software
    });
});
app.get('*',function (req, res) {
        res.redirect('/api/whoami');
    });

app.listen(port, function () {
	 console.log("express server running on port : " + port);
});
