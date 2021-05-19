const {Author} = require('../models/author.model');

module.exports.createAuthor = (request, response) => {
    const { name } = request.body;
    Author.create({
        name
    })
        .then(author => response.json({Author: author}))
        .catch(err => response.json(err));
}
module.exports.findAuthors = (request, response) => {
    Author.find({}).sort({name:-1})
        .then(authors => response.json({ Authors: authors }))
        .catch(err => response.json({ message: "Something went wrong", error: err }));
};
module.exports.findOneAuthor = (request, response) =>{
    Author.findOne({_id: request.params.id})
        .then(author => response.json({Author: author}))
        .catch(err => response.json(err))
}
module.exports.updateOneAuthor = (request, response) => {
    Author.findOneAndUpdate({_id: request.params.id}, request.body, {new:true, runValidators:true})
        .then(updatedAuthor => response.json({ Author: updatedAuthor }))
        .catch(err => response.json(err))
}
module.exports.deleteOneAuthor = (request, response) => {
    Author.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}