import Link from "next/link"

export default function Section() {
    return (
        <div className="mx-auto bg-gray-100 w-full py-20 px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
                <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                    Own a Property?
                </p>
                <p className="my-6 text-lg leading-8 text-gray-600">
                    Rent your home in a fast, efficient, and easy way—just a click away from your phone. Simplify the rental process and get your property rented out in no time.
                </p>
                <Link
                    href="/homes/host"
                    className="rounded-md bg-gray-900 px-3.5 py-2.5  text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                >
                    List Your Home Now
                </Link>
            </div>
        </div>
    )
}
