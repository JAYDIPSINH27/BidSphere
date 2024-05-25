/* external */
require('dotenv').config();
const express = require('express');
// const cors = require('cors');
const app = express();
const bodyParser = require('body-parser')
/* controller */
const paymentRouter = require('./src/routes/payment')
/* middleware */
const corsMiddleware = require('./src/middleware/corsMiddleware');

app.use(corsMiddleware);
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));

app.use('/api', paymentRouter.routes)

const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`server started @ ${port}`)
})
