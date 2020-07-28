var OTPAuth = require("otpauth")
var QRCode = require('qrcode')
const express = require('express')
var path = require('path');
require('dotenv').config()
const app = express()
const port = 3000

// Create a new TOTP object
let totp = new OTPAuth.TOTP({
    issuer: 'FileStore',
    label: process.env.DOMAIN,
    algorithm: 'SHA1',
    digits: 6,
    period: 30,
    secret: process.env.FS_SECRET // or "OTPAuth.Secret.fromB32('NB2W45DFOIZA')"
});

console.log(totp.generate())

// Generate a token.
setInterval(function() {
    console.log(totp.generate())
}, 5000)

// Convert to Google Authenticator key URI.
//   otpauth://totp/ACME:AzureDiamond?issuer=ACME&secret=NB2W45DFOIZA&algorithm=SHA1&digits=6&period=30
let uri = totp.toString(); // or "OTPAuth.URI.stringify(totp)"

QRCode.toString(uri, { type: 'terminal' }, function(err, url) {
    console.log(url)
})

app.get('/', function(req, res) {
    console.log(req)
    res.sendFile(path.join(__dirname + '/login.html'))
})

app.get('/upload/:key', function(req, res) {
    if (req.params["key"] == totp.generate()) {
        res.sendFile(path.join(__dirname + '/upload.html'))
    } else {
        res.sendFile(path.join(__dirname + '/login.html'))
    }
})

app.get('/download/:key', function(req, res) {
    if (req.params["key"] == totp.generate()) {
        res.sendFile(path.join(__dirname + '/download.html'))
    } else {
        res.sendFile(path.join(__dirname + '/login.html'))
    }
})

app.listen(port)