var express = require("express");
var axios = require("axios");

var router = express.Router();

router.get("/photo", async function (req, res, next) {
  try {
    const query = req.query["query"];

    const API_KEY = "AIzaSyASErZZbYOqzXTylh9o3nVmia8O1OBILE0";
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?inputtype=textquery&input=${query}&key=${API_KEY}&fields=photo`
    );

    const photo = response.data.candidates[0].photos[0];
    var url = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=${photo.width}&photo_reference=${photo.photo_reference}&key=${API_KEY}`;
    res.redirect(url);
  } catch (error) {
    res.send([]);
  }
});

module.exports = router;
