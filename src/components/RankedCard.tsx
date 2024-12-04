import RankedEmblem from "./RankedEmblem";

export default function RankedCard({ queueData }: { queueData: any }) {
    const solo = queueData?.find((entry: any) => entry.queueType === 'RANKED_SOLO_5x5');
    const flex = queueData?.find((entry: any) => entry.queueType === 'RANKED_FLEX_SR');

    return (
        <div className="flex flex-row justify-center gap-x-3">
            <div className="ranked-card rounded-lg bg-primary w-80 py-2 px-5 space-y-2">
                <p className="font-semibold text-center">Ranked Solo/Duo</p>
                <div className="flex flex-col place-items-center">
                    <div className="">
                        <RankedEmblem tier={solo ? solo.tier : "UNRANKED"} rank={solo ? solo.rank : ""} />
                    </div>
                    <p className="font-semibold">{solo ? solo.tier + " " + solo.rank : "Unranked"}</p>
                </div>
            </div>

            <div className="ranked-card rounded-lg bg-primary w-80 py-2 px-5 space-y-2">
                <p className="font-semibold text-center">Ranked Flex</p>
                <div className="flex flex-col place-items-center">
                    <div className="">
                        <RankedEmblem tier={flex ? flex.tier : "UNRANKED"} rank={flex ? flex.rank : ""} />
                    </div>
                    <p className="font-semibold">{flex ? flex.tier + " " + flex.rank : "Unranked"}</p>
                </div>
            </div>
        </div>
    )
}