const {app, port} = require('./config/server');
app.listen(port, console.log('Server runnig port ' + port));