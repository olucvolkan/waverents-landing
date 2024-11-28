"use client";

import React from "react";
import { Typography, Card } from "@material-tailwind/react";

const FAQS = [
  {
    title: "How do I start renting out my equipment?",
    desc: "Getting started is simple! Create your store, upload photos and details of your water sports equipment, set your rental rates and availability, and start accepting bookings. We'll guide you through each step of the process.",
  },
  {
    title: "How does payment work?",
    desc: "We handle all payments securely through our platform. When someone rents your equipment, the payment is processed immediately and held safely. Once the rental period is complete, the funds are transferred to your account minus our small service fee.",
  },
  {
    title: "What about insurance and damage protection?",
    desc: "We provide comprehensive protection for equipment owners. All rentals include basic insurance coverage, and renters must provide a security deposit. We also have a verification system to ensure responsible renters.",
  },
  {
    title: "How do I manage bookings and availability?",
    desc: "Our easy-to-use dashboard lets you manage all your bookings in one place. You can set your availability calendar, accept or decline booking requests, and communicate with renters directly through our platform.",
  },
  {
    title: "What equipment can I list?",
    desc: "You can list any water sports equipment in good condition, including surfboards, stand-up paddleboards (SUPs), kayaks, wetsuits, and related gear. All equipment must meet our safety and quality standards.",
  },
  {
    title: "What are the fees for listing equipment?",
    desc: "Listing your equipment is completely free! We only take a small percentage when you successfully rent out your gear. This includes payment processing, insurance coverage, and platform maintenance.",
  },
];

export function Faqs() {
  return (
    <section className="px-8 py-20">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center">
          <Typography variant="h1" color="blue-gray" className="mb-4" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            Frequently Asked Questions
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto mb-24 !text-gray-500 lg:w-3/5" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}          >
            Everything you need to know about renting out your water sports equipment
            and managing your rental business on WaveRent.
          </Typography>
        </div>

        <div className="grid gap-20 md:grid-cols-1 lg:grid-cols-3">
          {FAQS.map(({ title, desc }) => (
            <Card key={title} shadow={false} color="transparent" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              <Typography color="blue-gray" className="pb-6" variant="h4" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                {title}
              </Typography>
              <div className="pt-2">
                <Typography className="font-normal !text-gray-500" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                  {desc}
                </Typography>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faqs;
