'use client'

import '@styles/globals.css'
import Link from 'next/link'

export default function pages() {
  const callouts = [
    {
        name: 'Modern 3-Bedroom Apartment',
        description: 'Spacious 3-bedroom apartment with en-suite bathrooms, modern kitchen, swimming pool, gym, and 24/7 security.',
        imageSrc: 'https://a0.muscache.com/im/pictures/miso/Hosting-775974350829267148/original/ff9f23ea-8b43-4202-8700-d4e3fe1a55c1.jpeg?im_w=720',
        imageAlt: 'houseimg',
        href: '#',
        price: '$100/night'
    },
    {
        name: 'Luxurious 4-Bedroom Duplex in Lekki Phase 1',
        description: 'Luxurious 4-Bedroom Duplex in Lekki Phase 1.',
        imageSrc: 'https://a0.muscache.com/im/pictures/miso/Hosting-575200921008245701/original/1fd9dfb4-7a6a-4e20-9498-7511ff7dcef9.jpeg?im_w=720',
        imageAlt: 'houseimg',
        href: '#',
        price: '$200/night'
    },
    {
        name: 'Cozy 2-Bedroom Flat in Ikeja',
        description: 'Comfortable 2-bedroom flat with secure parking, close to shopping centers and major roads.',
        imageSrc: 'https://a0.muscache.com/im/pictures/miso/Hosting-938519661781471702/original/dcb49985-2985-4d88-a519-b12abc15fab0.jpeg?im_w=720',
        imageAlt: 'houseimg',
        href: '#',
        price: '$80/night'
    },
    {
        name: 'Elegant 5-Bedroom Mansion in Ikoyi',
        description: 'Luxurious 5-bedroom mansion with a swimming pool, gourmet kitchen, and top-notch security.',
        imageSrc: 'https://a0.muscache.com/im/pictures/miso/Hosting-926842653556293764/original/8aae16df-60f8-4cb6-be5c-14ee1c78d891.jpeg?im_w=720',
        imageAlt: 'houseimg',
        href: '#',
        price: '$300/night'
    },
    {
        name: 'Charming 2-Bedroom Bungalow in Yaba',
        description: 'Quaint 2-bedroom bungalow with a private garden, modern amenities, and close proximity to educational institutions.',
        imageSrc: 'https://a0.muscache.com/im/pictures/miso/Hosting-1044917187131818976/original/0677c109-af92-4e48-a78c-2b1d0d23760e.jpeg?im_w=720',
        imageAlt: 'houseimg',
        href: '#',
        price: '$70/night'
    },
    {
        name: 'Spacious 4-Bedroom Terrace in Magodo',
        description: 'Expansive 4-bedroom terrace with a private driveway, balcony, and access to community amenities like a pool and gym.',
        imageSrc: 'https://a0.muscache.com/im/pictures/abb0acbe-18b1-4191-a00c-8c7ffffefcd0.jpg?im_w=720',
        imageAlt: 'houseimg',
        href: '#',
        price: '$150/night'
    },
    {
        name: 'Luxury 5-Bedroom Villa in Banana Island',
        description: 'Exclusive 5-bedroom villa with a swimming pool, private cinema, state-of-the-art kitchen, and 24/7 security.',
        imageSrc: 'https://a0.muscache.com/im/pictures/miso/Hosting-51280634/original/8a3d8ad5-64ae-42fc-94d3-4d95dd8ead36.jpeg?im_w=720',
        imageAlt: 'houseimg',
        href: '#',
        price: '$400/night'
    },
    {
        name: 'Modern Studio Apartment in Maryland',
        description: 'Contemporary studio apartment with open-plan living, modern kitchen, and close to shopping centers and public transport.',
        imageSrc: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1076657355292122586/original/ab5e2959-40d9-4e71-8f97-409f3a47237f.jpeg?im_w=720',
        imageAlt: 'houseimg',
        href: '#',
        price: '$60/night'
    },
    {
        name: 'Cozy 1-Bedroom Flat in Ikeja',
        description: 'Comfortable 1-bedroom flat with modern furnishings, close to business districts.',
        imageSrc: 'https://a0.muscache.com/im/pictures/miso/Hosting-1203092421732339059/original/ee5dac54-ce65-4b24-aff5-dc62065b50f1.jpeg?im_w=720',
        imageAlt: 'houseimg',
        href: '#',
        price: '$50/night'
    },
    {
        name: 'Elegant 3-Bedroom Duplex in Lekki',
        description: 'Stylish 3-bedroom duplex with spacious living areas, private garden, and secure parking.',
        imageSrc: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1194157538414847301/original/25295f7a-7c5f-4d59-9fc2-86118e75d62f.jpeg?im_w=720',
        imageAlt: 'houseimg',
        href: '#',
        price: '$120/night'
    },
    {
        name: 'Luxury 2-Bedroom Condo in Victoria Island',
        description: 'Modern 2-bedroom condo with sea views, a gym, and 24-hour concierge service.',
        imageSrc: 'https://a0.muscache.com/im/pictures/miso/Hosting-1136975734165598698/original/5c0e6ced-fe3e-46b9-a685-eac2186744c8.jpeg?im_w=720',
        imageAlt: 'houseimg',
        href: '#',
        price: '$180/night'
    },
    {
        name: 'Chic Studio Loft in Surulere',
        description: 'Trendy studio loft with high ceilings, contemporary design, and close to public transport and entertainment spots.',
        imageSrc: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1198975923587361405/original/d282f98b-1987-45ac-9dfb-28552eca1638.jpeg?im_w=720',
        imageAlt: 'houseimg',
        href: '#',
        price: '$70/night'
    },
    {
        name: 'Spacious 4-Bedroom Bungalow in Ogudu',
        description: 'Large 4-bedroom bungalow with a spacious garden, perfect for families.',
        imageSrc: 'https://a0.muscache.com/im/pictures/miso/Hosting-842511498702667444/original/9e40126e-9b9f-4611-99e1-269121b06b97.jpeg?im_w=720',
        imageAlt: 'houseimg',
        href: '#',
        price: '$130/night'
    },
    {
        name: 'Modern 1-Bedroom Apartment in Gbagada',
        description: 'Contemporary 3-bedroom apartment with a fully equipped kitchen and balcony.',
        imageSrc: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1187671735741578587/original/c6e14458-b5a4-423d-bb67-d145a3ada84a.jpeg?im_w=720',
        imageAlt: 'houseimg',
        href: '#',
        price: '$90/night'
    },
    {
        name: 'Charming 2-Bedroom Cottage in Ikeja',
        description: 'Cozy 2-bedroom cottage with rustic charm, located in a quiet neighborhood.',
        imageSrc: 'https://a0.muscache.com/im/pictures/miso/Hosting-870406441088268016/original/441e584d-e42a-42b0-a8ad-c0a3d17ba215.jpeg?im_w=720',
        imageAlt: 'houseimg',
        href: '#',
        price: '$75/night'
    },
    {
        name: 'Luxury 5-Bedroom Mansion in Ikoyi',
        description: 'Elegant 5-bedroom mansion with a swimming pool, home theater, and private gym.',
        imageSrc: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1028755532851969944/original/48c275bc-9662-4d3b-8344-e5896de822e0.jpeg?im_w=720',
        imageAlt: 'houseimg',
        href: '#',
        price: '$350/night'
    }
];


    
  return (
    <div>
      <div className="mx-auto max-w-7xl px-4 py-10  sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:py-10  lg:max-w-none lg:py-10">
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
                <p className="text-base ml-1 mt-6 font-semibold text-black">{callout.name}</p>
                <h2 className="text-base ml-1 font-semibold  text-black">
                  {callout.price}
                </h2>
                <h3 className="text-base ml-1 truncate text-gray-900">
                  <Link href='/homes/id'>
                    <span className="absolute inset-0" />
                    {callout.description}
                  </Link>
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div >


  )
}
