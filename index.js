const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const app = express()
const port = 3000; 
const { sequelize } = require('./models')

const publicRouter = require('./router/publicRouter');
const { errorMiddleWare } = require('./middleware/errorMiddleware');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(cors());

app.use(publicRouter)

app.use((req, res) => {
    res.status('404').json({code : 400, message : "API Not Found"});
})

app.use(errorMiddleWare)

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});