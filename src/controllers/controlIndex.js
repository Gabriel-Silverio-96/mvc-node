module.exports.index = (app, req, res) => {
    //Connection data base
    const connection = app.config.dataBase();    
    //Model query
    const model = new app.src.models.modelDAO(connection);

    model.getList((err, result) => {
        const links = require('../views/includes/includeLinksHead')
        //res.send(result)        
        res.render('../src/views/index', {data: 'Hello my friend', includeLinksHead: links});        

        if(err != null) {
            console.log(err);
            console.error(err.sqlMessage);
        };
    });
};