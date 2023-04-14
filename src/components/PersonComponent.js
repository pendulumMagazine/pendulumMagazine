import React, { useEffect, useState } from "react";
import Parse from "parse/dist/parse.min.js";
import { async } from "@firebase/util";
import { query } from "firebase/firestore";

const PersonComponent = () => {
  // State variables
  const [person, setPerson] = useState();
  const [file, setFile] = useState([]);

  useEffect(() => {
    (async () => {
      const query = new Parse.Query("Post");
      const post = await query.findAll();
      setFile(post);
    })();
    return () => {
      console.log(file);
      // file.map((d) => {
      //         console.log(d.get('title'), d.get('description'), d.get('img'))
      // })
    };
  }, []);

  return (
    <div>
      <div className="App">
        {/* <input type='submit' onClick={getImage} /> */}
        {file.map((p, index) => {
          if (p.get("catogory") == "english") {
            return (
              <div key={index}>
                <p>{p.get("title")}</p>
                <p>{p.get("catogory")}</p>
                <p
                  style={{
                    whiteSpace: "pre-wrap",
                    padding: "3%",
                    color: "black",
                    fontSize: "18px",
                  }}
                >
                  {" "}
                  {p.get("description")}
                </p>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default PersonComponent;
