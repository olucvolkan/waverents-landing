"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";

import {
  BuildingStorefrontIcon as StoreIcon,
  ArrowUpTrayIcon as UploadIcon,
  ClipboardDocumentListIcon as ClipboardListIcon,
  BanknotesIcon,
} from "@heroicons/react/24/solid";

import FeatureCard from "../components/feature-card";

const FEATURES = [
  {
    icon: StoreIcon,
    title: "Create Your Store",
    children:
      "Set up your rental business in minutes. Create a personalized store that showcases your adventure equipment and gear.",
  },
  {
    icon: UploadIcon,
    title: "Upload Products",
    children:
      "Easily upload and manage your rental products. Add detailed descriptions, high-quality photos, and set competitive pricing.",
  },
  {
    icon: ClipboardListIcon,
    title: "Manage Rentals",
    children:
      "Keep track of all your rentals in one place. Handle bookings, monitor equipment status, and manage customer communications effortlessly.",
  },
  {
    icon: BanknotesIcon,
    title: "Track Earnings",
    children:
      "Monitor your business performance with detailed analytics. Track revenue, view rental statistics, and optimize your pricing strategy.",
  },
];

export function Features() {
  return (
    <section className="py-28 px-4">
      <div className="container mx-auto mb-20 text-center">
        <Typography color="blue" className="mb-2 font-bold uppercase" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          Start Your Rental Business
        </Typography>
        <Typography variant="h1" color="blue-gray" className="mb-4"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          Everything You Need to Succeed
        </Typography>
        <Typography variant="lead" color="blue-gray" className="lg:px-28"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          Launch and grow your rental business with our comprehensive platform. We provide all the tools you need to manage your equipment rentals efficiently.
        </Typography>
      </div>
      <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-4 gap-y-12 md:grid-cols-2">
        {FEATURES.map((props, idx) => (
          <FeatureCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
export default Features;
