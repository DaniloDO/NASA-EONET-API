import express from "express" ;
import dotenv from "dotenv"; 
import eonetRouter from "./routes/eonetRoutes.js";
import userRouter from "./routes/userRoutes.js";
import mongoConnection from "./database/mongoConfig.js";
import cookieParser from 'cookie-parser';

dotenv.config();

//Handle MongoDB connection
mongoConnection;

const app = express();
const port = process.env.PORT || 3000;

// Apply middlewares
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: true}));
app.use('/routes', eonetRouter);
app.use('/api/users', userRouter);

app.set("json spaces", 2);

// Default route to verify the server is running
app.get('/', (req, res) => {
    res.send('EONET API Service is running!');
});

app.listen(port, () => console.log(`listening on port:${port}`))

