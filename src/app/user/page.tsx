'use client'

import Profile from "@/components/Profile";
import { useSearchParams } from 'next/navigation';
import { getAccount, getTopChampionMasteries, getLeagueEntries, getMatches, getSummoner } from '@/app/api/riot';
import { useQuery } from '@tanstack/react-query';
import { fromSlug } from '@/utils/slug';
import { getProfileIcon, getLatestVersion } from '@/utils/data-dragon';
import SoloQueueCard from "@/components/SoloQueueCard";
import FlexQueueCard from "@/components/FlexQueueCard";
import KDACard from "@/components/KDACard";
import MostPlayedChampionsCard from "@/components/MostPlayedChampionsCard";
import WorstChampionsCard from "@/components/WorstChampionsCard";
import FavoriteTeammatesCard from "@/components/FavoriteTeammatesCard";
import AramCard from "@/components/AramCard";
import WinRateCard from "@/components/WinRateCard";
import StatsCard from "@/components/StatsCard";
import { LeagueEntry } from "@/utils/types";

export default function ProfilePage() {
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

    const { data: topMasteryData, error: topMasteryError, isLoading: isTopMasteryLoading } = useQuery({
        queryKey: ['topMasteries', puuid],
        queryFn: () => getTopChampionMasteries(puuid),
        enabled: !!puuid,               // The query will not execute if the puuid does not exist.
        retry: false,
    });

    // Account ID, and Summoner ID
    // const accountId = summonerData?.accountId;
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

    const { data: matchesData, error: matchesError, isLoading: isMatchesLoading } = useQuery({
        queryKey: ['matches', puuid],
        queryFn: () => getMatches(puuid),
        enabled: !!puuid,               // The query will not execute if the puuid does not exist.
        retry: false,
    });

    if (isAccountLoading || isSummonerLoading || isLeagueLoading || isMatchesLoading || isTopMasteryLoading) {
        return <div className="text-center">Loading Summoner Profile...</div>;
    }

    if (accountError || summonerError || leagueError || matchesError || topMasteryError) {
        return <div>{accountError?.message || summonerError?.message || leagueError?.message || matchesError?.message || topMasteryError?.message}</div>
    }

    const profileIconId = summonerData?.profileIconId;
    const summonerLevel = summonerData?.summonerLevel;

    // summonerIds
    // AcMJM8G9InKcMvFc8JXJ4HDkqetJUJZThX6CaUii3OBkzz8 krono
    // uweddVq7eB6_domY8tYQBU151SE48N12qFBhxkVdoEl_rXA notleo

    // puuid
    // ZGCWdKRRlOUdIgyxwp0RoCJ66Fk7VgbgubjFbhiuZlcF48u-Cpb1qVYJg4xR80_ibkP1PBbctyQvVQ notleo

    const profileData = {
        gameName: gameName,
        profileIcon: getProfileIcon(profileIconId, version),
        tagLine: tagLine,
        summonerLevel: summonerLevel,
        masteryData: topMasteryData,
    }

    const soloData = leagueData?.find((entry: LeagueEntry) => entry.queueType === 'RANKED_SOLO_5x5');
    const flexData = leagueData?.find((entry: LeagueEntry) => entry.queueType === 'RANKED_FLEX_SR');

    return (
        <>
            <div className="canvas">
                <div className="grid grid-cols-7 grid-rows-3 divide-x-2 divide-y-2 divide-foreground border-b-2">
                    <div className="row-span-3 col-span-2 place-content-center border-t-2">
                        <Profile profileData={profileData} />
                    </div>
                    <div className="col-span-2 place-content-center">
                        <SoloQueueCard data={soloData} />
                    </div>
                    <div className="aspect-square">
                        <KDACard data={matchesData} />
                    </div>
                    <div className="aspect-square">
                        <WinRateCard />
                    </div>
                    <div className="aspect-square">
                        WIP
                    </div>
                    <div className="col-span-2 place-content-center">
                        <FlexQueueCard data={flexData} />
                    </div>
                    <div className="aspect-square">
                        <StatsCard />
                    </div>
                    <div className="aspect-square">
                        WIP
                    </div>
                    <div className="aspect-square">
                        WIP
                    </div>
                    <div className="aspect-square">
                        <MostPlayedChampionsCard />
                    </div>
                    <div className="aspect-square">
                        <FavoriteTeammatesCard />
                    </div>
                    <div className="aspect-square">
                        <WorstChampionsCard />
                    </div>
                    <div className="col-span-2">
                        <AramCard />
                    </div>
                </div>
            </div>
            {/* <BackButton /> */}
        </>
    )
}