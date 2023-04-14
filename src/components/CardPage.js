import { useLocation } from "react-router-dom";

const CardPage = (prop) => {
  const location = useLocation();
  const data = location.state?.data;
  const name = location.state?.name;
  console.log(name, data);
  return (
    <>
      <div>
        {/* {prop.data.map((item) => {
          return <div>{item.address}</div>;
        })} */}
      </div>
    </>
  );
};

export default CardPage;
