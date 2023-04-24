// import { } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../styles/HomeCard.css";
import { Link, useNavigate } from "react-router-dom";

const HomeCard = ({ heading, title }) => {
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
  const navigate = useNavigate();

  const openprofile = (id) => {
    navigate(`/read/${id}`);
  };

  return (
    <div
      className="container"
      style={{ display: `${heading === [] ? `none` : `block`}` }}
    >
      <p
        className="family"
        style={{
          fontFamily: "Oswald",
        }}
      >
        {title}{" "}
      </p>
      <div style={{ marginTop: "12px" }}>
        <Link to={{ pathname: `/viewall/${title}` }}>
          <button
            className="button-80"
            style={{
              float: "right",
              color: "#fff",
              marginTop: "-15px",
              textAlign: "center",
            }}
          >
            MORE
          </button>
        </Link>
        <hr style={{ maxWidth: "80%" }} />
      </div>
      <div style={{}}>
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
          {heading.map((key, index) => {
            // console.log(key)
            if (key.get("catogory") === title && key.get("img") !== null) {
              return (
                <div
                  key={index}
                  onClick={() => openprofile(key.id)}
                  className="test"
                  style={{
                    // marginLeft: "5%",
                    textAlign: "bottom",
                    background: "#282828",
                    fontSize: "150%",
                    height: "50vh",
                    width: "80%",
                    // backgroundColor: 'transparent',
                    backgroundImage: `url(${JSON.stringify(
                      key.get("img")._url
                    )})`,
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
                    >
                      {key.get("title")}
                    </h1>
                    <p
                      className="modulo line-clamp headingText"
                      style={{
                        fontSize: "65%",
                        fontFamily: "fantasy",
                        color: "#fff",
                        letterSpacing: "4px",
                      }}
                    >
                      {key.get("author")}
                    </p>
                    <p
                      className="modulo line-clamp headingText"
                      style={{
                        fontSize: "65%",
                        fontFamily: "fantasy",
                        color: "#fff",
                        letterSpacing: "4px",
                        marginTop: "-15px",
                      }}
                    >
                      {`(`}
                      {key.get("batch")}
                      {` batch)`}
                    </p>
                  </center>
                </div>
              );
            }
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default HomeCard;
