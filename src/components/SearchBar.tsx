'use client'

import { useRouter } from 'next/navigation';
import { isValidInput } from '../utils/validate';
import { toSlug } from '@/utils/slug';

export default function SearchBar() {

    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);

        const gameName = formData.get('gameName') as string;
        const tagLine = formData.get('tagLine') as string;

        if (!isValidInput(gameName, tagLine)) return;

        router.push(`/user?gameName=${toSlug(gameName)}&tagLine=${toSlug(tagLine)}`);
    }

    return (
        <div>
            <div className="text-center mb-5 mt-10">
                <h1 className="font-semibold">LoL Stats Profile</h1>
                <p>For Americas Region only</p>
            </div>

            <div className="">

                <div className="text-center">
                    <form className="space-x-2" onSubmit={handleSubmit}>
                        <label>
                            <input
                                className="py-1 pl-2 pr-3 focus:ring ring-blue-400 ring-inset outline-none rounded-md text-black w-64"
                                name="gameName"
                                placeholder="Game Name"
                                maxLength={16}
                            />
                        </label>
                        <label>
                            <input
                                className="py-1 pl-2 focus:ring ring-blue-400 ring-inset outline-none rounded-md text-black w-24"
                                name="tagLine"
                                placeholder="NA1"
                                maxLength={5}
                            />
                        </label>
                        <button className="rounded-md bg-blue-400 px-4 py-1 font-semibold" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </div>
    )
}