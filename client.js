var ldap = require('ldapjs');
var client = ldap.createClient({
    url: 'ldap://ldap.forumsys.com:389'
});

client.bind('cn=read-only-admin,dc=example,dc=com', 'password', function(err) {
    if(err){
        console.log('Error occurred while binding', err);
    }else {
        console.log("success");

        // var base = 'cn=admin,dc=example,dc=com';
        // var search_options = {
        //     scope: 'sub',
        //     filter: '(&(objectClass=*)(CN=' + username + '))',
        //     attrs: 'memberOf'
        // };
        // client.search(base, search_options, function (err, res) {
        //     if (err) {
        //         console.log('Error occurred while ldap search');
        //     } else {
        //         res.on('searchEntry', function (entry) {
        //             console.log('Entry', JSON.stringify(entry.object));
        //         });
        //         res.on('searchReference', function (referral) {
        //             console.log('Referral', referral);
        //         });
        //         res.on('error', function (err) {
        //             console.log('Error is', err);
        //         });
        //         res.on('end', function (result) {
        //             console.log('Result is', result);
        //         });
        //     }
        // });


    }
});
