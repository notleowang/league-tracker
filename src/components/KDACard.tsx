// import { calculateKDA } from "@/utils/data-dragon";

type KDACardProps = {
    data: null; // temp
}

export default function KDACard({ data }: KDACardProps) {
    if (!data) {
        return;
    }

    // calculateKDA();

    return (
        <div className="relative w-full h-full p-8">
            <div className="text-center">
                <p className="text-xs">5V5 SUMMONER&#39;S RIFT</p>
                <h3 className="font-semibold text-center">KDA</h3>
            </div>
            <p className="text-primary text-6xl font-semibold absolute inset-0 flex items-center justify-center">4.20</p>
        </div>
    )
}