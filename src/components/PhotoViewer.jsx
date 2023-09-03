import useSuggestionState from "../hooks/useSuggestionState";
import Placeholder from "../assets/Placeholder.png";

export default function PhotoViewer() {
  const isLoading = useSuggestionState((state) => state.isLoading);
  const isPhotoLoading = useSuggestionState((state) => state.isPhotoLoading);
  const sightseeingLocations = useSuggestionState(
    (state) => state.sightseeingLocations
  );

  return (
    <div className="flex flex-wrap bg-white drop-shadow-md rounded-2xl mx-4 w-full">
      {isPhotoLoading ? <img src={Placeholder} alt="placeholder" /> : ""}
      {isLoading ? (
        <img src={Placeholder} alt="placeholder" />
      ) : (
        <>
          {sightseeingLocations.map((location, i) => (
            <img
              key={i}
              src={
                location
                  ? `http://localhost:3000/places/photo?query=${location}`
                  : `https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png`
              }
              className="w-1/3 aspect-square object-cover"
              alt={location}
            />
          ))}
        </>
      )}
    </div>
  );
}
