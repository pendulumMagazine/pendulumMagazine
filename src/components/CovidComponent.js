// import { } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../styles/Covid.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import covidPoster from "../elements/covidPoster.jpg";

const CovidComponent = () => {
  const [online, setOnline] = useState(false);
  const imgItems = [
    {
      url: require("../elements/covidElements/offimg1.jpg"),
    },
    {
      url: require("../elements/covidElements/offimg2.jpg"),
    },
    {
      url: require("../elements/covidElements/offimg3.jpg"),
    },
    {
      url: require("../elements/covidElements/offimg4.jpg"),
    },
    {
      url: require("../elements/covidElements/offimg5.jpg"),
    },
    {
      url: require("../elements/covidElements/offimg6.jpg"),
    },
    {
      url: require("../elements/covidElements/img1.jpg"),
    },
    {
      url: require("../elements/covidElements/img2.jpg"),
    },
    {
      url: require("../elements/covidElements/img3.jpg"),
    },
    {
      url: require("../elements/covidElements/img4.jpg"),
    },
    {
      url: require("../elements/covidElements/img5.jpg"),
    },
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };

  return (
    <center className>
      <div className="">
        <p className="family">Covid Section</p>
        <hr style={{ maxWidth: "80%" }} />
        <div className="">
          <img
            src={covidPoster}
            className="border border-4 border-solid border-black p-2 mb-3 b w-3/5 h-4/5 sm:w-1/3 sm:h-2/3 py-2"
          />
        </div>
        <div className="">
          <p className="family mt-10">Awareness and prevention</p>
          <div className="">
            <Carousel
              // partialVisible={true}
              responsive={responsive}
              infinite={true}
              // containerClass="cardSize"
              // className="container"
              autoPlay={true}
              autoPlaySpeed={3000}
              // centerMode={true}
              // partialVisbile={true}
              // showDots={true}
              // renderButtonGroupOutside={Fade}
            >
              {imgItems.map((item, index) => {
                // console.log(key)

                return (
                  <div
                    key={index}
                    // className="test"
                    style={{
                      textAlign: "bottom",
                      background: "#282828",
                      fontSize: "150%",
                      height: "50vh",
                      width: "80%",
                      // backgroundColor: 'transparent',
                      backgroundImage: `url(${item.url})`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      borderRadius: "2%",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <center style={{ width: "85%" }}>
                      <h1
                        className="module line-clamp headingText"
                        style={{
                          fontSize: "125%",
                          fontFamily: "fantasy",
                          color: "#fff",
                          letterSpacing: "4px",
                        }}
                      ></h1>
                    </center>
                  </div>
                );
              })}
            </Carousel>
          </div>
          <p className="font-bold text-red-500">
            Immune booster arsenicum album 30 distribution at different wards of
            chottanikkara grama panchayath..the good effects reached upto ten
            thousand peoples in first attempt itself
          </p>
        </div>
      </div>
    </center>
  );
};

export default CovidComponent;
