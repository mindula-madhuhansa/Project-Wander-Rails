import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import TripPlanPage from "./pages/TripPlanPage";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/plan" element={<TripPlanPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
