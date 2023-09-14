var express = require("express");
var axios = require("axios");

var router = express.Router();

router.get("/chat", async function (req, res, next) {
  const API_KEY = "ENTER_OPENAI_API_KEY";
  const API_URL = "https://api.openai.com/v1/chat/completions";

  const destination = req.query["destination"];
  const numberOfDays = req.query["n"];

  try {
    const response = await axios.post(
      API_URL,
      {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: `Generate a comprehensive travel itinerary and sightseeing plan for a ${numberOfDays}-day trip 
            to ${destination}. Include a day-by-day breakdown of activities, attractions, and recommended dining options.
             At the end, provide a comma-separated list of the sightseeing locations mentioned in the itinerary. (Dont add anything else in this line)
            `,
          },
        ],
      },

      {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );

    const data = response.data.choices[0].message;
    const dataStrs = data.content.split("\n");
    const locations = dataStrs[dataStrs.length - 1];
    const sightseeingLocations = locations.split(", ");
    if (
      sightseeingLocations[0].toLowerCase().startsWith("sightseeing locations:")
    ) {
      sightseeingLocations[0] = sightseeingLocations[0].substring(23);
    }

    const message = dataStrs.splice(0, dataStrs.length - 1);

    res.send({
      message,
      sightseeingLocations,
    });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

module.exports = router;
