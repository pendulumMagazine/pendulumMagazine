import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";
import April from "./Monthlyreports/April";
import Aug from "./Monthlyreports/Aug";
import Dec from "./Monthlyreports/Dec";
import Feb from "./Monthlyreports/Feb";
import Jul from "./Monthlyreports/Jul";
import Jun from "./Monthlyreports/Jun";
import Mar from "./Monthlyreports/Mar";
import Mar2021 from "./Monthlyreports/Mar2021";
import May from "./Monthlyreports/May";
import Sept from "./Monthlyreports/Sept";

const MonthlyReport = () => {
  const months = [
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September / October",
    "December",
    `March'21`,
  ];

  const [selected, setSelected] = useState("February");
  const navigate = useNavigate();

  return (
    <>
      <center className="">
        <p className="cursor backButton" onClick={() => navigate(-1)}>
          &#x1F870;
        </p>
        <p className="family mt-10">
          റിപ്പോർട്ട് {"("}Report{")"}
        </p>
        <div>
          <div className="sm:flex justify-center flex-wrap">
            {months.map(function (month, index) {
              return (
                <div
                  onClick={() => setSelected(month)}
                  className="hover:text-blue-700 mx-2 hover-underline-animation"
                >
                  {month.toUpperCase()}
                </div>
              );
            })}
          </div>
          <hr style={{ maxWidth: "80%" }} />
        </div>

        <div className="container">
          {selected === "February" ? <Feb /> : null}
          {selected === "March" ? <Mar /> : null}
          {selected === "April" ? <April /> : null}
          {selected === "May" ? <May /> : null}
          {selected === "June" ? <Jun /> : null}
          {selected === "July" ? <Jul /> : null}
          {selected === "August" ? <Aug /> : null}
          {selected === "September / October" ? <Sept /> : null}
          {selected === "December" ? <Dec /> : null}
          {selected === "March'21" ? <Mar2021 /> : null}
        </div>
      </center>
    </>
  );
};

export default MonthlyReport;
