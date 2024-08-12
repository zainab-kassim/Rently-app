'use client'


import { GetAllHomes } from '@lib/actions/home.action';
import '@styles/globals.css'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Loader from '@components/ui/loader';


export default function Page() {
  const [homes, setHomes] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state


  useEffect(() => {
    async function handleHomes() {
      try {
        const allHomes = await GetAllHomes();
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
    return <Loader />; // Show loader while data is being fetched
  }


  return (
    <div className="flex flex-col min-h-screen">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:py-10 sm:mt-5 lg:max-w-none lg:py-10">
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
        </div>
      </div>
    </div>
  );
}

