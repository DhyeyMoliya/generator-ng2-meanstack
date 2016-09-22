module.exports = function(app) {
    //sample databse of apis
    var api_credentials = {
                username: "User1",
                key: "abc"
            };


    /* GET home page. */
    app.get('/', function(req, res, next) {
        res.sendfile(path.join(__dirname + '/../public/index.html'));
    });
}
