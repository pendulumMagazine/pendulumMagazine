import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../styles/HomeCard.css";
import "../styles/Gallery.css";

const UnionMembers = () => {
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

  const unionArray = [
    {
      name: "Saviya Monson",
      designation: "Chairperson",
      img: "img/union/Saviya Monson.jpg",
    },
    {
      name: "Mariam Nawaz",
      designation: "Vice Chairperson",
      img: "img/union/Mariam Nawaz.jpg",
    },
    {
      name: "Sulaikha Naushad",
      designation: "Vice Chairperson",
      img: "img/union/Sulaikha Naushad.jpg",
    },
    {
      name: "Ameera Hibathulla",
      designation: "General Secretary",
      img: "img/union/Ameera Hibathulla.jpg",
    },
    {
      name: "Aryalakshmi MS",
      designation: "Joint Secretary",
      img: "img/union/Aryalakshmi MS.jpg",
    },
    {
      name: "Sayooj SS",
      designation: "University Union Counceller",
      img: "img/union/Sayooj SS.jpg",
    },
    {
      name: "Rinsha Fathima T",
      designation: "Arts Secretary",
      img: "img/union/Rinsha Fathima T.jpg",
    },
    {
      name: "Maneesha Shinin",
      designation: "Sports Secretary",
      img: "img/union/Maneesha Shinin.jpg",
    },
    {
      name: "Fahma PP",
      designation: "Magzine Editor",
      img: "img/union/Fahma PP.jpg",
    },
  ];
  return (
    <>
      <div className="px-10">
        <p className="family mt-10 mb-10">Union Members</p>
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
          {unionArray.map((key, index) => {
            //   const tmpImgURL = `img${key.mainImg.split("src/elements")[1]}`;
            return (
              <>
                <div
                  key={index}
                  // onClick={() => openprofile(key.id)}
                  className=""
                  style={{
                    marginLeft: "5%",
                    //   background: "gray",
                    //   backgroundImage: `url("${key.img}")`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    fontSize: "150%",
                    height: "50vh",
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
                >
                  <center className="" style={{ width: "85%" }}>
                    <img className="rounded-full" src={key.img} />
                    <h1 className="text-center text-gray-900 font-black text-2xl">
                      {key.name}
                    </h1>
                    <p className="text-center text-gray-900 font-thin text-lg">
                      {key.designation}
                    </p>
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

export default UnionMembers;
