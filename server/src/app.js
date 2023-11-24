import express from "express";
import cors from "cors";
import indexRoutes from './routes/idex.routes.js';


const app = express();

app.use(express.json());
app.use(cors({
    origin: "http://localhost:4200",
    credentials: true
}));

export default app;
app.use(indexRoutes);