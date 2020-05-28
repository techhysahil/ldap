var config=require('./config.json');
const ldapClient = require('simple-ldap-client')

const url = config.url;
const baseDn = 'DC=dcloud,DC=cisco,DC=com'
const upn = config.upn;
const password = config.password;

// init client
let ldap = new ldapClient(url, baseDn)

// attempt authentication
ldap.authenticate({ upn, password })
    .then(() => {
        console.log('authentication successful')
    })
    .catch(error => {
        console.log(error)
    })
