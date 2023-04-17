import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/Viewall.css";
import Parse from "parse/dist/parse.min.js";

const ViewAll = () => {
  let params = useParams();
  const navigate = useNavigate();
  // console.log(params)

  const [array, setArray] = useState([]);

  useEffect(() => {
    (async () => {
      const query = new Parse.Query("Post");
      const post = await query.findAll();
      // console.log(post)
      setArray(post);
    })();
    return () => {};
  }, []);

  const openprofile = (id) => {
    navigate(`/read/${id}`);
  };

  return (
    <div className="cursor cursor">
      <p className="cursor pendulum">{params.catogory}</p>
      {/* <p unselectable="on" className="cursor button-28">&#x1F870;</p> */}
      <p className="cursor backButton" onClick={() => navigate(-1)}>
        &#x1F870;
      </p>
      <div className="cursor container">
        {array.map((key, index) => {
          if (
            key.get("catogory") === params.catogory &&
            key.get("img") !== null
          ) {
            return (
              <center
                className="cursor test card"
                style={{
                  backgroundImage: `url(${JSON.stringify(
                    key.get("img")._url
                  )})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  height: "30vh",
                  borderRadius: "2%",
                  alignItems: "center",
                  justifyContent: "center",
                  // textAlign: 'bottom',
                  // background: '#282828',
                }}
                key={index}
                onClick={() => openprofile(key.id)}
              >
                <div className="cursor card__copy" style={{ padding: "20px" }}>
                  <h1
                    className="cursor line-clamp module headingText"
                    style={{
                      letterSpacing: "4px",
                      fontSize: "125%",
                      marginBottom: "20px",
                    }}
                  >
                    {key.get("title")}
                  </h1>

                  {/* <h2>{key.catogory}</h2> */}
                  <p
                    className="cursor module line-clamp-2 headingText"
                    style={{
                      fontSize: "85%",
                      color: "whitesmoke",
                      letterSpacing: "1px",
                    }}
                  >
                    {key.get("description")}
                  </p>
                  <p
                    className="cursor modulo line-clamp headingText"
                    style={{
                      fontSize: "65%",
                      letterSpacing: "4px",
                      color: "whitesmoke",
                      letterSpacing: "4px",
                    }}
                  >
                    {key.get("author")}
                  </p>
                  <p
                    className="cursor modulo line-clamp headingText"
                    style={{
                      fontSize: "65%",
                      letterSpacing: "4px",
                      color: "whitesmoke",
                      letterSpacing: "4px",
                    }}
                  >
                    {`(`}
                    {key.get("batch")}
                    {` batch)`}
                  </p>
                 
                </div>
              </center>
            );
          }
          return;
        })}
      </div>
    </div>
  );
};

export default ViewAll;
