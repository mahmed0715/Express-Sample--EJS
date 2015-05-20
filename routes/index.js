
/*
 * GET home page.
 */
path = require('path');
var fdb = require(path.join(__dirname,'../lib/fake_db'));
exports.index = function(req, res) {
    res.render('index');
};

exports.partials = function(req, res) {
    var name = req.params.name;
    res.render('partials/' + name);
};

exports.object = function(req, res) {
    var name_url = req.params.name_url;
    fdb.findByNameUrl([name_url], function(err, data) {
       console.log("Got:",data);
        if(err || !data || !data.length){
            res.status(404).render('partials/404');
        }
        
        res.render('partials/objectDataView',{data:data[0]});
    });

};