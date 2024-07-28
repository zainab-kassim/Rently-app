import React from 'react'
import '@styles/globals.css'
import Link from 'next/link'
import { Bars3Icon, CursorArrowRaysIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

const Homepagebody = () => {
    const features = [
        {
            name: 'Easy Search and Filter',
            description:
                'Rently offers an intuitive search and filter system, allowing users to quickly find homes that match their criteria. With options to filter by location, price, size, and amenities, finding the perfect rental is a breeze.',
            icon: CursorArrowRaysIcon,
        },
        {
            name: 'Detailed Listings',
            description:
                'Our platform provides comprehensive property listings with high-quality images, detailed descriptions, and essential information about the neighborhood. Users can make informed decisions with all the necessary details at their fingertips.',
            icon: Bars3Icon,
        },
        {
            name: 'Secure Transactions',
            description:
                'Rently ensures secure transactions between renters and landlords. We use advanced encryption and secure payment gateways to protect your personal and financial information, giving you peace of mind during the rental process.',
            icon: LockClosedIcon,
        },
        {
            name: 'Mobile App Accessibility',
            description:
                'Rently offers a mobile app, allowing you to search for rentals, communicate with landlords, and manage your rental agreements on the go. Stay connected and updated, no matter where you are.', icon: FingerPrintIcon,
        },
    ]



    const callouts = [
        {
            name: ' Modern 3-Bedroom Apartment',
            description: 'Spacious 3-bedroom apartment with en-suite bathrooms, modern kitchen, swimming pool, gym, and 24/7 security.',
            imageSrc: 'https://a0.muscache.com/im/pictures/miso/Hosting-775974350829267148/original/ff9f23ea-8b43-4202-8700-d4e3fe1a55c1.jpeg?im_w=720',
            imageAlt: 'houseimg',
            href: '#',
        },
        {
            name: 'Luxurious 4-Bedroom Duplex in Lekki Phase 1',
            description: 'Luxurious 4-Bedroom Duplex in Lekki Phase 1',
            imageSrc: 'https://a0.muscache.com/im/pictures/miso/Hosting-575200921008245701/original/1fd9dfb4-7a6a-4e20-9498-7511ff7dcef9.jpeg?im_w=720',
            imageAlt: 'houseimg',
            href: '#',
        },
        {
            name: 'Cozy 2-Bedroom Flat in Ikeja',
            description: ' Comfortable 2-bedroom flat with secure parking, close to shopping centers and major roads.',
            imageSrc: 'https://a0.muscache.com/im/pictures/miso/Hosting-938519661781471702/original/dcb49985-2985-4d88-a519-b12abc15fab0.jpeg?im_w=720',
            imageAlt: 'houseimg',
            href: '#',
        },
        {
            name: 'Elegant 5-Bedroom Mansion in Ikoyi',
            description: ' Luxurious 5-bedroom mansion with a swimming pool, home theater, gourmet kitchen, and top-notch security.',
            imageSrc: 'https://a0.muscache.com/im/pictures/miso/Hosting-926842653556293764/original/8aae16df-60f8-4cb6-be5c-14ee1c78d891.jpeg?im_w=720',
            imageAlt: 'houseimg',
            href: '#',
        },
        {
            name: 'Charming 2-Bedroom Bungalow in Yaba',
            description: 'Quaint 2-bedroom bungalow with a private garden, modern amenities, and close proximity to educational institutions.',
            imageSrc: 'https://a0.muscache.com/im/pictures/miso/Hosting-1044917187131818976/original/0677c109-af92-4e48-a78c-2b1d0d23760e.jpeg?im_w=720',
            imageAlt: 'houseimg',
            href: '#',
        },
        {
            name: ' Spacious 4-Bedroom Terrace in Magodo',
            description: 'Expansive 4-bedroom terrace with a private driveway, balcony, and access to community amenities like a pool and gym.',
            imageSrc: 'https://a0.muscache.com/im/pictures/abb0acbe-18b1-4191-a00c-8c7ffffefcd0.jpg?im_w=720',
            imageAlt: 'houseimg',
            href: '#',
        },
        {
            name: 'Luxury 5-Bedroom Villa in Banana Island',
            description: '  Exclusive 5-bedroom villa with a swimming pool, private cinema, state-of-the-art kitchen, and 24/7 security.',
            imageSrc: 'https://a0.muscache.com/im/pictures/miso/Hosting-51280634/original/8a3d8ad5-64ae-42fc-94d3-4d95dd8ead36.jpeg?im_w=720',
            imageAlt: 'houseimg',
            href: '#',
        },
        {
            name: 'Modern Studio Apartment in Maryland',
            description: ' Contemporary studio apartment with open-plan living, modern kitchen, and close to shopping centers and public transport.',
            imageSrc: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1076657355292122586/original/ab5e2959-40d9-4e71-8f97-409f3a47237f.jpeg?im_w=720',
            imageAlt: 'houseimg',
            href: '#',
        },
        {
            name: 'Cozy 1-Bedroom Flat in Ikeja',
            description: 'Comfortable 1-bedroom flat with modern furnishings, close to business districts and entertainment spots.',
            imageSrc: 'https://a0.muscache.com/im/pictures/miso/Hosting-1203092421732339059/original/ee5dac54-ce65-4b24-aff5-dc62065b50f1.jpeg?im_w=720',
            imageAlt: 'houseimg',
            href: '#',
        },
        {
            name: 'Elegant 3-Bedroom Duplex in Lekki',
            description: 'Stylish 3-bedroom duplex with spacious living areas, private garden, and secure parking.',
            imageSrc: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1194157538414847301/original/25295f7a-7c5f-4d59-9fc2-86118e75d62f.jpeg?im_w=720',
            imageAlt: 'houseimg',
            href: '#',
        },
        {
            name: 'Luxury 2-Bedroom Condo in Victoria Island',
            description: 'Modern 2-bedroom condo with sea views, a gym, and 24-hour concierge service.',
            imageSrc: 'https://a0.muscache.com/im/pictures/miso/Hosting-1136975734165598698/original/5c0e6ced-fe3e-46b9-a685-eac2186744c8.jpeg?im_w=720',
            imageAlt: 'houseimg',
            href: '#',
        },
        {
            name: 'Chic Studio Loft in Surulere',
            description: 'Trendy studio loft with high ceilings, contemporary design, and close to public transport.',
            imageSrc: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1198975923587361405/original/d282f98b-1987-45ac-9dfb-28552eca1638.jpeg?im_w=720',
            imageAlt: 'houseimg',
            href: '#',
        },

        {
            name: 'Spacious 4-Bedroom Bungalow in Ogudu',
            description: 'Large 4-bedroom bungalow with a spacious garden, perfect for families.',
            imageSrc: 'https://a0.muscache.com/im/pictures/miso/Hosting-842511498702667444/original/9e40126e-9b9f-4611-99e1-269121b06b97.jpeg?im_w=720',
            imageAlt: 'houseimg',
            href: '#',
        },
        {
            name: 'Modern 1-Bedroom Apartment in Gbagada',
            description: 'Contemporary 3-bedroom apartment with a fully equipped kitchen and balcony.',
            imageSrc: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1187671735741578587/original/c6e14458-b5a4-423d-bb67-d145a3ada84a.jpeg?im_w=720',
            imageAlt: 'houseimg',
            href: '#',
        },
        {
            name: 'Charming 2-Bedroom Cottage in Ikeja',
            description: 'Cozy 2-bedroom cottage with rustic charm, located in a quiet neighborhood.',
            imageSrc: 'https://a0.muscache.com/im/pictures/miso/Hosting-870406441088268016/original/441e584d-e42a-42b0-a8ad-c0a3d17ba215.jpeg?im_w=720',
            imageAlt: 'houseimg',
            href: '#',
        },
        {
            name: 'Luxury 5-Bedroom Mansion in Ikoyi',
            description: 'Elegant 5-bedroom mansion with a swimming pool, home theater, and private gym.',
            imageSrc: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1028755532851969944/original/48c275bc-9662-4d3b-8344-e5896de822e0.jpeg?im_w=720',
            imageAlt: 'houseimg',
            href: '#',
        }



    ]

    const header = {
        images: [
            {
                src: 'https://media.istockphoto.com/id/1392442642/photo/happy-family-smiling-in-the-backyard-of-their-house.jpg?s=612x612&w=0&k=20&c=fNQOVcd_xDbnoQIqxww8oH-yts1wc0PcX3Ga0YbbY3k=',
                alt: 'img',
            },
            {
                src: 'https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZXxlbnwwfHwwfHx8MA%3D%3D',
                alt: 'img',
            },
            {
                src: 'https://media.istockphoto.com/id/2116692454/photo/happiness-is-within-my-family.jpg?s=612x612&w=0&k=20&c=W5zAf9diGfLzlkg7P09FUAqkMxsARAShLvPT6EBF6V0=',
                alt: 'img',
            },
            {
                src: 'https://images.unsplash.com/photo-1501127122-f385ca6ddd9d?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                alt: 'img',
            },
            {
                src: 'https://images.unsplash.com/photo-1517467139951-f5a925c9f9de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGhvbWV8ZW58MHx8MHx8fDA%3D',
                alt: 'img',
            },
            {
                src: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGhvbWV8ZW58MHx8MHx8fDA%3D',
                alt: 'img',
            },
            {
                src: 'https://plus.unsplash.com/premium_photo-1681224438035-e8e0ec5e6021?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGhvbWV8ZW58MHx8MHx8fDA%3D',
                alt: 'img',
            }
        ]
    }

    return (
        <>

            <div className="relative pt-20 grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1  -b-20  px-6 py-10 lg:px-8 bg-zinc-300">
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 -top-30 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                >

                </div>
                <div className="px-10 max-w-2xl sm:py-30 pt-20">

                    <div >
                        <h1 className="text-3xl justify-start font-bold tracking-tight text-gray-900  sm:text-6xl">
                            Rently: Host or rent.
                            Find your perfect home in no time.
                        </h1>
                        <p className="mt-10 text-lg justify-start leading-8  text-gray-900 ">
                            Host or rent with confidence. Rently provides a seamless experience for property owners and seekers alike.
                        </p>

                    </div>

                    <div
                        aria-hidden="true"
                        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                    >
                        <div
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                        />
                    </div>
                    <div className="mt-10  items-center pb-10 justify-center text center gap-x-6">
                        <Link
                            href="/homes"
                            className="rounded-md  px-3.5 py-2.5 text-sm font-semibold text-white bg-black"
                        >
                            Explore more
                        </Link>

                    </div>
                </div>

                <div className=" mx-auto mt-10 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">

                    <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                        <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                            <img
                                alt={header.images[0].alt}
                                src={header.images[0].src}
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                        <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                            <img
                                alt={header.images[1].alt}
                                src={header.images[1].src}
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                        <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                            <img
                                alt={header.images[2].alt}
                                src={header.images[2].src}
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                    </div>
                    <div className="aspect-h-5 aspect-w-6 sm:px-5 lg:grid-cols-1 md:grid-cols-1 lg:block">
                        <img
                            alt={header.images[3].alt}
                            src={header.images[3].src}
                            className=" h-full w-full  object-cover object-center"
                        />
                    </div>

                    <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                        <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                            <img
                                alt={header.images[4].alt}
                                src={header.images[4].src}
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                        <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                            <img
                                alt={header.images[5].alt}
                                src={header.images[5].src}
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                        <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                            <img
                                alt={header.images[6].alt}
                                src={header.images[6].src}
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                    </div>
                </div>

            </div>


            {/* // about Rently */}
            < div className="bg-white pt-10" >
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <p className="mt-2 text-3xl font-bold tracking-tight mb-4 text-gray-900 sm:text-4xl">
                            Everything you need to know about Rently
                        </p>
                    </div>
                    <div className="mx-auto  max-w-2xl sm:mt-20  lg:mt-24 lg:max-w-4xl">
                        <dl className="grid max-w-xl grid-cols-1 gap-x-8  lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                            {features.map((feature) => (
                                <div key={feature.name} className="relative pl-16">
                                    <dt className="text-base font-semibold leading-7 text-gray-900">
                                        <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg icon">
                                            <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                                        </div>
                                        {feature.name}
                                    </dt>
                                    <dd className="mb-2  text-base leading-7 text-gray-900">{feature.description}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div >

            {/* //grid of homes */}
            < div className="bg-white" >
                <div className="mx-auto max-w-7xl px-4 py-5  sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl sm:py-10  lg:max-w-none lg:py-10">
                        <h2 className="text-3xl text-center font-medium  text-gray-900">Great rentals in Lagos</h2>
                        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 mt-6">
                            {callouts.map((callout) => (
                                <div key={callout.name} className="group relative">
                                    <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                                        <img
                                            alt={callout.imageAlt}
                                            src={callout.imageSrc}
                                            className="h-full w-full object-cover object-center"
                                        />
                                    </div>
                                    <p className="text-base ml-1 mt-6 truncate font-semibold text-gray-900">{callout.name}</p>
                                    <h3 className="text-base ml-1 truncate text-gray-600">
                                        <a href={callout.href}>
                                            <span className="absolute inset-0" />
                                            {callout.description}
                                        </a>
                                    </h3>
                                </div>
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
            </div >





        </>
    )
}

export default Homepagebody
