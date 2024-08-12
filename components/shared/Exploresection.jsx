

const callouts = [
  {

    name: 'Find the home you need',
    imageSrc: 'https://fibre.ng/e311e36811aa37a843fa933d42d1a110.png',
    imageAlt: 'img',
    text: 'Our platform offers an intuitive search tool that helps you navigate through a wide range of properties to find the perfect match for your needs.'
  },
  {
    name: 'Mobile App Accessibility',
    imageSrc: 'https://fibre.ng/90c0408bcd6b448216ef77b507f9de05.png',
    imageAlt: 'img',
    text: 'Rently offers a mobile app, allowing you to search for rentals, communicate with landlords, and manage your rental agreements on the go.'
  },
  {
    name: 'Detailed Listings',
    imageSrc: 'https://fibre.ng/7577218c9791e283635764e2d5ff4914.png',
    imageAlt: 'img',
    text: 'Our platform provides comprehensive property listings with high-quality images, detailed descriptions, and essential information about the neighborhood.'
  }
]


export default function Exploresection() {
  return (
    <div className="bg-white py-4 sm:py-4">
      <div className="mx-auto  px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-4 text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to know about Rently
          </p>
        </div>
      </div>

      <div className="mx-auto w-4/5 px-4 py-10 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 gap-x-14 gap-y-5 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-14">
          {callouts.map((callout) => (
            <section className="flex flex-col items-center justify-center text-center">
              <img
                alt={callout.imageAlt}
                src={callout.imageSrc}
                className="w-60 h-60 object-fit object-center group-hover:opacity-75"
              />
              <p className="mt-4 text-2xl font-extrabold font-serif text-gray-900">{callout.name}</p>
              <h3 className="mt-1 text-sm text-gray-700">{callout.text}</h3>
            </section>
          ))}
        </div>
      </div>

    </div>
  )
}


