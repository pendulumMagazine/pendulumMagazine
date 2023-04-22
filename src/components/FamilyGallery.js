import { useLocation } from "react-router-dom";

const FamilyGallery = () => {
  const location = useLocation();
  const data = location.state?.data;
  console.log(data);
  return (
    <>
      <center>
        <h1 className="text-center">{data.batch}</h1>
        <hr style={{ width: "80%" }} />
        <img src={data.url} />
      </center>
    </>
  );
};

export default FamilyGallery;
