const April = () => {

    const reports = [
        {
            day: 10,
            title: `ഏപ്രിൽ 10  Hahnneman Day ആഘോഷിക്കുന്നതിന്റെ ഭാഗമായി drug lecture കോമ്പറ്റീഷൻ സംഘടിപ്പിച്ചു. നാലാം വർഷ വിദ്യാർഥി അരുമ പ്രകാശ് ഒന്നാംസ്ഥാനം നേടി. `,
            img: []
        },
        {
            day: 11,
            title: `11 മുതൽ നടന്ന AKHMA ഇന്റർ കോളേജ് ഓൺലൈൻ ആർട്സ് ഫെസ്റ്റ്  Lege Artis Natura- ൽ വിദ്യാർത്ഥികളെ പങ്കെടുപ്പിച്ചു. മികച്ച സ്ഥാനങ്ങൾ ഇവർ കരസ്ഥമാക്കി.`,
            img: []
        },
        {
            day: 12,
            title: `ലോക പുസ്തക ദിനത്തിൻറെ ഭാഗമായി "പ്രിയപുസ്തകവും അടിക്കുറിപ്പുകളും" വിദ്യാർഥികളിൽ നിന്ന് ശേഖരിച്ചു.`,
            img: []
        },
        {
            day: 13,
            title: `GHMCT സംഘടിപ്പിച്ച TYPING ഇൻറർ കോളേജ് ആർട്സ് ഫെസ്റ്റിവൽ വിദ്യാർത്ഥികളെ പങ്കെടുപ്പിച്ചു. മികച്ച സമ്മാനങ്ങൾ കരസ്ഥമാക്കി.
            `,
            img: []
        },
        {
            day: 29,
            title: `International dance day യുടെ ഭാഗമായി ഏപ്രിൽ 29ന് " Feet of Fire" എന്ന പേരിൽ ഇൻറർ കോളേജ് ഡാൻസ് ഫെസ്റ്റ് നടത്തി. ഇരിഞ്ഞാലക്കുട ക്രൈസ്റ്റ് കോളേജിലെ വിദ്യാർഥി അനഘ കെബി വിജയിയായി. `,
            img: []
        },
        {
            day: 30,
            title: `ഏപ്രിൽ മാസത്തെ പ്രധാന ദിവസങ്ങളായ ലോക ആരോഗ്യ ദിനം , ഹീമോഫീലിയ ദിനം, ഭൗമ ദിനം, മലേറിയ ദിനം തുടങ്ങിയവയേപ്പറ്റി അറിയിക്കുവാനായി പോസ്റ്റർ ചെയ്തു.
            `,
            img: []
        },
    ]
    return (
        <>
            <div className="p-8">
                <p className="family underline underline-offset-8">April</p>

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

export default April;