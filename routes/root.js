module.exports = function(app) {
    app.get('/', function(req, res) {
        res.render('index.ejs');
    });
    app.get('/new', function(req, res) {
        res.render('new.ejs');
    });
    app.get('/view', function(req, res) {
        res.render('view.ejs');
    });
    app.get('/view/:id', function(req, res) {
        res.render('viewSingle.ejs');
    });
}
