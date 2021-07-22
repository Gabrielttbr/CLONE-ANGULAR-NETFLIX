const db = require('./db');

const Post = db.sequelize.define('cadastro',{
    email: {
        type: db.Sequelize.STRING
    },
    senha: {
        type: db.Sequelize.TEXT
    },
})

//Post.sync({force: true})
module.exports = Post;