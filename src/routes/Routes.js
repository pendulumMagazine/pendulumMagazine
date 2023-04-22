import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import UploadPost from "../components/UploadPost";
import PersonComponent from "../components/PersonComponent";
import ViewAll from "../components/ViewAll";
import ReadingPage from "../components/ReadingPage";
import ViewAllImages from "../components/ViewAllImages";
import Header from "../components/Header";
import MonthlyReport from "../components/MonthlyReport";
import Truetest from "../components/test";
import CardPage from "../components/CardPage";
import OnlineCovidGallery from "../components/OnlineCovidGallery";
import OnlineCovidData from "../components/OnlineCovidData";
import AlumniDet from "../components/AlumniDet";
import FamilyGallery from "../components/FamilyGallery";

const Routing = () => {
  return (
    <div>
      {/* <Header /> */}
      <BrowserRouter>
        <div>
          <Routes>
            <Route
              path="/onlinecovidgallery/:id"
              element={<OnlineCovidGallery />}
            />
            <Route path="/onlinecoviddata/:id" element={<OnlineCovidData />} />
            <Route path="/alumniDet/:id" element={<AlumniDet />} />
            <Route path="/family/:id" element={<FamilyGallery />} />

            <Route path="/" element={<Home />} />
            <Route path="/insert" element={<UploadPost />} />
            <Route path="/test" element={<PersonComponent />} />
            <Route path="/viewall/:catogory" element={<ViewAll />} />
            <Route path="/read/:id" element={<ReadingPage />} />
            <Route path="/gallery" element={<ViewAllImages />} />
            <Route path="/monthlyreports" element={<MonthlyReport />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default Routing;
