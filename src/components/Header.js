import "../styles/Home.css";
import "../styles/Header.css";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h1 className="pendulum">pendulum</h1>
      <p className="pendulum2 mt-3">
        dr. padiar memorial homeopathic medical college
      </p>
      {/* <div
        style={{
          display: "inline-flex",
          justifyContent: "space-evenly",
          width: "100%",
        }}
      >
        <Link
          to={{ pathname: `/viewall/malayalam` }}
          className="hover-underline-animation"
        >
          Malayalam
        </Link>
        <Link
          to={{ pathname: `/viewall/english` }}
          className="hover-underline-animation"
        >
          English
        </Link>

        <Link
          to={{ pathname: `/viewall/hindi` }}
          className="hover-underline-animation"
        >
          Hindi
        </Link>
      </div> */}
      <center>

        <hr style={{ maxWidth: "70%" }} />
      </center>
    </div>
  );
};

export default Header;
