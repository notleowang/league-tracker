export async function getLatestVersion() {
    const response = await fetch('https://ddragon.leagueoflegends.com/api/versions.json');
    const versions = await response.json();

    return versions[0]; // always the latest version at index 0
}

export async function getChampionIds() {
    const response = await fetch(`https://ddragon.leagueoflegends.com/cdn/${await getLatestVersion()}/data/en_US/championFull.json`);
    const champions = await response.json();
    
    console.log(champions)
    
    return champions.keys;
}

export function getProfileIcon(profileId: number, version: string) {
    return `https://ddragon.leagueoflegends.com/cdn/${version}/img/profileicon/${profileId}.png`;
}

export function getChampionIcon(championName: string, version: string) {
    return `https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${championName}.png`;
}

export const rankedColorCodes: {[key: string]: string} = {
    "UNRANKED": "text-white/30",
    "IRON": "text-iron",
    "BRONZE": "text-bronze",
    "SILVER": "text-silver",
    "GOLD": "text-gold",
    "PLATINUM": "text-platinum",
    "EMERALD": "text-emerald",
    "DIAMOND": "text-diamond",
    "MASTER": "text-master",
    "GRANDMASTER": "text-grandmaster",
    "CHALLENGER": "text-challenger"
}

// export function calculateKDA(data: any) {

// }