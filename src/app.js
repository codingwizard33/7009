import "dotenv/config";
import express from "express";
import cors from "cors";

import dbConnect from "./config/database.js";
import auth from "./routes/auth.js";
import admin from "./routes/admin.js";
import api from "./routes/api.js";
import { createUser } from "./utils/createUser.js";

dbConnect();

await createUser();

const app = express();
app.use(express.json({ limit: '50mb' }));
app.use(cors({ origin: '*' }));

app.use('/auth', auth);
app.use('/admin', admin);
app.use('/api', api);

app.listen(process.env.PORT || 3002, () => {
    console.log(`The app started on http://localhost:${process.env.PORT}`);
});