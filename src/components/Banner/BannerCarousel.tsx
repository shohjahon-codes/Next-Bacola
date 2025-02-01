'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Autoplay from 'embla-carousel-autoplay';
import Link from 'next/link';
import { BannerType } from '@/service/queries/GetBanner';
import React from 'react';

interface BannerCarouselProps {
  banners: BannerType[];
}

export default function BannerCarousel({ banners }: BannerCarouselProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="w-full h-[350px] md:h-[550px] lg:h-full lg:w-full lg:flex lg:justify-end">
      <Carousel 
        opts={{
          align: "start",
          loop: true,
        }}
        setApi={setApi}
        className="w-full h-full lg:w-[70%] xxl:w-[75%] relative"
        plugins={[
          Autoplay({
            delay: 4000,
            stopOnInteraction: false,
          })
        ]}
      > 
        <CarouselContent className="w-full h-full md:h-full lg:h-full">
          {Array.isArray(banners) && banners.length > 0 ? (
            banners.map((banner, index) => (
              <CarouselItem key={banner.id} className="w-full h-full">
                <div className="relative w-full h-[350px] md:h-full">
                  <div className="w-full h-full overflow-hidden md:h-[550px]">
                    <img 
                      src={banner.image} 
                      alt="" 
                      className="w-full h-full object-cover md:object-contain lg:object-cover" 
                    />
                  </div>
                  <div className="absolute top-[35px] left-[10px] md:top-[150px] md:left-[50px] lg:top-[130px] lg:left-[50px]">
                    <div className="flex gap-2 items-center">
                      <span className="text-[8px] md:text-lg lg:text-xl font-medium text-[#253D4E] font-primary">
                        EXCLUSIVE OFFER
                      </span>
                      <span className="bg-[#E6F2ED] text-[#00B207] px-3 py-1 rounded-full text-[12px] sm:text-sm md:text-base font-medium font-primary">
                        {index === 0 
                          ? "-20% OFF" 
                          : index === 1 
                          ? "-30% OFF"
                          : "-40% OFF"
                        }
                      </span>
                    </div>
                    <h1 className="text-[30px] md:text-4xl lg:text-5xl font-bold sm:mt-4 md:mt-5 lg:mt-6 leading-tight w-[80%] md:w-[70%] lg:w-[80%] text-[#253D4E] font-primary">
                      {index === 0 
                        ? "Specialist in the grocery store" 
                        : index === 1 
                        ? "Feed your family the best"
                        : "Grocery full of inspiration"
                      }
                    </h1>
                    <p className="text-[12px] sm:text-base md:text-lg text-[#7E7E7E] mt-2 sm:mt-3 md:mt-4 font-primary">
                      Only this week. Don't miss...
                    </p>
                    <p className="mt-2 sm:mt-3 md:mt-4">
                      <span className="text-[14px] sm:text-base md:text-lg text-[#7E7E7E] font-primary">from</span>{" "}
                      <span className="text-[#FF0000] text-[24px] sm:text-3xl md:text-4xl font-bold font-primary">
                        {index === 0 
                          ? "$6.99" 
                          : index === 1 
                          ? "$8.99"
                          : "$6.99"
                        }
                      </span>
                    </p>
                    <Link href="/shop" className="mt-4 sm:mt-5 md:mt-6 inline-block">
                      <Button className="bg-[#2CC8E4] text-white hover:bg-[#22A5BC] transition-colors flex items-center justify-center gap-2 w-[100px] md:w-[140px] md:rounded-full font-medium font-primary">
                        <span className="text-[12px]">Shop Now</span>
                        <svg 
                          width="16" 
                          height="16"
                          className="sm:w-[18px] sm:h-[18px] md:w-[20px] md:h-[20px] hidden md:block"
                          viewBox="0 0 24 24" 
                          fill="none" 
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path 
                            d="M15.5 7.5L20 12M20 12L15.5 16.5M20 12H4" 
                            stroke="white" 
                            strokeWidth="1.5" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Button>
                    </Link>
                  </div>
                </div>
              </CarouselItem>
            ))
          ) : (
            <CarouselItem className="w-full h-full">
              <div className="relative w-full h-[350px] md:h-full">
                <div className="flex items-center justify-center w-full h-full">
                  <p className="text-gray-500">Banner mavjud emas</p>
                </div>
              </div>
            </CarouselItem>
          )}
        </CarouselContent>
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {Array.isArray(banners) && banners.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 
                ${current === index ? 'bg-orange-500' : 'bg-orange-200'}`}
              onClick={() => api?.scrollTo(index)}
            />
          ))}
        </div>
      </Carousel>
    </div>
  );
} 