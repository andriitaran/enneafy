const express = require("express");

const playlistData = __dirname + "/../../models/data.json";

const playlist = require(playlistData); // add helper file in document

const router = express.Router();

router.get("/", (req, res) => {
  const playlistData = playlist.map(playlist => {
    return {
      id: playlist.id,
      img: playlist.img,
      src: playlist.src
    };
  });
  res.json(playlistData);
});

module.exports = router;
