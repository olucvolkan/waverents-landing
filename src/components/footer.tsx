"use client";
import Image from "next/image";
import { Typography, Button } from "@material-tailwind/react";

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-10 bg-wave-blue px-8 pt-12 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div className="text-center md:text-left">
            <Typography
              variant="h5"
              color="white"
              className="mb-4" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}            >
              WaveRent
            </Typography>
            <Typography color="white" className="font-normal opacity-80 mb-4"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              Making water sports accessible to everyone through our innovative rental platform.
            </Typography>
            <Typography
              as="a"
              href="/blog"
              color="white"
              className="py-1 font-medium transition-colors hover:text-white/80"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}            >
              Blog
            </Typography>
          </div>

          {/* Contact Info */}
          <div id="contact" className="text-center md:text-left scroll-mt-20">
            <Typography variant="h6" color="white" className="mb-4"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              Contact Us
            </Typography>
            <div className="space-y-2">
              <Typography color="white" className="font-normal opacity-80"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                Email: contact@waverent.com
              </Typography>
              <Typography color="white" className="font-normal opacity-80"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                Phone: +1 (555) 123-4567
              </Typography>
              <Typography color="white" className="font-normal opacity-80" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                Address: 123 Ocean Drive,<br />
                Marina District, CA 94123
              </Typography>
            </div>
          </div>

          {/* Download Apps */}
          <div className="text-center md:text-left">
            <Typography variant="h6" color="white" className="mb-4"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              Get the App
            </Typography>
            <div className="flex flex-col gap-2">
              <Button
                size="lg"
                className="bg-white hover:bg-white/90 flex justify-center items-center gap-3 text-gray-900" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}              >
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
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center">
          <Typography color="white" className="font-normal opacity-80"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            &copy; {CURRENT_YEAR} WaveRent. All rights reserved.
          </Typography>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
