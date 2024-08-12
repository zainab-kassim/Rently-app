import Link from 'next/link'
import Exploresection from './Exploresection'
import Section from './section'
import Homegrid from './homegrid'


const Homepagebody = () => {
    return (
        <>

            <div className="bg-gray-100">
                <div className="mx-auto max-w-7xl py-16 sm:px-6 sm:py-32 lg:px-8">
                    <div className="relative overflow-hidden bg-gray-100 px-6 pt-16 sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                        <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                            <h2 className="text-6xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Rently: Host or rent.
                                <br />
                                Find your perfect home in no time.
                            </h2>
                            <p className="mt-6 text-lg leading-8 text-gray-700">
                            Host or rent with confidence. Rently provides a seamless experience for property owners and seekers alike.
                            </p>
                            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                                <Link
                                    href="/homes"
                                    className="rounded-md bg-gray-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                                >
                                    Get started
                                </Link>
                            </div>
                        </div>
                        <div className="relative mt-16 h-80 lg:mt-8">
                            <img
                                alt="App screenshot"
                                src="https://images.unsplash.com/photo-1501127122-f385ca6ddd9d?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                width={1824}
                                height={1100}
                                className="absolute left-0 top-0 w-[40rem] max-w-none rounded-md bg-gray-100 ring-1 ring-gray-200"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Exploresection/>
            <Section/>
            <Homegrid/>
            
        </>
    )
}

export default Homepagebody
