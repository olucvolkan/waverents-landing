import React from "react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
const adventures = [
  {
    title: "Supboards",
    description: "From mid-size to mega yachts, these luxury boats are great for groups and celebrations",
    image: "/image/canoe.avif"
  },
  {
    title: "Sailboats",
    description: "Set sail with these traditional wind-powered boats",
    image: "/image/canoe.avif"
  },
  {
    title: "Tours",
    description: "Explore local waters with a boat rental dedicated to sightseeing and exploration",
    image: "/image/canoe.avif"
  },
];

export default function AdventureCarousel() {
  return (
    <section className="py-20 px-8 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">
          Adventures of All Kinds
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {adventures.map((item) => (
            <div 
              key={item.title} 
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow"
            >
              <Image
                src={item.image}
                width={256}
                height={256}
                alt={item.title}
                className="w-full h-40 object-contain mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}