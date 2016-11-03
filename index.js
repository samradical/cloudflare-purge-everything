var request = require('request');

const P = (() => {

  function purge(email, authKey, zone, callback, version = 'v4') {
    var options = {
      url: `https://api.cloudflare.com/client/${version}/zones/${zone}/purge_cache`,
      method: 'DELETE',
      headers: {
        'X-Auth-Email': email,
        'X-Auth-Key': authKey
      },
      json: { purge_everything: true }

    };

    //err, re, body
    request(options, callback);
  }

  return {
    purge: purge
  }

})()

module.exports = P
