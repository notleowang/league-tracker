'use server'

// import { createClient } from '@supabase/supabase-js'

const riotURL = 'https://americas.api.riotgames.com'; // Americas Cluster (closest to me)
const riotNa1URL = 'https://na1.api.riotgames.com'; // NA region
const riotKey = process.env.RIOT_API_KEY!;

// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
// const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
// const supabase = createClient(supabaseUrl, supabaseKey);

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

// RATE LIMIT: 20000 requests every 10 seconds and 1200000 requests every 10 minutes
export async function getChampionMasteries(puuid: string) {
    console.log("FETCHING CHAMPION MASTERIES");
    const response = await fetch(`${riotURL}/lol/champion-mastery/v4/champion-masteries/by-puuid/${puuid}?api_key=${riotKey}`);

    if (!response.ok) {
        handleError(response);
        throw new Error('Network response was not ok');
    }

    const data = await response.json();

    return data; 
}

// RATE LIMIT: 20000 requests every 10 seconds and 1200000 requests every 10 minutes
export async function getTopChampionMasteries(puuid: string) {
    console.log("FETCHING TOP CHAMPION MASTERIES");
    const response = await fetch(`${riotNa1URL}/lol/champion-mastery/v4/champion-masteries/by-puuid/${puuid}/top?api_key=${riotKey}`);

    if (!response.ok) {
        handleError(response);
        throw new Error('Network response was not ok');
    }

    const data = await response.json();

    return data; 
}


// RATE LIMIT: 2000 REQUESTS EVERY 10 SECONDS
export async function getMatches(puuid: string) {
    console.log("FETCHING MATCHES");
    const response = await fetch(`${riotURL}/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=100&api_key=${riotKey}`);

    if (!response.ok) {
        handleError(response);
        throw new Error('Network response was not ok');
    }

    const data = await response.json();

    return data;
}

// RATE LIMIT: 2000 REQUESTS EVERY 10 SECONDS
export async function getMatch(matchId: string) {
    console.log("FETCHING MATCH");
    const response = await fetch(`${riotURL}/lol/match/v5/matches/${matchId}?api_key=${riotKey}`)

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

// HELPER FUNCTION THAT DOES THE FOLLOWING BASED ON 0 TO 100 MOST RECENT MATCHES:
// 1. Filters matches and makes a new list with only Summoner Rift Games.
//      1a. Gets total kills, deaths, and assists
// 2. Gets top 3 most played champions
// 3. Gets top 3 champions played with most deaths
// 4. Gets top 3 most played with teammates
// export async function matchHandler(matchIds: string[]) {
    
// }

// Filters 50 Matches and makes a new list with only Summoner Rift Games.
// export async function getSummonerRiftMatches(matchIds: string[]) {
//     const summonerRiftGames = []
//     for (const id of matchIds) {
//         const data = await getMatch(id);

//         const matchInfo = data.info
//         const mapId = matchInfo.mapId;
        
//         if (mapId == 11) {
//             summonerRiftGames.push(matchInfo)
//         }
//     }

//     return "";
// }