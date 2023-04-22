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
  ];
  return (
    <>
      <div className="px-10">
        <p className="family mt-10">Family</p>
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
                  className="tet"
                  style={{
                    marginLeft: "5%",
                    //   background: "gray",
                    backgroundImage: `url("${key.url}")`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    fontSize: "150%",
                    height: "30vh",
                    width: "80%",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    borderRadius: "2%",
                    backgroundPosition: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    textDecoration: "none",
                    color: "white",
                    //   borderRadius: "500px",
                  }}
                  //   to={"./family/" + key.batch.trim()}
                  //   state={{ data: key }}
                >
                  <center className="bruh" style={{ width: "85%" }}>
                    {/* <img className="rounded" src={key.url} /> */}
                    <h1 className="text-center text-gray-900 font-black text-2xl">
                      {key.batch}
                    </h1>
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
