const app = require("./config");
const sequelize = require('./conexionDB/conexSqlize');

async function inicio(){
    await app.listen(5000, ()=>{
        console.log('Server on port 5000');
    })
}



inicio();