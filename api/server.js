import dotenv from "dotenv";
import app from "./src/app.js";

dotenv.config();

const port = process.env.PORT || 5000;

app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`);
});
