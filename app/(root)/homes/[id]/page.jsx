
import { GetHomeById } from "@lib/actions/home.action";
import Link from "next/link";
import { DeleteConfirmation } from "@components/shared/delete";
import { auth } from '@clerk/nextjs/server'; 





export default async function page({ params: { id } }) {
  //get user id
  const { userId } = auth();

  //get home id
  const home = await GetHomeById(id)




  return (
    <div className="bg-white my-20   min-h-screen">


      <div className="mx-auto max-w-2xl grid grid-cols-1 items-start gap-x-8 gap-y-16 px-4  sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">

        <div className="order-1 lg:order-1">

          <h2 className="text-3xl font-bold   tracking-tight text-gray-900 sm:text-4xl">{home.title}</h2>
          <p className="mt-4 text-gray-700">{home.description}</p>
          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Location</dt>
              <dd className="mt-2 text-sm text-gray-500">{home.location}</dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Price</dt>
              <dd className="mt-2 text-base text-gray-500">₦{home.price}/night</dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Owner</dt>
              <dd className="mt-2 text-sm text-gray-500">{home.owner.username}</dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Phone number</dt>
              <dd className="mt-2 text-sm text-gray-500">{home.phonenumber}</dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Email</dt>
              <dd className="mt-2 text-sm text-gray-500">{home.owner.email}</dd>
            </div>
          </dl>

          <Link href="/pay">
            <div className="pt-20 justify-center">
              <button type="button" className="inline-flex items-center rounded-md bg-black py-2 px-10 text-base font-medium text-white ring-1 ring-zinc-700">
                Rent Home
              </button>
            </div>
          </Link>

          <section>
            {userId === home.owner.clerkId && (
              <div className="pt-5">
                <Link href={`/homes/${home._id}/update`}>
                  <button className="inline-flex items-center rounded-md bg-black py-2 px-10 text-base font-medium text-white ring-1 ring-zinc-700">Edit</button>
                </Link>
                <p className="inline-flex pl-2">
                  <DeleteConfirmation HomeId={home._id} />
                </p>
              </div>
            )}
          </section>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8 order-2 lg:order-2">
          <img
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            src={home.img[0].url}
            className="rounded-lg w-72 h-60 bg-gray-100"
          />
          <img
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            src={home.img[1].url}
            className="rounded-lg  w-72 h-60 bg-gray-100"
          />
          <img
            alt="Side of walnut card tray with card groove and recessed card area."
            src={home.img[2].url}
            className="rounded-lg  w-72 h-60 bg-gray-100"
          />
          <img
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            src={home.img[3].url}
            className="rounded-lg  w-72 h-60 bg-gray-100"
          />
        </div>


      </div>


    </div>


  )
}
