'use client'

import Image from 'next/image';
import ChampionMasteryCard from './ChampionMasteryCard';
import { useQuery } from '@tanstack/react-query';
import { getChampionIds } from '@/utils/data-dragon';
import { ProfileData } from '@/utils/types';

type ProfileProps = {
    profileData: ProfileData; // TEMP HEHEXD !!!!
}

export default function Profile({ profileData }: ProfileProps) {
    const { data: championIds, isLoading } = useQuery({
        queryKey: ['championIds'],
        queryFn: getChampionIds,
    });

    if (isLoading) {
        return;
    }

    const championNames = []

    for (const mastery of profileData.masteryData) {
        championNames.push(championIds[mastery.championId]);
    }

    return (
        <div>
            <div className="flex flex-col place-items-center gap-y-16">
                <div className="outline outline-4 outline-offset-8 rounded-full outline-primary">
                    <Image className="rounded-full" src={profileData.profileIcon} alt="Profile Icon" width={216} height={216} priority={true} />
                </div>
                <div className="text-center">
                    <h1 className="font-semibold">{profileData.gameName}</h1>
                    <h2 className="text-white/30">#{profileData.tagLine}</h2>
                </div>
                <div className="flex flex-col gap-y-2 text-center">
                    <div className="rounded-full px-4 py-1 bg-primary font-semibold">
                        <h3>Level {profileData.summonerLevel}</h3>
                    </div>
                    {/* <div className="rounded-full px-4 py-1 bg-primary font-semibold">
                        <h3>Other stuff</h3>
                    </div>
                    <div className="rounded-full px-4 py-1 bg-primary font-semibold">
                        <h3>Inter</h3>
                    </div> */}
                </div>
                <div className="flex flex-row gap-x-3 mt-5">
                    {championNames.map((championName: string, idx: number) => {
                        return (
                            <ChampionMasteryCard key={idx} championName={championName} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}