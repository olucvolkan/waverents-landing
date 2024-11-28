"use client";

import React from "react";
import Image from "next/image";
import InfoCard from "@/components/info-card";
import { Typography, Card, CardBody } from "@material-tailwind/react";

const OPTIONS = [
  {
    title: "24/7",
    description: "Booking Access",
  },
  {
    title: "100%",
    description: "Secure Payments",
  },
  {
    title: "Real-time",
    description: "Rental Tracking",
  },
  {
    title: "4.9/5",
    description: "User Rating",
  },
];

export function MobileConvenience() {
  return (
    <section className="py-20 px-8 bg-[#25BCE1]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
        <Image
          width={256}
          height={256}
          src="/image/iphone.png"
          className="col-span-1 w-1/2 mx-auto lg:w-10/12"
          alt="waverents-mobile-app"
        />
        <div className="col-span-1 mx-auto max-w-lg px-4 lg:px-0">
          <Typography variant="h2" color="white" className="mb-4">
            Manage Your Rentals Anywhere
          </Typography>
          <Typography
            variant="lead"
            className="mb-5 px-4 text-left text-xl !text-white/90 lg:px-0"
          >
            Run your rental business from anywhere. Accept bookings, track equipment, 
            and manage payments right from your phone. Stay connected with renters 
            and keep your business running smoothly, even when you are on the go.
          </Typography>

          <div className="col-span-2 grid gap-5 grid-cols-2 ">
            {OPTIONS.map(({ title, description }) => (
              <InfoCard key={title} title={title}>
                {description}
              </InfoCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default MobileConvenience;
