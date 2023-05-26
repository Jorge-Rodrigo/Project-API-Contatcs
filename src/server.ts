import app from "./app";
import "dotenv/config";
import { AppDataSource } from "./data-source";

const PORT = process.env.PORT || 3000;

AppDataSource.initialize()
  .then(() => {
    console.log("database connected");
    app.listen(PORT, async () => {
      console.log("server is running");
    });
  })
  .catch((err) => {
    console.log(err);
  });
