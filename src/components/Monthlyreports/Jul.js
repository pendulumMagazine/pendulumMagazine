const Jul = () => {
    const reports = [
        {
            day: 1,
            title: `ഡോക്ടർ ദിനത്തിൻറെ ഭാഗമായി എല്ലാ അധ്യാപകരുടെയും ഫോട്ടോ ഉൾപ്പെടുത്തി പോസ്റ്റർ ചെയ്തു. 
        `,
            img: []
        },
        {
            day: 2,
            title: `പ്ലാസ്റ്റിക് ഫ്രീ ജൂലൈ എന്ന പുതിയ ഒരാശയം യൂണിയൻ അവതരിപ്പിച്ചു. Paper bag, cloth bag, paper waste box ബോക്സ് തുടങ്ങിയ വിവിധ വസ്തുക്കൾ നിർമ്മിക്കുന്ന വീഡിയോകൾ വിദ്യാർത്ഥികൾ ചെയ്തു. ഇവയും മറ്റു നിർദ്ദേശങ്ങളും യൂണിയൻ പേജിൽ പ്രദർശിപ്പിച്ചു.
            `,
            img: []
        },
        {
            day: 3,
            title: `കൊറോണ ജാഗ്രത നിർദ്ദേശങ്ങൾ ഉൾപ്പെടുന്ന വീഡിയോകളും മാനസിക സമ്മർദ്ദം കുറയ്ക്കുവാൻ കുടുംബങ്ങളുടെ ഭദ്രത കൂടുതൽ ഉറപ്പാക്കാനുള്ള സന്ദേശവും കൈമാറുവാൻ യൂണിയൻ പരമാവധി ശ്രമിച്ചു. `,
            img: []
        },
        {
            day: 4,
            title: `ഒരല്പം ആസ്വാദനത്തിനായി WAKE UP SHAKE UP എന്ന ക്വിസ് പരമ്പര,A-Z OF 2020 പോസ്റ്റർ സീരീസ് തുടങ്ങിയവ ചെയ്തു.`,
            img: []
        },
        {
            day: 5,
            title: `വിദ്യാർത്ഥികളെ കോളേജ് ദിവസങ്ങളിലേക്ക് നയിക്കുവാൻ ആയി സൗഹൃദ ദിനത്തിൽ അവരുടെ ചിത്രങ്ങൾ ഉൾപ്പെടുത്തി വീഡിയോ തയ്യാറാക്കി`,
            img: []
        }
    ]

    return (
        <>
            <div className="p-8">
                <p className="family underline underline-offset-8">July</p>

                {
                    reports.map(report => {
                        return (
                            <center >
                                <center className="flex flex-wrap justify-center">
                                    {
                                        report.img.map((i, index) => {
                                            return (
                                                <div key={index} className="mx-2 my-1 border-dark border border-solid border-2">
                                                    <img
                                                        style={{
                                                            maxHeight: '200px'

                                                        }}
                                                        key={index}
                                                        src={i.url}
                                                    />
                                                </div>
                                            )
                                        })
                                    }
                                </center>
                                <p className="tracking-wide font-bold sm:mx-10 my-2">{report.title}</p>
                                <hr style={{ maxWidth: "80%" }} />

                            </center>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Jul