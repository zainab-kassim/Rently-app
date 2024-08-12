'use client'


import { GetAllHomes } from '@lib/actions/home.action';
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Loader from '@components/ui/loader';


export default function Homegrid() {
    const [homes, setHomes] = useState([]);
    const [loading, setLoading] = useState(true); // Add loading state


    useEffect(() => {
        async function handleHomes() {
            try {
                const allHomes = await GetAllHomes();
                allHomes.splice(0, 5);
                setHomes(allHomes);
            } catch (error) {
                console.error('Error fetching homes:', error);
            } finally {
                setLoading(false); // Set loading to false when data is fetched or an error occurs
            }
        }
        handleHomes();
    }, []);


    if (loading) {
        return <Loader /> // Show loader while data is being fetched
    }

    return (
        <>
             
            <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl sm:py-10 sm:mt-5 lg:max-w-none lg:py-10">
                <p className="mb-9 text-3xl font-bold text-center tracking-tight text-gray-900 sm:text-4xl">
                    Our Popular Homes
                </p>
                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 mt-6">
                        {homes.map((home) => (
                            <Link key={home._id} href={`/homes/${home._id}`}>
                                <div key={home.title} className="group relative">
                                    <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                                        <img
                                            alt='homeimg'
                                            src={home.img[0].url}
                                            className="h-full w-full object-cover object-center"
                                        />
                                    </div>
                                    <h4 className="ml-1 mt-2 font-medium text-black">
                                        {home.location}
                                    </h4>


                                    <h4 className="ml-1 font-normal text-neutral-500">
                                        Stay with {home.owner.username}
                                    </h4>


                                    <h4 className="ml-1 font-normal text-neutral-500">
                                        Nov 13-20
                                    </h4>

                                    <h4 className="text-base ml-1 font-normal text-black">
                                        ₦{home.price}/night
                                    </h4>

                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className="flex mt-6">
                            <Link href='/homes'>
                            <button type="button" className="inline-flex items-center rounded-lg bg-white py-2 px-2 text-base text-black ring-1 ring-zinc-700">
                                Show all
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 ml-2">
                                    <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                                </svg>
                            </button>
                            </Link>
                        </div>
                </div>
            </div>
        </>



    );
}