"use client";

import Image from "next/image";
import { Button, Typography } from "@material-tailwind/react";


function Hero() {
  return (
    <div className="relative min-h-screen w-full home" id="home">
<header className="grid !min-h-[49rem] bg-gradient-wave px-8">
<div className="container mx-auto mt-32 grid h-full w-full grid-cols-1 place-items-center lg:mt-14 lg:grid-cols-2">
          <div className="col-span-1">
            <Typography variant="h1" color="white" className="mb-4" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              Turn Your Water Sports <br /> Equipment Into Income
            </Typography>
            <Typography
              variant="lead"
              className="mb-7 !text-white md:pr-16 xl:pr-28"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}            >
              Create your rental business today. List your surfboards, SUPs, kayaks, 
              and other water sports equipment to earn money while helping others 
              experience the thrill of water adventures.
            </Typography>
            <Typography className="mb-4" color="white" variant="h6"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              Start Your Journey
            </Typography>
            <div className="flex flex-col gap-2 md:mb-2 md:w-10/12 md:flex-row">
              <Button
                size="lg"
                className="bg-white hover:bg-white/90 flex justify-center items-center gap-3 text-gray-900"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}              >
                <Image
                  width={256}
                  height={256}
                  src="/logos/logo-apple.png"
                  alt="app-store"
                  className="w-6 h-6"
                />
                App Store
              </Button>
              <Button
                size="lg"
                className="bg-white hover:bg-white/90 flex justify-center items-center gap-3 text-gray-900"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}              >
                <Image
                  width={256}
                  height={256}
                  src="/logos/logo-google.png"
                  alt="google-play"
                  className="w-6 h-6"
                />
                Google Play
              </Button>
            </div>
          </div>
          <Image
            width={470}
            height={576}
            src="/image/iphones.png"
            alt="team work"
            className="col-span-1 my-20 h-full max-h-[30rem] -translate-y-32 md:max-h-[36rem] lg:my-0 lg:ml-auto lg:max-h-[40rem] lg:translate-y-0"
          />
        </div>
      </header>
      <div className="mx-8 lg:mx-16 -mt-24 rounded-xl bg-white p-5 md:p-14 shadow-md">
        <div>
          <Typography variant="h3" color="blue" className="mb-3"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            Rent Smart, Live Better
          </Typography>
          <Typography
            variant="paragraph"
            className="font-normal !text-gray-500 lg:w-5/12" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}          >
            Discover the perfect rental property with WaveRents - your trusted platform 
            for finding and managing rental properties with ease and confidence.
          </Typography>
        </div>
      </div>
    </div>
  );
}
export default Hero;
