const express = require('express');
const currencyRoutes = require('./v1/routes/currencyRoutes');

const app = express();
const cors = require('cors');
const port = 3000;

//middleware, idk what this does
app.use(express.json());

app.use(cors());

//routes | www.localhost:3000/api/v1/currency
app.use('/api/v1/currency', currencyRoutes);

//output form get request
app.get('/', (req, res) => {
  res.send('Hello World!');
});

//listening port and logging if the connection works
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
