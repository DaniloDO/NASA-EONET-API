import express from "express" ;
import dotenv from "dotenv"; 

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())

app.set("json spaces", 2);

app.listen(port, () => console.log(`listening on port:${port}`))