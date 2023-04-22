const Sept = () => {
  const reports = [
    {
      day: 7,
      title: `സെപ്റ്റംബർ 7ന്  CEPHALON രണ്ടാം ഭാഗം പ്രസിദ്ധീകരിച്ചു
            `,
      img: [],
    },
    {
      day: 8,
      title: `ഓൺലൈൻ ക്ലാസുകൾ തുടരുന്ന സാഹചര്യത്തിൽ നോട്ടുകൾ സൂക്ഷിക്കുവാനായി ഒരു ഡ്രൈവ് യൂണിയൻ തയ്യാറാക്കി.വിദ്യാർത്ഥികൾ നേരിട്ട ഫോൺ സ്റ്റോറേജ് പരിമിതി പ്രശ്നം ഒരു പരിധിവരെ ഇതുകൊണ്ട് പരിഹരിക്കുവാൻ സാധിച്ചു ഓരോ യൂണിയൻ മെമ്പറും തങ്ങളുടെ ക്ലാസുകൾ ഡ്രൈവിൽ കൃത്യമായി പ്‌ലോഡ് ചെയ്തു.`,
      img: [],
    },
    {
      day: 9,
      title: `AKHMA പടിയാർ യൂണിറ്റ് പ്രഗൽഭനായ Dr.SAPTHARSHI  BANARJI  യെ പങ്കെടുപ്പിച്ച APRICUS  വെബിനാറിൽ കോളേജ് യൂണിയനും ഭാഗമായി.`,
      img: [],
    },
    {
      day: 27,
      title: `സെപ്റ്റംബർ 27 ന് ഓൺലൈൻ ആർട്സ് ഫെസ്റ്റ് DHANAK ഔപചാരികമായി ഉദ്ഘാടനം ചെയ്തു.ഒരു മാസത്തോളം നൂറിൽ അധികം മത്സര ഇനങ്ങൾ സംഘടിപ്പിച്ചു.`,
      img: [],
    },
    {
      day: 28,
      title: `
            ഒക്ടോബർ നവംബർ പ്രധാന ദിവസങ്ങളിൽ യൂണിയൻ പോസ്റ്റർ ചെയ്തു.
            \t
            https://instagram.com/dhanak_2020?igshid=YmMyMTA2M2Y=
            `,

      img: [],
    },
  ];

  return (
    <>
      <div className="p-8">
        <p className="family underline underline-offset-8">
          September / October
        </p>

        {reports.map((report) => {
          return (
            <center>
              <center className="flex flex-wrap justify-center">
                {report.img.map((i, index) => {
                  return (
                    <div
                      key={index}
                      className="mx-2 my-1 rounded-lg border-dark border border-solid border-2"
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
              <p className="tracking-wide font-bold sm:mx-10 my-2">
                {report.title}
              </p>
              <hr style={{ maxWidth: "80%" }} />
            </center>
          );
        })}
      </div>
    </>
  );
};

export default Sept;
