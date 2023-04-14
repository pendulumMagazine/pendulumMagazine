const May = () => {
    const reports = [
        {
            day: 3,
            title: `മെയ് 3 ലോക ചിരി ദിനം ആഘോഷിക്കുവാനായി ചിരിപ്പിക്കുന്ന കോളേജ് നിമിഷങ്ങൾ വിദ്യാർത്ഥികൾക്ക് ട്രോള്, മീമ് ,ഫോട്ടോ എന്നിവയിലൂടെ ഷെയർ ചെയ്യുവാൻ അവസരം ഒരുക്കി.`,
            img: []
        },
        {
            day: 7,
            title: `റമദാൻ സന്ദേശത്തിന്റെ ഭാഗമായി മെയ് ഏഴാം തീയതി Healthy Cook Of Dabbir Akleek ഇൻറർ കോളേജ് കുക്കിംഗ് കോമ്പറ്റീഷൻ സംഘടിപ്പിച്ചു. നമ്മളുടെ കോളേജിലെ നാലാം വർഷ വിദ്യാർഥി അപർണ വി പി വിജയിച്ചു`,
            img: []
        },
        {
            day: 8,
            title: `മുഖ്യമന്ത്രിയുടെ ദുരിതാശ്വാസനിധിയിലേക്ക് കോളേജ് യൂണിയൻ സംഭാവന നൽകി. `,
            img: []
        },
        {
            day: 9,
            title: `ലോക്ക് ഡൗൺ തുടർന്നുപോകുന്ന സാഹചര്യത്തിൽ വിദ്യാർത്ഥികളുടെയും കുടുംബങ്ങളുടെയും ശാരീരിക ആരോഗ്യം ഉറപ്പാക്കുവാൻ "10 minutes 10 days" വർക്ക് ഔട്ട് ചലഞ്ച് നടത്തി.`,
            img: []
        },
        {
            day: 10,
            title: `ഈദ് ആഘോഷങ്ങളുടെ ഭാഗമായി ഇന്റർ കോളേജ് ഡ്യൂഡിൽ കോമ്പറ്റീഷൻ നടത്തി 26 ബാച്ചിലെ ഷിംന തസ്നിം ഒന്നാം സ്ഥാനം നേടി.`,
            img: []
        },
        {
            day: 11,
            title: `വിദ്യാർത്ഥികളുടെ കഴിവുകളെ പ്രോത്സാഹിപ്പിക്കുവാനായി ഈദ് മുബാറക് പോസ്റ്റർ ചെയ്യാനുള്ള അവസരം Intern ഷിഫക്ക് നൽകി.`,
            img: []
        },
        {
            day: 12,
            title: `കോവിഡ് 19 ബോധവൽക്കരണത്തിനായി "Make Your Mask" ചലഞ്ച് യൂണിയൻ അവതരിപ്പിച്ചു.`,
            img: []
        },
        {
            day: 13,
            title: `മെയ്ദിനം, ആസ്മാദിനം, തലാസീമിയ ദിനം, മാതൃദിനം, ഇൻറർനാഷണൽ നേഴ്സ് ഡേ, കുടുംബദിനം, ഹൈപ്പർ ടെൻഷൻ ദിനം, പുകയില്ല വിരുദ്ധ ദിനം തുടങ്ങിയവ വിദ്യാർത്ഥികളെ ഓർമിപ്പിക്കുവാനായി പോസ്റ്റർ ചെയ്തു.`,
            img: []
        },
    ];

    return (
        <>
            <div className="p-8">
                <p className="family underline underline-offset-8">May</p>

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

export default May;