import Image from 'next/image';

export default function RankedEmblem({ tier, rank }: { tier: string; rank: string }) {
    const tierEmblem = tier.charAt(0) + tier.slice(1).toLowerCase();

    if (tier === 'UNRANKED') {
        return;
    }
  
    return (
      <Image
        src={`/ranked-emblems/Rank=${tierEmblem}.png`}
        alt={`${tier} ${rank}`}
        width={82}
        height={82}
      />
    );
}