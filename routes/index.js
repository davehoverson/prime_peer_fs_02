var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var jsonquery = require('json-query');

var fileLocation = path.join(__dirname, '../models/cute.json');

console.log(fileLocation);

//console.log(fileLocation);


/* GET home page. */
router.get('/', function(req, res, next) {
      res.sendFile(path.join(__dirname, "../views/index.html"))
});

router.get('/cuties/:id?', function(req, res, next){

      var pics = req.params.id;

      console.log(fileLocation);

      fs.readFile(fileLocation, function(err, data){

            var obj = JSON.parse(data);

            console.log(pics);

            var query = getJsonQueryString('id', pics);

            if(pics){
                  var cutie = jsonquery(query, {data: obj});
                  //console.log(worker);

                  //var worker = obj[id];
                  res.json(cutie.value);
            } else {
                  res.json(obj);
            }

      })

});

function getJsonQueryString(key, value){
      var queryString = '[' + key + '=' + value + ']';
      console.log('Generate query string: ' + queryString);
      return queryString;
}

module.exports = router;
