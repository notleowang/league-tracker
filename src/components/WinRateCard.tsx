export default function WinRateCard() {
    return (
        <div className="relative w-full h-full p-8">
            <div className="text-center">
                <p className="text-xs">5V5 SUMMONER&#39;S RIFT</p>
                <h3 className="font-semibold text-center">WIN RATE</h3>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
                graph
            </div>
        </div>
    )
}