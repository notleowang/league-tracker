import Image from 'next/image';

export async function getLatestVersion() {
    const response = await fetch('https://ddragon.leagueoflegends.com/api/versions.json');
    const versions = await response.json();

    return versions[0]; // always the latest version at index 0
}

export function getProfileIcon(profileId: number, version: string) {
    return `https://ddragon.leagueoflegends.com/cdn/${version}/img/profileicon/${profileId}.png`;
}