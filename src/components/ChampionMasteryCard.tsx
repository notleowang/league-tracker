'use client'

import { getChampionIcon, getLatestVersion } from "@/utils/data-dragon"
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

export default function ChampionMasteryCard({ championName }: { championName: string }) {
    const { data: version } = useQuery({
        queryKey: ['version'],
        queryFn: getLatestVersion,
    });

    return (
        <div className="relative border-2 w-24 h-24">
            <Image src={getChampionIcon(championName, version)} alt="championIcon" fill={true} sizes="33vw" priority={true} />
        </div>
    )
}