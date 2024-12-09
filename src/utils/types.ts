export interface LeagueEntry {
    queueType: string;
    rank?: string;
    wins?: number;
    losses?: number;
}

export interface RankedData {
    tier: string;
    rank: string;
    queueType: string;
    leaguePoints: number;
    wins: number;
    losses: number;
}

interface MasteryData {
    championId: number;
}

export interface ProfileData {
    profileIcon: string;
    gameName: string;
    tagLine: string;
    summonerLevel: number;
    masteryData: MasteryData[];
}