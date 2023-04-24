import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../styles/HomeCard.css";
import "../styles/Gallery.css";

const Alumni = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };
  const Alumni = [
    {
      title: "SAVIYA MONSON",
      work: "MARIYAM CAKES",
      text: `"സ്കൂൾ കാലഘട്ടം മുതൽ തന്നെ ക്രാഫ്റ്റ് വർക്കുകൾ ചെയ്യാൻ എനിക്ക് ഒരുപാട് ഇഷ്ടം ഉണ്ടായിരുന്നു.കോളജിലെ മത്സരവേദികളിലൂടെ ബാച്ചിന് വേണ്ടി  പാചകത്തിൻ്റെ പുതുപരീക്ഷണങ്ങളും തുടങ്ങിവെച്ചു. ലോക്‌ഡൗണിൽ മമ്മിയുടെ ബർത്ത്ഡേ കേക്ക് ഒരല്പം ഭംഗിയിൽ ചെയ്യാൻ ശ്രമിച്ചു.മറിയം കേക്കിൻ്റെ തുടക്കം അവിടെ ആയിരുന്നു എന്ന് തന്നെ പറയാം.കുടുംബത്തിൽ നിന്നും സുഹൃത്തുക്കളിൽ നിന്നും ഓർഡറുകളായി  ലഭിച്ച പിന്തുണ എനിക്ക് കൂടുതൽ ധൈര്യം പകർന്നു.ബിസിനസ് എന്ന ആശയം ചേട്ടൻ പറഞ്ഞപ്പോഴും ഒരു പേടിയോടെയാണ് മറിയം കേക്ക്സ് എന്ന ഇൻസ്റ്റാഗ്രാം പേജ്  വഴി  ഓർഡറുകൾ എടുത്ത് തുടങ്ങിയത്..പക്ഷേ പാചകത്തിനോടുള്ള ഇഷ്ടവും ക്രാഫ്റ്റ് വർക്കുകളോടുള്ള താൽപര്യവും ഒരുമിപ്പിക്കുവാൻ ബേക്കിങ്ങിന് സാധിച്ചപ്പോൾ അത് എനിക്ക് നൽകിയ തൃപ്തിയും സന്തോഷവും വളരെ വലുതായിരുന്നു...
      ക്രിസ്തുമസ് ആഘോഷങ്ങളിൽ ഉൾപ്പടെ അത്യാവശ്യം നല്ല ഒരു പോക്കറ്റ് മണി 'മറിയം കേക്ക്സ് ' വഴി ലഭിച്ചു.വിരസതയെ പാഷനിലൂടെ മറികടക്കാനാവും എന്ന വിശ്വാസമാണ്  ആ ദിവസങ്ങൾ എന്നെ പഠിപ്പിച്ചത്. `,
      main: "img/alumni/Saviya/main.jpg",
      img: [
        {
          url: "img/alumni/Saviya/IMG_20230411_160213.jpg",
        },
        {
          url: "img/alumni/Saviya/IMG_20230411_160234.jpg",
        },
        {
          url: "img/alumni/Saviya/IMG_20230411_160250.jpg",
        },
        {
          url: "img/alumni/Saviya/IMG_20230411_160311.jpg",
        },
        {
          url: "img/alumni/Saviya/IMG_20230411_160535.jpg",
        },
        {
          url: "img/alumni/Saviya/IMG_20230411_160551.jpg",
        },
        {
          url: "img/alumni/Saviya/IMG_20230411_160610.jpg",
        },
        {
          url: "img/alumni/Saviya/IMG_20230411_160624.jpg",
        },
        {
          url: "img/alumni/Saviya/IMG_20230411_160636.jpg",
        },
        {
          url: "img/alumni/Saviya/IMG_20230411_160649.jpg",
        },
      ],
    },
    {
      title: "SULAIKHA NOUSHAD",
      work: "TEAM BIBILOPHILIC INSANITIES",
      text: `"പുസ്തകങ്ങളിൽ നിന്ന് പുസ്തകങ്ങളിലേക്ക് വായനയിലൂടെയുള്ള യാത്രകൾ..അത് തരുന്ന പ്രചോദനവും ആശ്വാസവും വാക്കുകളിൽ ഒതുക്കാൻ കഴിയില്ല.ഈ ഇഷ്ടത്തിന് വേണ്ടി
      കൊറോണക്കാലത് സുഹൃത്തുക്കൾക്ക് ഒപ്പം തുടങ്ങിവെച്ച ചെറിയ ഒരു സംരംഭം ഇന്ന് എനിക്ക് ഒരു ഐഡൻ്റിറ്റി തന്നെ തരുന്നുണ്ട്.
      
       2020 ഒക്ടോബർ ൽ ആയിരുന്നു ഞങ്ങൾ bibliophilic insanities എന്ന പേജ് ന് തുടക്കം കുറിച്ചത്.ആദ്യമായി നല്ക്കിയ പേര് book lovers എന്നത് ആണ്...
      എന്നാൽ അധികം താമസിക്കാതെ തന്നെ മറ്റൊരു പേര് ഞങ്ങൾ കണ്ടെത്തിയിരുന്നു. പുസ്തകം വിൽക്കുക എന്നത് ഞങ്ങളുടെ മനസ്സിൽ പോലും ഉണ്ടായിരുന്ന കാര്യമായിരുന്നില്ല..
      
      പുസ്തക നിരുപണങ്ങളും, കവിതകളും എല്ലാമായിരുന്നു ഞങ്ങൾ  തിരഞ്ഞെടുത്തത്.....
      എന്നാൽ വായനക്കാരുടെ പ്രതിസന്ധി പുസ്തകങ്ങളുടെ വില തന്നെ ആയിരുന്നു...അവർക്ക് കുറഞ്ഞ വിലയിൽ കൂടുതൽ പുസ്തകം എന്ന ലക്ഷ്യത്തിൽ ആണ് പുസ്തകം  വിൽക്കുക എന്ന ആശയത്തിൽ ഞങ്ങൾ എത്തി ചേരുന്നത്.... അതിന്റെ ഭാഗമായി കുറച്ച് പുസ്തകങ്ങൾ  ഞങ്ങൾ വാങ്ങി.... ആവശ്യപെടുന്ന പുസ്തകം ആദ്യ സമയങ്ങളിൽ എത്തിക്കാൻ വളരെ പ്രയാസമായിരുന്നു....
      എന്നാൽ  കലക്രമേണ അതിന് മാറ്റമുണ്ടായി.....
      പുസ്തകം വാങ്ങാൻ  വരുന്ന ഓരോ ആളുകളും പ്രിയപ്പെട്ടതായി...
      ഇന്ന് 2 പുസ്തകങ്ങളുടെ പ്രസാധകരായി മാറുവാൻ വരെ ഞങ്ങൾക് സാധിച്ചു..വായനയെ സൗഹൃദത്തെ ഈ കൂട്ടായ്മ ഇന്നും ശക്തിപ്പെടുത്തുകയാണ്..."`,
      main: "img/alumni/Sulaikha/main.jpg",

      img: [
        {
          url: "img/alumni/Sulaikha/IMG_20230411_155234.jpg",
        },
        {
          url: "img/alumni/Sulaikha/IMG_20230411_155257.jpg",
        },
        {
          url: "img/alumni/Sulaikha/IMG_20230411_155311.jpg",
        },
        {
          url: "img/alumni/Sulaikha/IMG_20230411_155405.jpg",
        },
        {
          url: "img/alumni/Sulaikha/IMG_20230411_155417.jpg",
        },
      ],
    },
    {
      title: "ANJALY PRADEEP",
      work: "ASTRID HOFFERSON",
      text: `"ABLAZE AKHMA COLLEGE UNION നടത്തിയ  'അകന്നോണം ' മലയാളിമങ്ക മത്സരത്തിന് വേണ്ടിയുള്ള ഫോട്ടോ ഷൂട്ട് ആയിരുന്നു ആദ്യമായി എൻ്റെ യൂട്യൂബ് ചാനലിൻ്റെ കണ്ടൻ്റ് ആയി മാറിയത്.പിന്നീട് ഓൺലൈൻ ക്ലാസ്സുകളും മിസ്സ് ചെയ്യുന്ന കോളേജ് വൈബും ഒക്കെ അപ്‌ലോഡ് ചെയ്തു.വിദ്യാർഥികൾ കാണാൻ തുടങ്ങിയപ്പോൾ കൂടുതൽ കാര്യങ്ങൾ ചെയ്യണം എന്ന് തോന്നി. കോവിഡ് കാലത്ത് ഫുഡ് എക്സ്പ്ലോറിങ് ഒക്കെ ഉൾപെടുത്തി വീഡിയോ ചെയ്തു.തിരികെ കോളേജിൽ എത്തിയപ്പോൾ ഒരു മോമൻ്റ് പോലും നഷ്ടപ്പെടുത്തരുത് എന്ന ചിന്ത ആയിരുന്നു മനസ്സിൽ.'സംഭാരം ' വീഡിയോ ചെയ്തപ്പോൾ അത്  2 മില്യൺ വ്യൂസിൽ എത്തി. ഇന്ന് 4.5 k സബ്സ്ക്രൈബർസ് വരെ ഉണ്ട്...
      ജുനിയേഴ്സ് ഒക്കെ അഡ്മിഷൻ എടുക്കാൻ വരുന്ന സമയത്ത്  സെർച്ച് ചെയ്യുമ്പോൾ കോളജിലെ നല്ല പരിപാടികൾ കാണണം എന്ന ആഗ്രഹവും ഇതുവഴി സാധിച്ചു. സംസാരിക്കാനും വീഡിയോ എടുക്കാനുമുള്ള എൻ്റെ ഇഷ്ടത്തിലൂടെ ഒന്ന് എംഗേജ്ഡ് ആയിരിക്കാൻ യൂട്യൂബ് ചാനൽ സഹായിച്ചു.
      `,
      main: "img/alumni/Anjali/main.jpg",

      img: [
        {
          url: "img/alumni/Anjali/IMG_20230411_161833.jpg",
        },
        {
          url: "img/alumni/Anjali/IMG_20230411_161856.jpg",
        },
        {
          url: "img/alumni/Anjali/IMG_20230411_161932.jpg",
        },
        {
          url: "img/alumni/Anjali/IMG_20230411_161948.jpg",
        },
      ],
    },
  ];

  return (
    <>
      <center>
        <p className="text-blue-600 font-bold" style={{ fontFamily: "Oswald" }}>
          all those efforts were not in vain..here by we proudly presents our
          entrepreneurs emerged out from those dark days
        </p>
        <Carousel
          // partialVisible={true}
          responsive={responsive}
          infinite={true}
          containerClass="cardSize"
          autoPlay={true}
          autoPlaySpeed={3000}
          // centerMode={true}
          // partialVisbile={true}
          // showDots={true}
          // renderButtonGroupOutside={Fade}
        >
          {Alumni.map((key, index) => {
            const tmpImgURL = key.main;
            return (
              <>
                <Link
                  key={index}
                  // onClick={() => openprofile(key.id)}
                  className="test1"
                  style={{
                    marginLeft: "5%",
                    // textAlign: "bottom",
                    background: "#282828",
                    fontSize: "150%",
                    height: "50vh",
                    width: "80%",
                    backgroundImage: `url(${tmpImgURL})`,
                    // backgroundColor: "transparent",
                    // backgroundImage: `url("${tmpImgURL}")`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    borderRadius: "2%",
                    backgroundPosition: "center",

                    alignItems: "center",
                    justifyContent: "center",
                    textDecoration: "none",
                    color: "white",
                  }}
                  to={"./alumniDet/" + key.title.trim()}
                  state={{ data: key }}
                >
                  <center className="bruh" style={{ width: "85%" }}>
                    <h1
                      className="module line-clamp headingText"
                      style={{
                        fontSize: "125%",
                        fontFamily: "fantasy",
                        color: "#000",
                        letterSpacing: "4px",
                      }}
                    >
                      {key.work}
                    </h1>
                    <p
                      className="modulo line-clamp headingText"
                      style={{
                        fontSize: "100%",
                        fontFamily: "fantasy",
                        color: "#000",
                        letterSpacing: "4px",
                      }}
                    >
                      {key.title}
                    </p>
                  </center>
                </Link>
              </>
            );
          })}
        </Carousel>
      </center>
    </>
  );
};

export default Alumni;
