import { useState, useEffect } from "react";
import "../styles/Home.css";
import Carousel from "t-a-e-3d-carousel-reactjs";
import Parse from "parse/dist/parse.min.js";

import HomeCard from "./HomeCard";
import Gallery from "./Gallery";
import Header from "./Header";
import CovidComponent from "./CovidComponent";
import Notes from "./Notes";
import Report from "./Report";
import MonthlyReport from "./MonthlyReport";
import OnlineCovidSection from "./OnlineCovidSection";
import ForTheFirstTime from "./ForTheFirstTime";
import UnionMembers from "./UnionMembers";
import Alumni from "./Alumni";
import Family from "./Family";

const Home = () => {
  const [array, setArray] = useState([]);

  useEffect(() => {
    (async () => {
      const query = new Parse.Query("Post");
      const post = await query.findAll();
      // console.log(post)
      setArray(post);
    })();
    return () => {};
  }, []);

  return (
    <center>
      <Header />
      <div>
        <div>
          <p className="quote">
            Pendulum - An apparatus consisting of an object mounted so that it
            swings freely under the influence of gravity. 2020 - 21
          </p>
        </div>
      </div>

      <center>
        <Notes />
        <HomeCard title="malayalam" heading={array} />
        <HomeCard title="english" heading={array} />
        <HomeCard title="hindi" heading={array} />
        <Gallery />
        <CovidComponent />
        <OnlineCovidSection />
        <Alumni />
        <Report />
        <ForTheFirstTime />
        <Family />
        <UnionMembers />

        <h1 className="text-center">THANKYOU</h1>
        <footer class="bg-gray-200 text-center dark:bg-gray-700 lg:text-left">
          <div class="p-4 text-center text-gray-700 dark:text-gray-200">
            © 2023 Copyright:
            <span class="ml-2 text-gray-800 dark:text-gray-400">
              Dr. Padiar Memorial Homeopathic Medical College
            </span>
          </div>
        </footer>
      </center>
    </center>
  );
};

export default Home;
