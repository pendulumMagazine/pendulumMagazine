import "../styles/Gallery.css";
import Parse from "parse/dist/parse.min.js";
import { useEffect } from "react";
import { useState } from "react";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";

const Gallery = () => {
  const [array, setArray] = useState([]);

  useEffect(() => {
    (async () => {
      const query = new Parse.Query("Gallery");
      const post = await query.findAll();
      // console.log(post)
      setArray(post);
    })();
    return () => {};
  }, []);

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
    <center
      className="container"
      style={{ display: `${array === [] ? `none` : `block`}` }}
    >
      <p
        className="family"
        style={{
          fontFamily: "Oswald",
        }}
      >
        Gallery
      </p>
      <div>
        <Link to={{ pathname: `/gallery` }}>
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
        </Link>
        <hr style={{ maxWidth: "80%" }} />
      </div>
      <div className="container">
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
          {array.map((key, index) => {
            // console.log(key)
            return (
              <div
                key={index}
                // onClick={() => openprofile(key.id)}
                className="test1"
                style={{
                  marginLeft: "5%",
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
                <center className="bruh" style={{ width: "85%" }}>
                  {/* <h1 className='module line-clamp headingText' style={{ fontSize: '125%', fontFamily: 'fantasy', color: '#fff', letterSpacing: '4px' }}>{key.get('title')}</h1> */}
                  <p
                    className="modulo line-clamp headingText"
                    style={{
                      fontSize: "100%",
                      fontFamily: "fantasy",
                      color: "#000000",
                      letterSpacing: "4px",
                    }}
                  >
                    {key.get("artist")}
                  </p>
                  <p
                    className="modulo line-clamp headingText"
                    style={{
                      fontSize: "65%",
                      fontFamily: "fantasy",
                      color: "#000000",
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
          })}
        </Carousel>
      </div>
    </center>
  );
};

export default Gallery;
