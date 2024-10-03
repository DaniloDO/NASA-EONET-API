import express from "express" ;
import dotenv from "dotenv"; 
import eonetRouter from "./routes/eonetRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Apply middlewares
app.use(express.json());
app.use('/routes', eonetRouter);

app.set("json spaces", 2);

// Default route to verify the server is running
app.get('/', (req, res) => {
    res.send('EONET API Service is running!');
});

app.listen(port, () => console.log(`listening on port:${port}`))

