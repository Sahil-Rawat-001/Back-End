// The URL module splits up a web address into readable parts.

const url = require('url');

var adr = 'https://www.google.com/search?q=what+is+a+jet+engine&rlz=1C1ONGR_enIN1083IN1083&oq=what+is+a+jet+engine&gs_lcrp=EgZjaHJvbWUyCQgAEEUYORiABDIHCAEQABiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABDIHCAkQABiABNIBCDU5OTFqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8';

// Parse an address with the url.parse() method,
// it will return a URL object with each part of the address as properties:

const q = url.parse(adr,true);

console.log(q);

// If I need to find out that what query did user pass then I will use query obj to find details

const qdata = q.query;

console.log(qdata.q);
