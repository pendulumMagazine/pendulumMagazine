import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../styles/HomeCard.css";
import "../styles/Gallery.css";

const Family = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
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

  const familyArray = [
    {
      url: "img/family/22nd Batch.jpg",
      batch: "22 BATCH",
    },
    {
      url: "img/family/23rd Batch.jpg",
      batch: "23 BATCH",
    },
    {
      url: "img/family/24th Batch.jpg",
      batch: "24 BATCH",
    },
    {
      url: "img/family/25th Batch.jpg",
      batch: "25 BATCH",
    },
    {
      url: "img/family/26th Batch.jpg",
      batch: "26 BATCH",
    },
    {
      url: "img/family/27th Batch.JPG",
      batch: "27 BATCH",
    },
    {
      url: "img/family/teacher.JPG",
      batch: "Teachers",
    },
  ];
  return (
    <>
      <div className="px-10">
        <p
          className="family mt-10"
          style={{
            fontFamily: "Courgette",
          }}
        >
          Family
        </p>
        <hr style={{ width: "80%" }} />
        <Carousel
          // partialVisible={true}
          responsive={responsive}
          infinite={true}
          containerClass=""
          autoPlay={true}
          autoPlaySpeed={3000}
          // centerMode={true}
          // partialVisbile={true}
          // showDots={true}
          // renderButtonGroupOutside={Fade}
        >
          {familyArray.map((key, index) => {
            //   const tmpImgURL = `img${key.mainImg.split("src/elements")[1]}`;
            return (
              <>
                <div
                  key={index}
                  // onClick={() => openprofile(key.id)}
                  className="test2"
                  style={{
                    marginLeft: "5%",
                    //   background: "gray",
                    backgroundImage: `url("${key.url}")`,
                    fontSize: "150%",
                    height: "30vh",
                    width: "80%",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    borderRadius: "2%",
                    backgroundPosition: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    textDecoration: "none",
                    // color: "white",
                    //   borderRadius: "500px",
                  }}
                  //   to={"./family/" + key.batch.trim()}
                  //   state={{ data: key }}
                >
                  <center className="bruh" style={{ width: "85%" }}>
                    {/* <img className="rounded" src={key.url} /> */}
                    <p
                      className="modulo line-clamp headingText"
                      style={{
                        fontSize: "100%",
                        fontFamily: "fantasy",
                        color: "#000000",
                        letterSpacing: "4px",
                        position: "absolute",
                        bottom: 0,
                      }}
                    >
                      {key.batch}
                    </p>
                    {/* <p className="text-center text-gray-900 font-thin text-lg">
                      {key.designation}
                    </p> */}
                  </center>
                </div>
              </>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default Family;
