const { default: axios } = require("axios");
const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/api/stories", async (req, res) => {
  try {
    const { data } = await axios.get(
      "https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=H7lkjWOSEbUoMxdBLhX5z1BLiEjJAD8P"
    );

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(4000, () => console.log("Server listening on port 4000!"));
