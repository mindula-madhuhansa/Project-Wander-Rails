import ChatBox from "../components/ChatBox";
import PlanTripUI from "../components/PlanTripUI";
import PhotoViewer from "../components/PhotoViewer";

export default function TripPlanPage() {
  return (
    <div className="bg-default p-8 h-full">
      <div className="flex flex-row ">
        <div className="flex flex-col">
          <PlanTripUI />
          <ChatBox />
        </div>
        <PhotoViewer />
      </div>
    </div>
  );
}
