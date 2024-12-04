'use client'

import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { getAccount, getLeagueEntries, getSummoner } from '@/app/api/riot';
import { useQuery } from '@tanstack/react-query';
import { fromSlug } from '@/utils/slug';
import { getProfileIcon, getLatestVersion } from '@/utils/data-dragon';
import RankedEmblem from './RankedEmblem';
import RankedCard from './RankedCard';

export default function Profile() {
    const searchParams = useSearchParams();
    const gameName = fromSlug(searchParams.get('gameName') as string);
    const tagLine = fromSlug(searchParams.get('tagLine') as string);

    const { data: accountData, error: accountError, isLoading: isAccountLoading } = useQuery({
        queryKey: ['account', gameName, tagLine],
        queryFn: () => getAccount(gameName, tagLine),
        enabled: !!gameName && !!tagLine,
        retry: false,
    });

    // Encrypted PUUID
    const puuid = accountData?.puuid;

    const { data: summonerData, error: summonerError, isLoading: isSummonerLoading } = useQuery({
        queryKey: ['summoner', puuid],
        queryFn: () => getSummoner(puuid),
        enabled: !!puuid,               // The query will not execute if the puuid does not exist.
        retry: false,
    });

    // Account ID, and Summoner ID
    const accountId = summonerData?.accountId;
    const summonerId = summonerData?.id;

    const { data: leagueData, error: leagueError, isLoading: isLeagueLoading } = useQuery({
        queryKey: ['league', summonerId],
        queryFn: () => getLeagueEntries(summonerId),
        enabled: !!summonerData,        // The query will not execute if the summonerId does not exist.
        retry: false,
    });

    const { data: version } = useQuery({
        queryKey: ['version'],
        queryFn: getLatestVersion,
    });

    if (isAccountLoading || isSummonerLoading || isLeagueLoading) {
        return <div>Loading...</div>;
    }

    if (accountError || summonerError || leagueError) {
        return <div>{accountError?.message || summonerError?.message || leagueError?.message}</div>
    }

    const profileIconId = summonerData?.profileIconId;
    const summonerLevel = summonerData?.summonerLevel;

    // AcMJM8G9InKcMvFc8JXJ4HDkqetJUJZThX6CaUii3OBkzz8
    // uweddVq7eB6_domY8tYQBU151SE48N12qFBhxkVdoEl_rXA notleo

    return (
        <div>
            <div className="flex flex-col place-items-center gap-y-5 mb-10">
                <div className="text-center">
                    <h1 className="font-semibold">{gameName}</h1>
                    <h2 className="text-gray-400">#{tagLine}</h2>
                </div>
                <div className="relative">
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                        <p className="text-sm font-semibold inline-block px-4 text-center rounded-full bg-primary text-foreground">{summonerLevel}</p>
                    </div>
                    <div className="rounded-full border-4 border-primary p-3.5">
                        <Image className="rounded-full" src={getProfileIcon(profileIconId, version)} alt="Profile Icon" width={100} height={100} priority={true} />
                    </div>
                </div>
            </div>

            <RankedCard queueData={leagueData} />
        </div>
    )
}