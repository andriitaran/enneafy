const express = require("express");
const app = express();
require("dotenv").config();
const { PORT, BACKEND_URL } = process.env;
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// get
const playlistData = require("./routes/api/playlists");
app.use("/api/playlists", playlistData);

// start the server and listen on port 5000
app.listen(PORT, () => {
  console.log(`server is running at: ${BACKEND_URL}:${PORT}`);
});
