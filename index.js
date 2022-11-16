import "dotenv/config";
import './database/connectdb.js'
import express from 'express';
import authRouter from './routes/auth.route.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('/api/v1', authRouter);



app.listen(PORT, () => console.log(`Server on port: ${PORT}`));