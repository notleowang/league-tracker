'use server'

import { createClient } from '@supabase/supabase-js'

const riotURL = 'https://americas.api.riotgames.com'; // Americas Cluster (closest to me)
const riotNa1URL = 'https://na1.api.riotgames.com'; // NA region
const riotKey = process.env.RIOT_API_KEY!;

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

// RATE LIMIT: 1000 REQUESTS EVERY 1 MINUTES
export async function getAccount(gameName: string, tagLine: string) {
    console.log("FETCHING ACCOUNT");
    const response = await fetch(`${riotURL}/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}?api_key=${riotKey}`);

    if (!response.ok) {
        handleError(response);
        throw new Error(`No results found for player with riot id ${gameName}#${tagLine}`);
    }

    const data = await response.json();

    return data;
}

// RATE LIMIT: 1600 REQUESTS EVERY 1 MINUTES
export async function getSummoner(puuid: string) {
    console.log("FETCHING SUMMONER");
    const response = await fetch(`${riotNa1URL}/lol/summoner/v4/summoners/by-puuid/${puuid}?api_key=${riotKey}`);

    if (!response.ok) {
        handleError(response);
        throw new Error('Network response was not ok');
    }

    const data = await response.json();

    return data;
}

// RATE LIMIT: 500 REQUESTS EVERY 10 SECONDS
export async function getLeagueEntries(summonerId: string) {
    console.log("FETCHING LEAGUE ENTRIES");
    const response = await fetch(`${riotNa1URL}/lol/league/v4/entries/by-summoner/${summonerId}?api_key=${riotKey}`);

    if (!response.ok) {
        handleError(response);
        throw new Error('Network response was not ok');
    }

    const data = await response.json();

    return data;
}

async function handleError(response: Response) {
    const error = await response.json();

    console.log(`${error.status.status_code}: ${error.status?.message}`);
}