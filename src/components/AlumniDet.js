import { useLocation, useNavigate } from "react-router-dom";

const AlumniDet = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state?.data;
  console.log(data);
  return (
    <>
      <div style={{ padding: "10px" }}>
        <p className="cursor backButton" onClick={() => navigate(-1)}>
          &#x1F870;
        </p>

        <p className="family">{data.title}</p>
        <p className="text-center">{data.work}</p>

        <center style={{ marginBottom: "30px" }}>
          <hr style={{ maxWidth: "80%" }} />
        </center>
        <p className="text-red-600 font-bold px-10">{data.text}</p>
        <div style={{ paddingInline: "50px" }} id="photos">
          {data.img.map((key, index) => {
            // const tmpImgURL = `/img/${key.img.split("./")[1]}`;
            // console.log(tmpImgURL);
            return (
              <div key={index} className="test2">
                <img
                  key={index}
                  src={"/" + key.url}
                  // alt={key.get("img").name}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AlumniDet;
