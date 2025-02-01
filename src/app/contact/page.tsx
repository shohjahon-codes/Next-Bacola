import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Phone, Mail } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Link from "next/link";

const Contact = () => {
  return (
    <div>
      <section className="container mx-auto pt-10 pb-20">
        <div className="grid grid-cols-1 gap-6">
          <div className="flex flex-col gap-2 items-center justify-center">
            <h1 className="text-[48px] font-simebold text-[#202435] text-center">
              Get In Touch
            </h1>
            <p className="text-[16px] font-normal text-[#202435] text-center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
              quaerat unde quam dolor culpa veritatis inventore, aut commodi eum
              veniam vel.
            </p>
          </div>
          <div className="flex flex-col gap-4 items-center justify-center md:flex-row">
            <Link
              href="https://maps.google.com/?q=Wall+Street,New+York,NY"
              className="w-[340px] h-[210px] bg-[#f3f3f6] rounded-md p-4 text-center flex flex-col gap-2 items-center justify-center"
            >
              <span className="w-14 h-14 bg-blue-500 text-white rounded-full flex items-center justify-center">
                <MapPin className="w-8 h-8" />
              </span>
              <h3 className="text-[18px] font-normal text-[#202435]">
                Wall Street, New York
              </h3>
              <p className="text-[14px] font-normal text-[#202435]">
                Lorem ipsum dolar site amet discont
              </p>
            </Link>
            <Link
              href="tel:+02-1234-567-88"
              className="w-[340px] h-[210px] bg-[#f3f3f6] rounded-md p-4 text-center flex flex-col gap-2 items-center justify-center"
            >
              <span className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center">
                <Phone className="w-8 h-8" />
              </span>
              <h3 className="text-[18px] font-normal text-[#202435]">
                +02 1234 567 88
              </h3>
              <p className="text-[14px] font-normal text-[#202435]">
                Lorem ipsum dolar site amet discont
              </p>
            </Link>
            <Link
              href="mailto:info@example.com"
              className="w-[340px] h-[210px] bg-[#f3f3f6] rounded-md p-4 text-center flex flex-col gap-2 items-center justify-center"
            >
              <span className="w-14 h-14 bg-orange-500 text-white rounded-full flex items-center justify-center">
                <Mail className="w-8 h-8" />
              </span>
              <h3 className="text-[18px] font-normal text-[#202435]">
                info@example.com
              </h3>
              <p className="text-[14px] font-normal text-[#202435]">
                Lorem ipsum dolar site amet discont
              </p>
            </Link>
          </div>
        </div>
      </section>
      <section className="container mx-auto pb-20">
        <div className="container mx-auto flex flex-col gap-8 send-us-container bg-white rounded-lg shadow-[0_0_60px_-15px_rgba(0,0,0,0.1)] h-[1000px]">
          <div className="flex flex-col items-center justify-center border-b border-gray-200 pb-10 pt-10">
            <h1 className="text-[45px] font-medium text-[#202435] text-center">
              Send Us
            </h1>
            <p className="text-[16px] font-normal text-[#202435] text-center max-w-[800px] mt-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
              quaerat unde quam dolor culpa veritatis inventore, aut commodi eum
              veniam vel.
            </p>
          </div>
          <div className="flex items-center justify-center w-full mt-5">
            <form className="flex flex-col gap-8 w-full max-w-[950px] px-4">
              <div className="flex flex-col md:flex-row gap-8 w-full">
                <div className="flex flex-col gap-2 w-full">
                  <Label htmlFor="name" className="text-[#202435] font-normal">
                    Your name *
                  </Label>
                  <Input
                    id="name"
                    placeholder="Name"
                    className="h-[50px] w-full bg-[#f5f5f5] border-none focus-visible:ring-0 focus-visible:ring-offset-0 shadow-[0_1px_2px_rgba(0,0,0,0.05)]"
                  />
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <Label htmlFor="email" className="text-[#202435] font-normal">
                    Your email *
                  </Label>
                  <Input
                    id="email"
                    placeholder="Email"
                    className="h-[50px] w-full bg-[#f5f5f5] border-none focus-visible:ring-0 focus-visible:ring-offset-0 shadow-[0_1px_2px_rgba(0,0,0,0.05)]"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 w-full">
                <Label htmlFor="subject" className="text-[#202435] font-normal">
                  Subject *
                </Label>
                <Input
                  id="subject"
                  placeholder="Subject"
                  className="h-[50px] w-full bg-[#f5f5f5] border-none focus-visible:ring-0 focus-visible:ring-offset-0 shadow-[0_1px_2px_rgba(0,0,0,0.05)]"
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <Label htmlFor="message" className="text-[#202435] font-normal">
                  Your message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Enter Your Message"
                  className="min-h-[180px] bg-[#f5f5f5] border-none focus-visible:ring-0 focus-visible:ring-offset-0 shadow-[0_1px_2px_rgba(0,0,0,0.05)]"
                />
              </div>
              <div className="flex justify-start">
                <Button className="h-[50px] w-[195px] rounded-[5px] bg-[#233a95] hover:bg-[#1e40af] text-white font-medium w-[180px] shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
