const Aug = () => {
    const reports = [
        {
            day: 1,
            title: `കോവിഡ് 19 ചികിത്സാധാരയിൽ ഹോമിയോപ്പതിയെ പരിഗണിക്കണമെന്ന് ആവശ്യം ഉന്നയിച്ച AKHMA പ്രതിഷേധത്തിൽ യൂണിയൻ ഭാഗമായി.`,
            img: []
        },
        {
            day: 7,
            title: `ആഗസ്റ്റ് ഏഴിന് എൻവിയോൺമെൻറ് ഇമ്പാക്ട് ആക്ട്  ന് എതിരെ മാസ്സ് ഇമെയിൽ ക്യാമ്പയിനിൽ യൂണിയൻ പങ്കെടുത്തു.`,
            img: []
        },
        {
            day: 8,
            title: `വിദ്യാർത്ഥികൾക്ക് പഠനസഹായം ഉറപ്പാക്കുവാൻ CEPHALON എന്ന ക്വസ്റ്റ്യൻ ബുക്ലെറ്റ് സീരീസിന്റെ ആദ്യഭാഗം ഓഗസ്റ്റ് എട്ടിന് പ്രസിദ്ധീകരിച്ചു.`,
            img: []
        },
        {
            day: 11,
            title: `വിദ്യാർത്ഥികൾക്ക് ഒരു സംവാദത്തിന് അവസരം ഒരുക്കുവാൻ ഓഗസ്റ്റ് 11ന്  CANDID PADIAR'S OWN RADIO STATION ന് തുടക്കം കുറിച്ചു.ഒരല്പ നേരമെങ്കിലും വിദ്യാർത്ഥികളെ മിടുക്കരായ RJ മാരാക്കുവാനും ലോക്ഡൗണിന് ഇടയിൽ ഒരു ആസ്വാദനം പകരുവാനും CANDID ന് സാധിച്ചു.`,
            img: []
        },
        {
            day: 22,
            title: `22 23 24 ദിവസങ്ങളിൽ കാൻഡിലൂടെ 22 ബാച്ച് സീനിയേഴ്സിന് (ROCK STARS)ഓൺലൈൻ ഫെയർവെൽ നൽകി.
            `,
            img: []
        },
        {
            day: 25,
            title: `ഓഗസ്റ്റ് 25ന് ഓണാഘോഷ പരിപാടികൾക്ക് തുടക്കം കുറിച്ചു "അകന്നോണം" എന്ന പേരിൽ 'അകലങ്ങൾ തുടരട്ടെ ബന്ധങ്ങൾ അടുക്കട്ടെ 'എന്ന സന്ദേശം പകർന്നു.മലയാളത്തനിമ, ലൂപ് കുക്കിംഗ് കോമ്പറ്റീഷൻ, ഓണം ട്രഷറർ ഹണ്ട്, ട്രഡീഷണൽ വെയർ ഫോട്ടോ ചലഞ്ച് ,പൂക്കള മത്സരം, മാസ്ക് ഡിസൈനിങ് മത്സരം എന്നിവ നടത്തി.`,
            img: []
        },
    ]

    return (
        <>
            <div className="p-8">
                <p className="family underline underline-offset-8">August</p>

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


export default Aug