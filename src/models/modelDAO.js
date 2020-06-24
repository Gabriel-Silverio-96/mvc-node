function modelMain(connection) {
    this._connection = connection;
};

modelMain.prototype.getList = function(callback) {
    this._connection.query('select * from <myTable>', callback);
};

module.exports = () => {
    return modelMain
};