export default function StatsCard() {
    return (
        <div className="w-full h-full p-8">
            <div className="text-center mb-6">
                <h3 className="font-semibold text-center">STATS</h3>
            </div>
            <div className="flex items-center justify-center">
                <div className="flex flex-col gap-y-3 w-full">
                    <div className="flex justify-between">
                        <div className="inline-flex items-center gap-x-3">
                            <svg className="text-primary" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 22 22">
                                <path id="swords" d="M98.755-862.33l-3.218-3.19-2.42,2.42-.77-.77a2.129,2.129,0,0,1-.632-1.568,2.129,2.129,0,0,1,.632-1.568L97-871.652a2.128,2.128,0,0,1,1.568-.633,2.128,2.128,0,0,1,1.567.633l.77.77-2.42,2.42,3.19,3.218a1.055,1.055,0,0,1,.33.77,1.055,1.055,0,0,1-.33.77L100.3-862.33a1.056,1.056,0,0,1-.77.33A1.055,1.055,0,0,1,98.755-862.33ZM102-879.6,89.515-867.115l.138.11a2.129,2.129,0,0,1,.632,1.568,2.129,2.129,0,0,1-.632,1.568l-.77.77-2.42-2.42-3.218,3.19a1.055,1.055,0,0,1-.77.33,1.056,1.056,0,0,1-.77-.33l-1.375-1.375a1.055,1.055,0,0,1-.33-.77,1.055,1.055,0,0,1,.33-.77l3.19-3.218-2.42-2.42.77-.77a2.128,2.128,0,0,1,1.568-.633,2.128,2.128,0,0,1,1.567.633l.11.137L97.6-884H102Zm-16.555,5.445L80-879.6V-884h4.4l5.445,5.445Z" transform="translate(-80 884)" fill="currentColor" />
                            </svg>
                            <h3>KILLS</h3>
                        </div>
                        <h3>WIP</h3>
                    </div>
                    <div className="flex justify-between">
                        <div className="inline-flex items-center gap-x-3">
                            <svg className="text-primary" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 21.827 21.827">
                                <path id="skull" d="M89.276-864.994H92.55l-1.637-3.274Zm-2.183-3a2.1,2.1,0,0,0,1.542-.641,2.1,2.1,0,0,0,.641-1.542,2.1,2.1,0,0,0-.641-1.542,2.1,2.1,0,0,0-1.542-.641,2.1,2.1,0,0,0-1.542.641,2.1,2.1,0,0,0-.641,1.542,2.1,2.1,0,0,0,.641,1.542A2.1,2.1,0,0,0,87.094-868Zm7.639,0a2.1,2.1,0,0,0,1.542-.641,2.1,2.1,0,0,0,.641-1.542,2.1,2.1,0,0,0-.641-1.542,2.1,2.1,0,0,0-1.542-.641,2.1,2.1,0,0,0-1.542.641,2.1,2.1,0,0,0-.641,1.542,2.1,2.1,0,0,0,.641,1.542A2.1,2.1,0,0,0,94.733-868Zm-10.368,9.822v-4.638a6.268,6.268,0,0,1-1.869-1.241,7.8,7.8,0,0,1-1.364-1.76,8.473,8.473,0,0,1-.846-2.1A9.093,9.093,0,0,1,80-870.178a9.087,9.087,0,0,1,3.056-7.066A11.286,11.286,0,0,1,90.913-880a11.286,11.286,0,0,1,7.858,2.756,9.087,9.087,0,0,1,3.056,7.066,9.092,9.092,0,0,1-.286,2.264,8.473,8.473,0,0,1-.846,2.1,7.8,7.8,0,0,1-1.364,1.76,6.268,6.268,0,0,1-1.869,1.241v4.638H94.187v-2.183H92v2.183H89.822v-2.183H87.639v2.183Z" transform="translate(-80 880)" fill="currentColor" />
                            </svg>
                            <h3>DEATHS</h3>
                        </div>
                        <h3>WIP</h3>
                    </div>
                    <div className="flex justify-between">
                        <div className="inline-flex items-center gap-x-3">
                            <svg className="text-primary" xmlns="http://www.w3.org/2000/svg" width="20" height="23" viewBox="0 0 20.8 26">
                                <path id="health_and_safety_24dp_E8EAED_FILL1_wght400_GRAD0_opsz24" d="M168.45-862.45h3.9v-3.25h3.25v-3.9h-3.25v-3.25h-3.9v3.25H165.2v3.9h3.25ZM170.4-854a12.952,12.952,0,0,1-7.459-5.184A14.929,14.929,0,0,1,160-868.17v-7.93l10.4-3.9,10.4,3.9v7.93a14.929,14.929,0,0,1-2.941,8.986A12.952,12.952,0,0,1,170.4-854Z" transform="translate(-160 880)" fill="currentColor" />
                            </svg>
                            <h3>ASSISTS</h3>
                        </div>
                        <h3>WIP</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}