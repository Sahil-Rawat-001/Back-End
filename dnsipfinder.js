const dns = require('dns');

const hostname = 'google.com';

dns.lookup( `${hostname}`, (err,address) => {

    if(err) throw err;
    console.log('IP address: ', address);
})

