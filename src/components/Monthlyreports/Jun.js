const Jun = () => {
    const reports = [
        {
            day: 1,
            title: 'ജൂണിലെ പ്രധാന ദിവസങ്ങൾ വിദ്യാർത്ഥികളിലേക്ക് എത്തിക്കുവാനായി പോസ്റ്റർ ചെയ്തു. ജൂൺ 5 പരിസ്ഥിതി ദിനത്തിൻറെ ഭാഗമായി പ്ലാന്റ് എ ട്രീ വിത്ത് അസ് ചലഞ്ച് നടത്തി.',
            img: []
        }
    ];
    return (<>
        <div className="p-8">
            <p className="family underline underline-offset-8">June</p>

            {
                reports.map(report => {
                    return (
                        <center >
                            <center className="flex flex-wrap justify-center">
                                {
                                    report.img.map((i, index) => {
                                        return (
                                            <div key={index} className="mx-2 my-1 rounded-lg border-dark border border-solid border-2">
                                                <img
                                                    style={{
                                                        maxHeight: '200px'

                                                    }}
                                                    key={index}
                                                    src={i.url}
                                                    className="rounded-lg"
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
    </>)
}

export default Jun