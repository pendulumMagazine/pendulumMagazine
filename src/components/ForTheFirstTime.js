const ForTheFirstTime = () => {
  const items = [
    {
      title: "Education",
      subTitle: "CEPHALON",
      link: "https://tinyurl.com/etz2banr",
      description: `Question booklet series for all 4 years (includes University question papers of more than 10 years)
      For obtaining this, use the link given below`,
      img: [
        {
          url: require("../elements/forTheFirstTime/education/IMG_20230314_235339.jpg"),
        },
        {
          url: require("../elements/forTheFirstTime/education/IMG_20230314_235516.jpg"),
        },
        {
          url: require("../elements/forTheFirstTime/education/IMG_20230314_235600.jpg"),
        },
        {
          url: require("../elements/forTheFirstTime/education/IMG_20230314_235622.jpg"),
        },
      ],
    },
    {
      title: "INFRASTRUCTURE",
      subTitle: "",
      link: "",
      description: `In association with PTA, renovated and painted washroom with full fledged latrines, napkin vending mechine and napkin incinerator.`,
      img: [
        {
          url: require("../elements/forTheFirstTime/infrastructure/IMG_20230315_001100.jpg"),
        },
        {
          url: require("../elements/forTheFirstTime/infrastructure/IMG_20230315_001140.jpg"),
        },
        {
          url: require("../elements/forTheFirstTime/infrastructure/IMG-20230311-WA0004.jpg"),
        },
        {
          url: require("../elements/forTheFirstTime/infrastructure/Picsart_23-03-15_00-10-24-618.jpg"),
        },
      ],
    },
    {
      title: "ENTERTAINMENT",
      subTitle: "DHANAK",
      link: "https://tinyurl.com/3usfnpht",
      description: `One month-long online arts fest including more than 100 events, bringing new experiences for students and creating core memories stored in our Instagram page specially created for the arts fest 2020.`,
      img: [
        {
          url: require("../elements/forTheFirstTime/entertainment/IMG_20230315_002246.jpg"),
        },
        {
          url: require("../elements/forTheFirstTime/entertainment/IMG_20230315_002307.jpg"),
        },
      ],
    },
    {
      title: "INNOVATIVE",
      subTitle: "CANDID",
      link:
        //  `https://www.spreaker.com/show/dpmhmccandidradio?fbclid=PAAabD1YgShL8AktoGEQ39plAV6Hj3hRECL1_L5hVVefXxrexKSt3wyvNvlkE
        // `,
        `https://tinyurl.com/whx6bzps`,
      description: `Padiar's own radio station with student radio jockeys making each week fun with music, chit chats, and fun activities.`,
      img: [
        {
          url: require("../elements/forTheFirstTime/innovative/IMG_20230315_003502.jpg"),
        },
        {
          url: require("../elements/forTheFirstTime/innovative/IMG_20230315_003518.jpg"),
        },
        {
          url: require("../elements/forTheFirstTime/innovative/IMG_20230315_003534.jpg"),
        },
      ],
    },
    {
      title: "HEALTH & FITNESS",
      subTitle: "TABLE TENNIS",
      description: `Introduced and set up table tennis on campus providing students with more options for indoor activities.`,
      img: [
        {
          url: require("../elements/forTheFirstTime/health.jpg"),
        },
      ],
    },

    {
      title: "FRIENDSHIP & MEMORY",
      subTitle: "ABLAZE CORNER",
      description: `A corner to hang out and relax, with turtle vines and aquatic paintings done by our students. A place to make lots of friendly conversations and memories.`,
      img: [
        {
          url: require("../elements/forTheFirstTime/friendship/IMG_20230315_010924.jpg"),
        },
        {
          url: require("../elements/forTheFirstTime/friendship/IMG_20230315_010935.jpg"),
        },
        {
          url: require("../elements/forTheFirstTime/friendship/IMG_20230315_010955.jpg"),
        },
        {
          url: require("../elements/forTheFirstTime/friendship/IMG_20230315_011011.jpg"),
        },
        {
          url: require("../elements/forTheFirstTime/friendship/IMG_20230315_011552.jpg"),
        },
        {
          url: require("../elements/forTheFirstTime/friendship/InShot_20230315_011409086.jpg"),
        },
      ],
    },
    {
      title: "SIGNATURE",
      subTitle: "PENDULUM",
      description: `First ever E-magazine publishing as a website. `,
      img: [
        {
          url: require("../elements/forTheFirstTime/signature.jpg"),
        },
      ],
    },
  ];
  return (
    <>
      <center className="">
        <p
          className="text-center family underline underline-offset-8"
          style={{ fontFamily: "Oswald" }}
        >
          For The First Time
        </p>
        <hr style={{ maxWidth: "80%" }} />

        {items.map((report) => {
          return (
            <center>
              <p className="tracking-wide fs-1 font-bold my-2">
                {report.title}
              </p>
              <p className="tracking-wide sm:mx-10 my-2">{report.subTitle}</p>
              <center className="flex flex-wrap justify-center">
                {report.img.map((i, index) => {
                  return (
                    <div
                      key={index}
                      className="mx-2 my-1 border-dark rounded-lg border border-solid border-2"
                    >
                      <img
                        style={{
                          maxHeight: "200px",
                        }}
                        key={index}
                        src={i.url}
                        className="rounded-lg"
                      />
                    </div>
                  );
                })}
              </center>
              <p className="tracking-wide" style={{ whiteSpace: "inherit" }}>
                {report.description}
                {/* <div dangerouslySetInnerHTML={{ __html: report.description }} /> */}
              </p>
              <a href={report.link} style={{ width: "90%" }}>
                {report.link}
              </a>
              <hr style={{ maxWidth: "80%" }} />
            </center>
          );
        })}
      </center>
    </>
  );
};

export default ForTheFirstTime;
