import express from "express";
import { rootHandler, helloHandler } from "./handlers";

const app = express();
const port = process.env.PORT || "8000";

app.get("/", rootHandler);
app.get("/hello/:name", helloHandler);

try {
  app.listen(port, () => console.log(`Server is listening on ${port}`));
} catch (err) {
  console.error(err);
}
