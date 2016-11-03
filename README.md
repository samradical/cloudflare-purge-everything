#Example

`
const PURGE = require('@samelie/cloudflare-purge-everything')

PURGE.purge(
  'email',
  'apiKey',
  'zone',
  (res, err, body)=>{
    console.log(body);
  }
)

`

To get the zone, select your website in cloudflare and open developer console