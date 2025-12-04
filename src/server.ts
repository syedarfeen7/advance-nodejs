import { config } from "./config/env";

const PORT = config.PORT || 5000;

const express = require("express");
const app = express();

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
