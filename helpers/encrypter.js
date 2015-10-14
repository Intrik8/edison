var crypto     = require('crypto');

function encrypt(key, data) {
    var cipher = crypto.createCipher('aes256', key);
    var crypted = cipher.update(data, 'utf-8', 'hex');
    crypted += cipher.final('hex');

    return crypted;
}

function decrypt(key, data) {
    var decipher = crypto.createDecipher('aes256', key);
    var decrypted = decipher.update(data, 'hex', 'utf-8');
    decrypted += decipher.final('utf-8');

    return decrypted;
}

var key = new Buffer('85CE6CCF67FBBAA8BB13479C3A6E084D', 'hex');
var test = {
    "host" : "test",
    "user" : "edison",
    "password" : encrypt(key, 'test'),
    "database" : "Edison"
}
console.log(test);
console.log(crypto.getCiphers());
