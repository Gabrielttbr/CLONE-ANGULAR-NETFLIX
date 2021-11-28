
const Sequelize = require('sequelize');

//Conectando com bancos dados mysql
const sequelize = new Sequelize('netflix','root','', {
    host: "localhost",
    dialect: 'mysql'
});
//Testando a conexão 
//Then 
sequelize.authenticate().then(function (){
   console.log("Conctado com sucesso!")
}).catch(function(){
    console.log("Falha ao se conectar: "+erro)
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize   
}