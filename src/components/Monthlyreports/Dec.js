const Dec = () => {
    const reports = [
        {
            day: 1,
            title: `ഡിസംബറിൽ തുടങ്ങിയ കർഷക സമരത്തിന് ഐക്യദാർഢ്യം പ്രഖ്യാപിച്ചുകൊണ്ട് യൂണിയൻ വീഡിയോ ചെയ്തു.`,
            img: []
        },
        {
            day: 22,
            title: `Gelare Fiestaa 2.0 ഡിസംബർ 22ന് നടത്തി. കേക്കി ഡെക്കറേഷൻ, puppet show തുടങ്ങിയവ സംഘടിപ്പിച്ചു.`,
            img: []
        }
    ]
    return (
        <>
            <div className="p-8">
                <p className="family underline underline-offset-8">December</p>

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

export default Dec