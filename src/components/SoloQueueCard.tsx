import { rankedColorCodes } from "@/utils/data-dragon";
import RankedEmblem from "./RankedEmblem";
import { RankedData } from "@/utils/types";

type SoloQueueCardProps = {
    data: RankedData;
}

const Queue: { [key: string]: string } = {
    "RANKED_SOLO_5x5": "RANKED SOLO/DUO",
    "RANKED_FLEX_SR": "RANKED FLEX"
}

export default function SoloQueueCard({ data }: SoloQueueCardProps) {

    // If the solo queue data exists then set accordingly, else set to unranked.
    const tier = data ? data.tier : "UNRANKED";
    let rank = data ? data.rank : "";
    const queueType = data ? Queue[data.queueType]: "RANKED SOLO/DUO";
    const leaguePoints = data ? data.leaguePoints : 0;
    const wins = data ? Number(data.wins) : 0;
    const losses = data ? Number(data.losses) : 0;

    const textColor = rankedColorCodes[tier];

    // Check if tier is Master+ then set rank to empty string.
    if (tier === "MASTER" || tier === "GRANDMASTER" || tier === "CHALLENGER") {
        rank = "";
    }

    return (
        <div className="flex flex-row p-8">
            <div className="flex flex-col basis-1/2 text-center items-center">
                <p className="text-xs">{queueType}</p>
                <h2 className={`${textColor} font-semibold`}>{tier} {rank}</h2>
                <div className="relative w-36 h-36">
                    <RankedEmblem tier={tier} rank={rank} />
                </div>
            </div>
            <div className="basis-1/2 flex justify-center items-center">
                <div className={`flex flex-col gap-y-3 text-left ${data ? "" : textColor}`}>
                    <h3>{leaguePoints} LP</h3>
                    <h3>{wins}W {losses}L</h3>
                    <h3>{data ? (wins / (wins + losses) * 100).toFixed() : 0}% WR</h3>
                </div>
            </div>
        </div>
    )
}