var ldap = require('ldapjs');
var client = ldap.createClient({
    url: 'ldap://ldap.forumsys.com:389'
});

var base = 'cn=read-only-admin,dc=example,dc=com';
var password = 'password';
var username = "testuser22";

client.bind(base, password, function(err) {
    if(err){
        console.log('Error occurred while binding', err);
    }else {
        console.log("success");


        var search_options = {
            scope: 'sub',
            filter: '(&(objectClass=*)(CN=' + username + '))',
            attributes: ['dn', 'sn', 'cn']
        };
        client.search(base, search_options, function (err, res) {
            if (err) {
                console.log('Error occurred while ldap search');
            } else {
                res.on('searchEntry', function (entry) {
                    console.log('Entry', JSON.stringify(entry.object));
                });
                res.on('searchReference', function (referral) {
                    console.log('Referral', referral);
                });
                res.on('error', function (err) {
                    console.log('Error is', err);
                });
                res.on('end', function (result) {
                    console.log('Result is', result);
                });
            }
        });


    }
});
