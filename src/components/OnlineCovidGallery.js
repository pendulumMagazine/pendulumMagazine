import { useLocation, useNavigate } from "react-router-dom";

const OnlineCovidGallery = () => {
  const location = useLocation();
  const name = location.state.name;
  const data = location.state.data;
  const navigate = useNavigate();
  console.log(data, name);
  return (
    <div style={{ padding: "10px" }}>
      <p className="cursor backButton" onClick={() => navigate(-1)}>
        &#x1F870;
      </p>

      <p className="family">{name}</p>
      <center style={{ marginBottom: "30px" }}>
        <hr style={{ maxWidth: "80%" }} />
      </center>
      <div style={{ paddingInline: "50px" }} id="photos">
        {data.map((key, index) => {
          const tmpImgURL = `/img/${key.img.split("./")[1]}`;
          console.log(tmpImgURL);
          return (
            <div key={index} className="test2">
              <img
                key={index}
                src={`${tmpImgURL}`}
                // alt={key.get("img").name}
              />
              <center className="bruh">
                {/* <h1 className='module line-clamp headingText' style={{ fontSize: '125%', fontFamily: 'fantasy', color: '#fff', letterSpacing: '4px' }}>{key.get('title')}</h1> */}
                <p
                  style={{
                    position: "absolute",
                    bottom: "50px",
                    left: "10px",
                    fontSize: "20px",
                    fontFamily: "fantasy",
                    color: "#000000",
                    letterSpacing: "2px",
                    textOverflow: "ellipsis",
                    // maxWidth: "50px",
                    // overflow: "scroll",
                  }}
                >
                  {key.author}
                </p>
                <p
                  style={{
                    position: "absolute",
                    bottom: "30px",
                    left: "10px",
                    fontSize: "17px",
                    fontFamily: "fantasy",
                    color: "#000000",
                    letterSpacing: "2px",
                    textOverflow: "ellipsis",
                  }}
                >
                  {/* {`(`} */}
                  {key.batch}
                  {/* {` batch)`} */}
                </p>
              </center>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OnlineCovidGallery;
