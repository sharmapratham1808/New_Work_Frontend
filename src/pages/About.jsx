import React from 'react'

const About = () => {
  return (
    <section className="container mx-auto p-4">
    <h1 className="text-5xl font-bold mt-24 mb-20 text-center text-lime-600">Gallery</h1>
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
      <div className="w-full overflow-hidden rounded-lg">
        <img src="/gallery/one.jpg" alt="Gallery Image 1" className="w-full h-auto" />
      </div>
      <div className="w-full overflow-hidden rounded-lg">
        <img src="/gallery/5.jpg" alt="Gallery Image 2" className="w-full h-auto" />
      </div>
      <div className="w-full overflow-hidden rounded-lg">
        <img src="/gallery/7.jpg" alt="Gallery Image 3" className="w-full h-auto" />
      </div>
      <div className="w-full overflow-hidden rounded-lg">
        <img src="/gallery/9.jpg" alt="Gallery Image 4" className="w-full h-[280px]" />
      </div>
      <div className="w-full overflow-hidden rounded-lg">
        <img src="/gallery/13.jpg" alt="Gallery Image 5" className="w-full h-auto" />
      </div>
      <div className="w-full overflow-hidden rounded-lg">
        <img src="/gallery/18.jpg" alt="Gallery Image 6" className="w-full h-auto" />
      </div>
    </div>
  </section>
  )
}

export default About