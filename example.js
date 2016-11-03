const PURGE = require('@samelie/cloudflare-purge-everything')

PURGE.purge('', //user email
  '', //api key
  '', //zone
  (res, err, body)=>{
    console.log(body);
  }
)
