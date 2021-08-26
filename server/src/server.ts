import dotenv from "dotenv";
dotenv.config();

import app from "./app";

const PORT = app.get("port");
app.listen(PORT, async () => {
  console.log(`Express Server running on port ${PORT}`);
});
