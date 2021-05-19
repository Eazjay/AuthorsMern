const AuthorController = require('../controllers/author.controller');

module.exports = function(app){
    app.post('/api/authors/new', AuthorController.createAuthor);
    app.get('/api/authors', AuthorController.findAuthors);
    app.get('/api/authors/:id', AuthorController.findOneAuthor);
    app.put('/api/authors/:id/update', AuthorController.updateOneAuthor);
    app.delete('/api/authors/:id/delete', AuthorController.deleteOneAuthor);
}