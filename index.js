import express from "express"; 
import db from "./config/database.js";
import route from "./routes/index.js";
import bodyParser from "body-parser";

const app = express();


app.use(bodyParser.json());
app.use("/api",route);

if (process.env.NODE_ENV !== 'test') {
    app.listen(5000, () => console.log('Server Running at port 5000'));
  }

export default app;