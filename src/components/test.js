import { Link } from "react-router-dom";
import CardPage from "./CardPage";

const Truetest = () => {
  const testArray = [
    {
      name: "test",
      data: [
        {
          address: "address",
          father: "father",
        },
      ],
    },
    {
      name: "test2",
      data: [
        {
          address: "address2",
          father: "father2",
        },
        {
          address: "address2",
          father: "father2",
        },
      ],
    },
    {
      name: "test3",
      data: [
        {
          address: "address3",
          father: "father3",
        },
      ],
    },
  ];

  return (
    <>
      <div>
        {testArray.map((item) => {
          return (
            <Link to={"/sample2"} state={{ data: item.data, name: item.name }}>
              <div>{item.name}</div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Truetest;
