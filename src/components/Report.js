import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import "../styles/HomeCard.css";

const Report = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };

  const reportItems = [
    {
      text: "2019 ഡിസംബർ 21ന് കോളജ് ഓഡിറ്റോറിയത്തിൽ നടന്ന സത്യപ്രതിജ്ഞയിലൂടെ ABLAZE AKHMA കോളജ് യൂണിയൻ അധികാരത്തിലെത്തി.",
      img: [
        {
          url: require("../elements/reports/IMG-20191222-WA0028.jpg"),
        },
        {
          url: require("../elements/reports/IMG_20230126_202606.jpg"),
        },
        {
          url: require("../elements/reports/IMG_20230126_202520.jpg"),
        },
        {
          url: require("../elements/reports/IMG_20230126_202432.jpg"),
        },
        {
          url: require("../elements/reports/IMG_20230126_202355.jpg"),
        },
      ],
    },
    {
      text: "ജനുവരി 3ന് യൂണിയൻ്റെ ആദ്യത്തെ പ്രോഗ്രാം GELARE FIESTA ക്രിസ്തുമസ് പുതുവത്സര ആഘോഷം കോളജ് ഓഡിറ്റോറിയത്തിൽ നടന്നു. വിവിധ മത്സരങ്ങൾക്ക് ഒപ്പം പടിയാറിൻ്റെ സൗഹൃദങ്ങളെ ശക്തിപ്പെടുത്തുവാൻ ALL COLLEGE NEW YEAR FRIEND GIFT EXCHANGE ഉം നടത്തി.ഒരു നനുത്ത ഓർമ്മ സമ്മാനിച്ചുകൊണ്ട് രാത്രി 8 മണിക്ക് ആഘോഷങ്ങൾ സമാപിച്ചു.",
      img: [
        {
          url: require("../elements/reports/report2/IMG_20230126_204207.jpg"),
        },
        {
          url: require("../elements/reports/report2/IMG_20230126_204231.jpg"),
        },
        {
          url: require("../elements/reports/report2/IMG_20230126_204256.jpg"),
        },
        {
          url: require("../elements/reports/report2/IMG_20230126_204318.jpg"),
        },
        {
          url: require("../elements/reports/report2/IMG-20200103-WA0024.jpg"),
        },
      ],
    },
    {
      text: "കോളേജ് യൂണിയനും വിദ്യാർത്ഥികളും അധ്യാപകരും അനധ്യാപകരും ഒരുമിച്ച് ജനുവരി 4 ന് കോളേജും പരിസരവും വൃത്തിയാക്കിക്കൊണ്ട് GO GREEN CAMPUS എന്ന സ്വപ്നത്തിൻ്റെ ആദ്യഘട്ടം തുടങ്ങിവെച്ചു.",
      img: [],
    },
    {
      text: "ജനുവരി 5 ന് മലപ്പുറത്ത് വെച്ച് നടന്ന IHMA ഫുട്ബോൾ ടൂർണമെൻ്റിൽ പടിയാർ ടീമിനെ പങ്കെടുപ്പിച്ചു.ടീം ഫസ്റ്റ് റണ്ണർ അപ്പ് ട്രോഫി കരസ്ഥമാക്കി.",
      img: [],
    },
    {
      text: "ശതാബ്ദി ആഘോഷങ്ങൾക്ക് ജനുവരി 9 ന് ബഹു:കേന്ദ്ര ആയുഷ് മന്ത്രി ശ്രീ.ശ്രീപത് നായിക് തുടക്കം കുറിച്ചു. ഔദ്യോഗിക പരിപാടികൾ, വോയ്സ് ഓഫ് പടിയാർ എന്ന കലാപരിപാടികൾക്കും ചുക്കാൻ പിടിക്കാൻ യൂണിയന് സാധിച്ചു.പടിയാറിൻ്റെ കൈയ്യൊപ്പുകൾ സിഗ്നെച്ചർ ബോർഡിൽ ശേഖരിക്കുകയും ചെയ്തു.",
      img: [],
    },
    {
      text: "ജനുവരി 17 ന് syndicates of homeopaths കോളജിൽ എത്തി 'concepts&resources ' എന്ന വിഷയത്തിൽ ക്ലാസ്സ് നയിച്ചു.",
      img: [],
    },
    {
      text: "വിദ്യാർഥികളുടെ കഴിവുകൾ ക്യാമ്പസിൽ വെച്ച് തന്നെ കണ്ടെത്തുവാനും പ്രോത്സാഹിപ്പിക്കുവാനും PASSION TO EXCEL എന്ന സെമിനാർ പരമ്പരയ്ക്ക് തുടക്കം കുറിച്ചു.ആദ്യ സെമിനാർ അന്നേ ദിവസം 1:30 മുതൽ നാലാം വർഷ വിദ്യാർത്ഥി അജയ് . എ.കെ അവതരിപ്പിച്ചു.",
      img: [],
    },
    {
      txte: "ജനുവരി 21, 22 തീയതികളിൽ കോട്ടയം പാല സെൻ്റ് തോമസ് കോളജിൽ വെച്ച് നടന്ന INTERNATIONAL CONFERENCE ON HOMOEOPATHY & PHYTOMEDICINE സെമിനാറിൽ യൂണിയൻ വിദ്യാർത്ഥികളെ പങ്കെടുപ്പിച്ചു. Oral presentation കോമ്പറ്റീഷനിൽ Ajay AK രണ്ടാം സ്ഥാനം കരസ്ഥമാക്കി.",
      img: [],
    },
  ];
  return (
    <div>
      <p
        className="family mt-10"
        style={{
          fontFamily: "Courgette",
        }}
      >
        റിപ്പോർട്ട് {"("}Report{")"}
      </p>
      <div>
        <Link to={{ pathname: `/monthlyreports` }}>
          <button
            className="button-80"
            style={{
              float: "right",
              color: "#fff",
              marginTop: "-13px",
              textAlign: "center",
            }}
          >
            MORE
          </button>
        </Link>
        <hr style={{ maxWidth: "80%" }} />
      </div>

      {reportItems.map((item, index) => {
        return (
          <center className="mt-5">
            <p className="tracking-wide container font-medium px-10">
              {item.text}
            </p>
            <div className="">
              <Carousel
                // partialVisible={true}
                responsive={responsive}
                infinite={true}
                // containerClass="cardSi/ze"
                // className="container"
                autoPlay={true}
                autoPlaySpeed={3000}
                // centerMode={true}
                // partialVisbile={true}
                // showDots={true}
                // renderButtonGroupOutside={Fade}
              >
                {item.img.map((t, i) => {
                  // console.log(key)

                  return (
                    <div
                      key={i}
                      // className="test"
                      style={{
                        textAlign: "bottom",
                        background: "#282828",
                        fontSize: "150%",
                        height: "50vh",
                        width: "80%",
                        // backgroundColor: 'transparent',
                        backgroundImage: `url(${t.url})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        borderRadius: "2%",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <center style={{ width: "85%" }}>
                        <h1
                          className="module line-clamp headingText"
                          style={{
                            fontSize: "125%",
                            fontFamily: "fantasy",
                            color: "#fff",
                            letterSpacing: "4px",
                          }}
                        ></h1>
                      </center>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </center>
        );
      })}
      <p className="container font-bold mb-5">
        *വാഗ്ദാനങ്ങൾ ഒന്നും നൽകി പ്രലോഭിപ്പിക്കാതെ ഞങ്ങൾക്ക് ചെയ്യുവാൻ
        കഴിയുന്നതിന്റെ പരമാവധി ചെയ്തു എന്ന വിശ്വാസത്തോടെ ഈ റിപ്പോർട്ട് നിങ്ങളുടെ
        അംഗീകാരത്തിനായി സമർപ്പിക്കുന്നു.*
      </p>
    </div>
  );
};

export default Report;
