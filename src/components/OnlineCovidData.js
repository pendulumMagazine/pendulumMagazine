import { useLocation, useNavigate } from "react-router-dom";

const OnlineCovidData = () => {
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
      <div>
        {data.map((item, index) => {
          const tmpImgURL = `${item.img.split("./")[1]}`;
          const tmpAuthorImg = `${item.authorImg.split("./")[1]}`;
          console.log(tmpAuthorImg);
          return (
            <div className="sm:px-20 px-10">
              <h1>{item.title}</h1>
              {/* <center> */}
              <img
                style={{ height: "500px", width: "500px", objectFit: 'contain' }}
                alt="title image"
                src={"/img/" + tmpImgURL}
              />
              {/* </center> */}
              <div className="py-3">
                <p className="font-bold" style={{ whiteSpace: "break-spaces" }}>
                  {item.description}
                </p>
              </div>

              <div
                style={{ position: "relative" }}
                className="flex items-center"
              >
                {/* {tmpAuthorImg ? (
                  <div> */}
                {/* <img
                      width={150}
                      height={150}
                      alt="author image"
                      src={"/img/" + tmpAuthorImg}
                    />
                    <div
                      style={{ position: "absolute", bottom: -20, left: 150 }}
                      className="px-2"
                    >
                      <h4>{item.author}</h4>
                      <p className="-mt-3">{item.batch}</p>
                    </div> */}
                {/* </div>
                ) : (
                )} */}
                <div
                  // style={{ position: "absolute", bottom: -20, left: 150 }}
                  className="px-2"
                >
                  <h4>{item.author}</h4>
                  <p className="-mt-3">{item.batch}</p>
                </div>
              </div>

              <hr style={{ width: "80%" }} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OnlineCovidData;
