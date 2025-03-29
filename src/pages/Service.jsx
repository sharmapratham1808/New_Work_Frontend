import React from "react";
import { useAuth } from "../store/auth";

const Service = () => {
  const { services } = useAuth();

  return (
    <section>
      <div className="flex flex-col min-h-screen items-center justify-center bg-lime-50">
        <div className="flex mb-24 pt-16 md:pt-0 font-bold text-lime-600 text-5xl">
          <h1>Initiatives</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {services ? (
            services.map((curElem, index) => {
              const { description, service, image } = curElem;
              return (
                <div
                  key={index}
                  className="group relative items-center justify-center overflow-hidden cursor-pointer rounded-md"
                >
                  <div className="h-80 sm:h-80 md:h-96 w-full sm:w-64 md:w-72">
                    <img
                      src={`/initiatives/${image}`}
                      className="h-full w-full object-cover duration-500 group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all duration-500">
                    <h1 className="text-3xl font-bold text-white">{service}</h1>
                    <p className="text-base italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {description}
                    </p>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="text-red-500">No services available</p>
          )}
        </div>

        {/* Faculty Coordinator Section */}
        <div className="w-full max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-lime-600 mb-4">
              Our Faculty Co-ordinator
            </h1>
            <div className="w-20 h-1 bg-lime-500 mx-auto rounded-full"></div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 h-[500px] md:h-auto relative">
                <img
                  src="/initiatives/rohit.jpg"
                  alt="Dr. Rohit Sharma"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              <div className="md:w-2/3 p-6 md:p-8 lg:p-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                  Dr. Rohit Sharma
                </h2>
                <h3 className="text-lg text-lime-600 font-semibold mb-6">
                  Assistant Professor, Computer Science & Engineering
                </h3>
                <p className="text-gray-600 leading-relaxed text-justify">
                  We are honored to introduce Dr. Rohit Sharma, a distinguished faculty member 
                  at DR.AITH Kanpur, where he serves as the Assistant Professor in the Computer 
                  Science & Engineering Department. Dr. Rohit Sharma's expertise in Computer 
                  Organization and Software Reliability, combined with his unwavering dedication, 
                  makes him a vital pillar of our academic community.
                </p>
                <p className="text-gray-600 leading-relaxed mt-4 text-justify">
                  His rich academic background and commitment to excellence have been instrumental 
                  in shaping the educational journey of our B.Tech students. Dr. Sharma's visionary 
                  approach to teaching and mentorship has significantly contributed to the professional 
                  growth of his students. His dedication to nurturing young minds and equipping them 
                  with the essential skills for success sets him apart as an exceptional mentor and guide.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Service;
