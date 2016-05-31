/**
 * SismoController
 *
 * @description :: Server-side logic for managing sismoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	latest: function (req,res) {
		var http = require('http');
		var parseString = require('xml2js').parseString;

	    var options = {
        	hostname: "www.sismos.cl",
	        path: '/xml_data.xml'
	    };

	    var gsaReq = http.get(options, function (response) {
	        var completeResponse = '';
	        response.on('data', function (chunk) {
	            completeResponse += chunk;
	        });
	        response.on('end', function() {
	            console.log(completeResponse);
	            parseString(completeResponse, function (err, result) {
			    	return res.send(JSON.stringify(result["markers"]["marker"]));
				});  
	        })
	    }).on('error', function (e) {
	        console.log('problem with request: ' + e.message);
	    });
		
  	}
};