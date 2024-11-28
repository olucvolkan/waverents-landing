"use client";

import React from "react";
import Image from "next/image";
import { Typography } from "@material-tailwind/react";

export default function About() {
  return (
    <section className="py-20 px-8" id="about-us">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          <div className="col-span-1">
            <Typography  variant="h2" color="blue-gray" className="mb-4" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              Connecting Water Sports Enthusiasts
            </Typography>
            <Typography variant="lead" className="mb-5 text-gray-600"placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              At WaveRent, we are passionate about making water sports accessible to everyone. 
              Our platform connects equipment owners with adventure seekers, creating a 
              community that shares the love for water activities.
            </Typography>
            <div className="mt-8">
              <div className="mb-8">
                <Typography variant="h6" color="blue-gray" className="mb-2"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                  Our Mission
                </Typography>
                <Typography className="text-gray-600"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                  To create a trusted marketplace where water sports equipment owners can 
                  safely rent their gear to enthusiasts, making water sports more accessible 
                  while helping owners earn from their equipment.
                </Typography>
              </div>
              <div>
                <Typography variant="h6" color="blue-gray" className="mb-2"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                  Why Choose WaveRent
                </Typography>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Secure and verified rental process</li>
                  <li>Insurance coverage for equipment</li>
                  <li>Growing community of water sports enthusiasts</li>
                  <li>Easy-to-use platform for both owners and renters</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-1 flex justify-center items-center">
            <div className="relative w-[300px] h-[600px]">
              <Image
                src="/image/iphone.png"
                alt="iPhone frame"
                fill
                className="object-contain"
              />
              <div className="absolute top-[12%] left-[8%] right-[8%] bottom-[12%] overflow-hidden rounded-[35px]">
                <Image
                  src="/image/app-screen.png"
                  alt="WaveRent App Interface"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

