// import Carousel from "t-a-e-3d-carousel-reactjs";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../styles/Gallery.css";

import "../styles/Home.css";
import "../styles/HomeCard.css";

const Notes = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };

  const notesArray = [
    {
      img: "img/notesElements/principle.jpg",
      name: "Prof. Dr. M.G. Radhesh",
      designation: "Principal, DPMHMC",
      text: `Nurturing creativity and inspiring innovation are two of the ket elements of a successful nursing education, and a college magazine is the perfect amalgamation of both. Hence, Iam delighted to know that College union 2020-21's college E- magazine "Pendulum" Is ready for publication. I wish success to this endeavor.
      `,
    },
    {
      img: "img/notesElements/magazineEditor.jpg",
      name: "Fahma PT",
      designation: "Magazine Editor",
      text: `2020 college union ചുമതല ഏറ്റെടുക്കുമ്പോൾ തികച്ചും സർവ്വസാധാരണയായ ദിനങ്ങളായിരുന്നു. Centenary ആഘോഷവും യൂണിയൻ പ്രവർത്തനങ്ങളുമായി കർമ നിരതമായ കോളേജ് കാലഘട്ടം... 
      തുടർന്നുണ്ടായ കൊറോണ വ്യാപനത്തിൽ വീടുകളിൽ അകപ്പെട്ടപ്പോഴും online പ്രവർത്തനങ്ങളിലൂടെ വിദ്യാർത്ഥി ഐക്യം നിലനിർത്താൻ 2020 കോളേജ് യൂണിയന് സാധിച്ചു.
      ഈ യൂണിയന് ഒപ്പം ഉള്ള യാത്ര എനിക്ക് തികച്ചും വ്യത്യസ്ഥമായ ഒരു അനുഭവം തന്നെ ആയിരുന്നു.
      2020- 21 Online & Offline ആയ കോളേജ് കാലഘട്ടത്തിന്റെ പകർപ്പാണ് Pendulum college magazine.
      `,
    },
    {
      img: "img/notesElements/staffAdvisor.jpg",
      name: "Dr Ganesh Das",
      designation: "Staff Editor",
      text: `2020 - 21 കോളേജ് യൂണിയൻ കാലഘട്ടം Pendulum എന്ന ഒരു പദം കൊണ്ട് അർത്ഥവത്താണ്. Pendulum ത്തിന്റെ ഒരു Maximum point ന് സമാനമായി Ablaze college union പ്രവർത്തനം ആരംഭിക്കുകയും അപ്രതീക്ഷിതമായുണ്ടായ വ്യതിചലനത്തിന്റെ ഒരു minimum point നെ തരണം ചെയ്ത് അടുത്ത maximum point കീഴടക്കുന്നതുമായിരുന്നു 2020-21 കോളേജ് യൂണിയൻ. .. 

      Centenary ആഘോഷിക്കുന്ന നമ്മുടെ കോളേജിന്റെ പൈതൃകം ഉൾക്കൊണ്ട് തന്നെ വ്യത്യസ്തമാർന്ന കലാകായിക പാഠ്യപദ്ധതികളിലൂടെ കലാലയജീവിതം ആന്ദകരമാക്കുകയായിരുന്നു ഓരോ വിദ്യാർത്ഥിയും... 
      
      ക്ഷണിക്കാതെത്തിയ അതിഥി കാരണം തോളിൽ കയ്യിട്ടും, കൈ ചേർത്ത് പിടിച്ചും ചങ്കല്ല ചങ്കിടിപ്പാണെന്ന് പറഞ്ഞ് നടന്ന കോളേജ് കാലം ഇത്തിരി കാലത്തേക്കെങ്കിലും അവസാനിച്ചു. 
      Online തലത്തിലേക്ക് മാറ്റപ്പെടുമ്പോഴും കോളേജിന്റെ നിറസാന്നിധ്യവും വിദ്യാർത്ഥി ഐക്യവും നിലനിർത്താൻ college union സാധിച്ചു. 
      
      Online & offline പ്രവർത്തനങ്ങളിലൂടെ ഒരു വർഷത്തിൽ കൂടുതൽ ചുമതല നിർവഹിച്ച 2020- 21 college union ന്റെ കൈയ്യൊപ്പാണ് Pendulum കോളേജ് മാഗസിന്റെ ഓരോ താളുകളും...`,
    },
  ];

  // const unionArray = [
  //   {
  //     name: "Saviya Monson",
  //     designation: "Chairperson",
  //     img: "img/union/Saviya Monson.jpg",
  //   },
  //   {
  //     name: "Mariam Nawaz",
  //     designation: "Vice Chairperson",
  //     img: "img/union/Mariam Nawaz.jpg",
  //   },
  //   {
  //     name: "Sulaikha Naushad",
  //     designation: "Vice Chairperson",
  //     img: "img/union/Sulaikha Naushad.jpg",
  //   },
  //   {
  //     name: "Ameera Hibathulla",
  //     designation: "General Secretary",
  //     img: "img/union/Ameera Hibathulla.jpg",
  //   },
  //   {
  //     name: "Aryalakshmi MS",
  //     designation: "Joint Secretary",
  //     img: "img/union/Aryalakshmi MS.jpg",
  //   },
  //   {
  //     name: "Sayooj SS",
  //     designation: "University Union Counceller",
  //     img: "img/union/Sayooj SS.jpg",
  //   },
  //   {
  //     name: "Rinsha Fathima T",
  //     designation: "Arts Secretary",
  //     img: "img/union/Rinsha Fathima T.jpg",
  //   },
  //   {
  //     name: "Maneesha Shinin",
  //     designation: "Sports Secretary",
  //     img: "img/union/Maneesha Shinin.jpg",
  //   },
  //   {
  //     name: "Fahma PP",
  //     designation: "Magzine Editor",
  //     img: "img/union/Fahma PP.jpg",
  //   },
  // ];
  return (
    <>
      <center>
        <Carousel
          // partialVisible={true}
          responsive={responsive}
          infinite={true}
          containerClass=""
          autoPlay={true}
          autoPlaySpeed={5000}
          // centerMode={true}
          // partialVisbile={true}
          // showDots={true}
          // renderButtonGroupOutside={Fade}
        >
          {notesArray.map((key, index) => {
            //   const tmpImgURL = `img${key.mainImg.split("src/elements")[1]}`;
            return (
              <>
                <div
                  key={index}
                  // onClick={() => openprofile(key.id)}
                  className="m-4"
                  style={{
                    // marginLeft: "5%",
                    //   background: "gray",
                    //   backgroundImage: `url("${key.img}")`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    fontSize: "150%",
                    height: "auto",
                    width: "90%",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    borderRadius: "2%",
                    backgroundPosition: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    textDecoration: "none",
                    color: "white",
                    //   borderRadius: "500px",
                  }}
                >
                  <div class="mx-auto my-auto sm:h-80 bg-white rounded-lg shadow-md">
                    <div class="md:flex">
                      <img
                        class="rounded-full my-2"
                        style={{ width: "500px", height: "300px" }}
                        src={key.img}
                      />
                      <div class="p-8">
                        <p class="mt-2 text-sm text-gray-900 tracking-wide">
                          {key.text}
                        </p>
                        <div class="uppercase tracking-wide text-lg text-indigo-500 font-semibold">
                          {key.name}
                        </div>
                        <p class="block mt-1 text-sm leading-tight font-medium text-black hover:underline">
                          {key.designation}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </Carousel>
      </center>
    </>
  );
};

export default Notes;
