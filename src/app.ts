import "express-async-errors";
import "reflect-metadata";
import express, { Application } from "express";
import { userRoutes } from "./routes/users.routes";
import { handleErrors } from "./errors";
import loginRouter from "./routes/login.routes";
import { contactsRoutes } from "./routes/contacts.routes";
let cors = require("cors");
const app: Application = express();

app.use(express.json());
app.use(cors());

app.use("/users", userRoutes);
app.use("/login", loginRouter);
app.use("/contacts", contactsRoutes);

app.use(handleErrors);

export default app;
