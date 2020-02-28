const express = require("express");

const playlistData = __dirname + "/../../models/data.json";

const playlist = require(playlistData); // add helper file in document

const router = express.Router();

/**
 * Get all the books but with fewer properties/keys
 */
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

// /**
//  * Get playlist by id
//  */
// router.get("/:id", (req, res) => {
//   const found = playlists.some(playlist => playlist.id === req.params.id);
//   if (found) {
//     res.json(playlists.filter(playlist => playslist.id === req.params.id));
//   } else {
//     res
//       .status(400)
//       .json({ errorMessage: `Playlist with ID:${req.params.id} not found` });
//   }
// });

module.exports = router;
