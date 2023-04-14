import Carousel from "t-a-e-3d-carousel-reactjs";
import "../styles/Home.css";
import "../styles/HomeCard.css";

const Notes = () => {
  const Images = [
    {
      url: require("../elements/notesElements/principleNote.png"),
    },
    {
      url: require("../elements/notesElements/magazineEditor.png"),
    },
    {
      url: require("../elements/notesElements/staffAdvisor.png"),
    },
  ];

  return (
    <div className="container grid grid-cols-3 gap-2">
      <center style={{ marginTop: "-50px" }}>
        <Carousel
          interval={1000}
          imageClassName="container imageCarousal"
          className="carousal"
          overlayClassName="inlayCarousal"
          imageList={Images}
        />
      </center>
    </div>
  );
};

export default Notes;
