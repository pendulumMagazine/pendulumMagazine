import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../styles/HomeCard.css";
import "../styles/Gallery.css";
import covidOnlineGalleryArray from "../elements/covidOnlineGallery";
import covidOnlineDataArray from "../elements/covidOnlineData";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
  },
};

const OnlineCovidSection = () => {
  console.log(covidOnlineDataArray);
  return (
    <>
      <center>
        <p className="family mt-10">Online Covid Section</p>
        <div>
          {/* <Link to={{ pathname: `/monthlyreports` }}>
            <button
              className="button-80"
              style={{
                float: "right",
                color: "#fff",
                marginTop: "-13px",
                textAlign: "center",
              }}
            >
              MORE
            </button>
          </Link> */}
        </div>
        <hr style={{ maxWidth: "80%" }} />
        <div className=" px-10 container">
          <p className="">
            ദിവസങ്ങൾ യുഗങ്ങൾ പോലെ തള്ളിനീക്കേണ്ടി വന്ന ശ്മശാന മൂകത നിറഞ്ഞ
            ലോക്ഡൗൺ ദിനങ്ങൾ.ആ ശൂന്യതയിൽ ചെയ്യാൻ എന്തെങ്കിലും ഉണ്ടാവുക എന്നത്
            വലിയ കാര്യം തന്നെയായിരുന്നു.മടുപ്പിനെ മറികടക്കാൻ വിദ്യാർത്ഥികൾ
            എടുത്ത ഓരോ ശ്രമങ്ങളെയും യൂണിയൻ അഭിനന്ദിക്കുന്നു.
          </p>

          <Carousel
            // partialVisible={true}
            responsive={responsive}
            infinite={true}
            containerClass="cardSize"
            autoPlay={true}
            autoPlaySpeed={3000}
            // centerMode={true}
            // partialVisbile={true}
            // showDots={true}
            // renderButtonGroupOutside={Fade}
          >
            {covidOnlineDataArray.map((key, index) => {
              return (
                <>
                  <Link
                    key={index}
                    // onClick={() => openprofile(key.id)}
                    className="test1"
                    style={{
                      marginLeft: "5%",
                      // textAlign: "bottom",
                      background: "#282828",
                      fontSize: "150%",
                      height: "50vh",
                      width: "80%",
                      // backgroundImage: `url(${tmpImgURL})`,
                      // backgroundColor: "transparent",
                      // backgroundImage: `url("${tmpImgURL}")`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      borderRadius: "2%",
                      backgroundPosition: "center",

                      alignItems: "center",
                      justifyContent: "center",
                      textDecoration: "none",
                      color: "white",
                    }}
                    to={"./onlinecoviddata/" + key.topic.trim()}
                    state={{ data: key.data, name: key.topic }}
                  >
                    <center className="" style={{ width: "85%" }}>
                      <h1
                        className="module line-clamp headingText"
                        style={{
                          fontSize: "125%",
                          fontFamily: "fantasy",
                          color: "#fff",
                          letterSpacing: "4px",
                        }}
                      >
                        {key.topic}
                      </h1>
                      {/* <p
                        className="modulo line-clamp headingText"
                        style={{
                          fontSize: "100%",
                          fontFamily: "fantasy",
                          color: "#fff",
                          letterSpacing: "4px",
                        }}
                      >
                        {key.name}
                      </p> */}
                    </center>
                  </Link>
                </>
              );
            })}
          </Carousel>

          <Carousel
            // partialVisible={true}
            responsive={responsive}
            infinite={true}
            containerClass="cardSize"
            autoPlay={true}
            autoPlaySpeed={3000}
            // centerMode={true}
            // partialVisbile={true}
            // showDots={true}
            // renderButtonGroupOutside={Fade}
          >
            {covidOnlineGalleryArray.map((key, index) => {
              const tmpImgURL = `img${key.mainImg.split("src/elements")[1]}`;
              return (
                <>
                  <Link
                    key={index}
                    // onClick={() => openprofile(key.id)}
                    className="test1"
                    style={{
                      marginLeft: "5%",
                      // textAlign: "bottom",
                      // background: "#282828",
                      fontSize: "150%",
                      height: "50vh",
                      width: "80%",
                      // backgroundImage: `url(${tmpImgURL})`,
                      // backgroundColor: "transparent",
                      backgroundImage: `url("${tmpImgURL}")`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      borderRadius: "2%",
                      backgroundPosition: "center",

                      alignItems: "center",
                      justifyContent: "center",
                      textDecoration: "none",
                      color: "white",
                    }}
                    to={"./onlinecovidgallery/" + key.name.trim()}
                    state={{ data: key.data, name: key.name }}
                  >
                    <center className="bruh" style={{ width: "85%" }}>
                      <h1
                        className="module line-clamp headingText"
                        style={{
                          fontSize: "125%",
                          fontFamily: "fantasy",
                          color: "#000",
                          letterSpacing: "4px",
                        }}
                      >
                        {key.name}
                      </h1>
                      {/* <p
                        className="modulo line-clamp headingText"
                        style={{
                          fontSize: "100%",
                          fontFamily: "fantasy",
                          color: "#fff",
                          letterSpacing: "4px",
                        }}
                      >
                        {key.name}
                      </p> */}
                    </center>
                  </Link>
                </>
              );
            })}
          </Carousel>
          <p className="font-bold text-red-500">
            അതുകൊണ്ട് തന്നെ ആ കുഞ്ഞുപരിശ്രമങ്ങളെ എഡിറ്റിംഗ് കത്തിയിലൊതുക്കി
            കളയാതെ സ്നേഹപൂർവം ഇവിടെ ചേർത്ത് വെക്കുന്നു...
          </p>
        </div>
      </center>
    </>
  );
};

export default OnlineCovidSection;
