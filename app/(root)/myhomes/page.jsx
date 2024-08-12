import { auth, User } from '@clerk/nextjs/server';
import '@/styles/globals.css';
import { SignedIn, UserButton } from '@clerk/nextjs';
import { GetOwnersHomes } from '@lib/actions/home.action';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { getUserById } from '@lib/actions/user.action';


export default async function Page() {
  // Retrieve the current user's ID from Clerk authentication
  const { userId } = auth();

  // Redirect to the sign-in page if the user ID is not found (i.e., user is not authenticated)
  if (!userId) redirect('/sign-in');


  const user = await getUserById( userId );

  let ownersHomes = null;
  try {
    ownersHomes = await GetOwnersHomes({ userId });
  } catch (error) {
    console.error("Failed to fetch owner's homes:", error);
    // Handle error or redirect appropriately
  }

  return (
    <>
      <SignedIn>
        <div className="bg-white py-24 sm:py-32 flex flex-col min-h-screen">
          <div className="mx-auto grid max-w-7xl gap-x-2 gap-y-10 px-6 lg:px-24 xl:grid-cols-2">
            <div className="max-w-2xl">
              {ownersHomes && user.username ? (
                <>
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    <UserButton className="w-40 h-12 text-xl" /> {user.username}
                  </h2>
                  <p className="mt-2 text-lg leading-8 text-gray-600">
                    {user.email}
                    <br/>
                    Owner of:
                  </p>
                </>
              ) : (
                <p className="text-lg leading-8 text-gray-600 min-h-screen">
                  No owner information available.
                </p>
              )}
            </div>
            {ownersHomes && ownersHomes.length > 0 ? (
              <ul role="list" className="grid gap-x-10  gap-y-12 xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 sm:gap-y-16 xl:col-span-2">
                {ownersHomes.map((home) => (
                  <li key={home._id}>
                    <Link href={`/homes/${home._id}`}>
                      <div className="flex items-center  gap-y-2 gap-x-6  ">
                        <img alt="" src={home.img[0].url} className="w-1/2 h-48 rounded-md object-cover" />
                        <span className="">
                          <h3 className="text-base font-semibold leading-7 tracking-tighter text-gray-900">{home.title}</h3>
                          <p className="text-sm font-medium leading-6 text-stone-700">₦{home.price}</p>
                        </span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-lg leading-8 text-gray-600">
                No homes available.
              </p>
            )}
          </div>
        </div>

      </SignedIn>
    </>
  );
}
