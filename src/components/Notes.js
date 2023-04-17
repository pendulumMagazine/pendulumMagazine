// import Carousel from "t-a-e-3d-carousel-reactjs";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../styles/Gallery.css";

import "../styles/Home.css";
import "../styles/HomeCard.css";

const Notes = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };

  const notesArray = [
    {
      img: "img/notesElements/principleNote.png",
    },
    {
      img: "img/notesElements/magazineEditor.png",
    },
    {
      img: "img/notesElements/staffAdvisor.png",
    },
  ];

  // const unionArray = [
  //   {
  //     name: "Saviya Monson",
  //     designation: "Chairperson",
  //     img: "img/union/Saviya Monson.jpg",
  //   },
  //   {
  //     name: "Mariam Nawaz",
  //     designation: "Vice Chairperson",
  //     img: "img/union/Mariam Nawaz.jpg",
  //   },
  //   {
  //     name: "Sulaikha Naushad",
  //     designation: "Vice Chairperson",
  //     img: "img/union/Sulaikha Naushad.jpg",
  //   },
  //   {
  //     name: "Ameera Hibathulla",
  //     designation: "General Secretary",
  //     img: "img/union/Ameera Hibathulla.jpg",
  //   },
  //   {
  //     name: "Aryalakshmi MS",
  //     designation: "Joint Secretary",
  //     img: "img/union/Aryalakshmi MS.jpg",
  //   },
  //   {
  //     name: "Sayooj SS",
  //     designation: "University Union Counceller",
  //     img: "img/union/Sayooj SS.jpg",
  //   },
  //   {
  //     name: "Rinsha Fathima T",
  //     designation: "Arts Secretary",
  //     img: "img/union/Rinsha Fathima T.jpg",
  //   },
  //   {
  //     name: "Maneesha Shinin",
  //     designation: "Sports Secretary",
  //     img: "img/union/Maneesha Shinin.jpg",
  //   },
  //   {
  //     name: "Fahma PP",
  //     designation: "Magzine Editor",
  //     img: "img/union/Fahma PP.jpg",
  //   },
  // ];
  return (
    <>
      <center>
        <Carousel
          // partialVisible={true}
          responsive={responsive}
          infinite={true}
          containerClass=""
          autoPlay={true}
          autoPlaySpeed={5000}
          // centerMode={true}
          // partialVisbile={true}
          // showDots={true}
          // renderButtonGroupOutside={Fade}
        >
          {notesArray.map((key, index) => {
            //   const tmpImgURL = `img${key.mainImg.split("src/elements")[1]}`;
            return (
              <>
                <div
                  key={index}
                  // onClick={() => openprofile(key.id)}
                  className="p-4"
                  style={{
                    // marginLeft: "5%",
                    //   background: "gray",
                    //   backgroundImage: `url("${key.img}")`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    fontSize: "150%",
                    // height: "80vh",
                    width: "90%",
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
                    <img
                      className="rounded-lg"
                      style={{ width: "800px", height: "500px" }}
                      src={key.img}
                    />
                  </center>
                </div>
              </>
            );
          })}
        </Carousel>
      </center>
    </>
  );
};

export default Notes;
