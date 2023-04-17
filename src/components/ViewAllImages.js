import Parse from "parse/dist/parse.min.js";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ViewAllImages.css";

const ViewAllImages = () => {
  const [array, setArray] = useState([]);

  const navigate = useNavigate();

  const [artist, setArtist] = useState({
    name: "",
    batch: "",
  });

  useEffect(() => {
    (async () => {
      const query = new Parse.Query("Gallery");
      const post = await query.findAll();
      // console.log(post)
      setArray(post);
    })();
    return () => {};
  }, []);

  return (
    <div style={{ padding: "10px" }}>
      <p className="cursor backButton" onClick={() => navigate(-1)}>
        &#x1F870;
      </p>

      <p className="family">Gallery</p>
      <center style={{ marginBottom: "30px" }}>
        <hr style={{ maxWidth: "80%" }} />
      </center>
      <div style={{ paddingInline: "50px" }} id="photos">
        {array.map((key, index) => {
          return (
            <div
              key={index}
              onMouseOver={() =>
                setArtist({
                  name: key.get("artist"),
                  batch: key.get("batch"),
                })
              }
              className="test2"
            >
              <img
                key={index}
                src={key.get("img")._url}
                alt={key.get("img").name}
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
                  {key.get("artist")}
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
                  {`(`}
                  {key.get("batch")}
                  {` batch)`}
                </p>
              </center>
            </div>
          );
        })}
      </div>
      <center>
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
          {artist.name}
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
          {artist.batch}
        </p>
      </center>
    </div>
  );
};

export default ViewAllImages;
