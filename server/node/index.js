/* external */
const mongoose = require("mongoose");
require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
/* routes */
const paymentRouter = require("./src/routes/payment");
const quesAndAnswerRouter = require("./src/routes/Q&A");
const authRouter = require("./src/routes/auth");
const profileRouter = require("./src/routes/profile");
const tender = require("./src/routes/tender");
/* middleware */
const corsMiddleware = require("./src/middleware/corsMiddleware");
/* db connection */
const dbURL = process.env.DB_URL;
mongoose
  .connect(dbURL)
  .then(() => {
    console.log("connected to db");
  })
  .catch((e) => {
    console.log("Error", e);
  });

/* cors */
app.use(corsMiddleware);
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));

app.use("/api", paymentRouter.routes);
app.use("/q&a", quesAndAnswerRouter.routes);
app.use("/auth", authRouter);
app.use("/profile", profileRouter);
app.use("/tender", tender);

/* server */
const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`server started @ ${port}`);
});
