import { AiOutlineSend } from "react-icons/ai";
import { useEffect, useState } from "react";
import stationsData from "../database/stations.json";
import useSuggestionState from "../hooks/useSuggestionState";
import axios from "axios";

export default function PlanTripUI() {
  const [stations, setStations] = useState([]);
  const [depatureStation, setDepatureStation] = useState("");
  const [arrivalStation, setArrivalStation] = useState("");
  const [depatureDate, setDepatureDate] = useState("2023-10-03");
  const [arrivalDate, setArrivalDate] = useState("2023-10-06");

  const startLoading = useSuggestionState((state) => state.startLoading);
  const suggestionRecv = useSuggestionState((state) => state.suggestionRecv);
  const suggestionErr = useSuggestionState((state) => state.suggestionErr);

  useEffect(() => {
    setStations(stationsData.Stations);
  }, []);

  const handleDataSubmit = async () => {
    console.log(arrivalStation);
    if (
      depatureStation.match(arrivalStation) ||
      Date.parse(depatureDate) === Date.parse(arrivalDate)
    ) {
      alert("Please select valid options!");
      return;
    } else {
      startLoading();
      try {
        const depatureDateD = Date.parse(depatureDate);
        const arrivalDateD = Date.parse(arrivalDate);
        const numberOfDays =
          (arrivalDateD - depatureDateD) / (3600 * 24 * 1000);

        const response = await axios.get(
          `http://localhost:3000/openai/chat?destination=${arrivalStation}&n=${numberOfDays}`
        );

        suggestionRecv(
          response.data.message,
          response.data.sightseeingLocations
        );
      } catch (e) {
        suggestionErr();
      }
    }
  };
  return (
    <>
      <div className="float-left">
        <div className="bg-white rounded-3xl drop-shadow-md shadow-gray-300 p-2">
          <div className="flex p-4 gap-8 items-center">
            <div>
              <p>From</p>
              <select
                defaultChecked="Colombo Fort"
                className="py-2 w-[200px] h-[40px] cursor-pointer"
                value={depatureStation}
                onChange={(e) => setDepatureStation(e.target.value)}
              >
                {stations.map((station) => (
                  <option key={station.id} value={station.name}>
                    {station.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <p>To</p>
              <select
                defaultChecked="Galle"
                className="py-2 w-[200px] h-[40px] cursor-pointer"
                value={arrivalStation}
                onChange={(e) => setArrivalStation(e.target.value)}
              >
                {stations.map((station) => (
                  <option key={station.id} value={station.name}>
                    {station.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <p>Departure Date</p>
              <input
                className="cursor-pointer"
                type="date"
                value={depatureDate}
                onChange={(e) => setDepatureDate(e.target.value)}
              />
            </div>
            <div>
              <p>Arrival Date</p>
              <input
                className="cursor-pointer"
                type="date"
                value={arrivalDate}
                onChange={(e) => setArrivalDate(e.target.value)}
              />
            </div>
            <button
              className="bg-primary hover:bg-secondary duration-300 flex justify-center items-center p-4"
              onClick={handleDataSubmit}
            >
              <AiOutlineSend size={32} color="white" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
