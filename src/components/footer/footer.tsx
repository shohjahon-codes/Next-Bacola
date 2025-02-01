"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Mail, Truck, DollarSign, Phone, Facebook, Twitter, Instagram } from "lucide-react"
import { ShoppingBag } from "lucide-react"
import { Percent } from "lucide-react"
import Link from "next/link"


type FooterLink = {
    title: string;
    path: string;
}

type FooterCategory = {
    title: string;
    links: FooterLink[];
}

const footerCategories: FooterCategory[] = [
    {
        title: "FRUIT & VEGETABLES",
        links: [
            { title: "Fresh Vegetables", path: "/fresh-vegetables" },
            { title: "Herbs & Seasonings", path: "/herbs-seasonings" },
            { title: "Fresh Fruits", path: "/fresh-fruits" },
            { title: "Cuts & Sprouts", path: "/cuts-sprouts" },
            { title: "Exotic Fruits & Veggies", path: "/exotic-fruits-veggies" },
            { title: "Packaged Produce", path: "/packaged-produce" },
            { title: "Party Trays", path: "/party-trays" },
        ]
    },
    {
        title: "BREAKFAST & DAIRY",
        links: [
            { title: "Milk & Flavoured Milk", path: "/milk-flavoured-milk" },
            { title: "Butter and Margarine", path: "/butter-margarine" },
            { title: "Cheese", path: "/cheese" },
            { title: "Eggs Substitutes", path: "/eggs-substitutes" },
            { title: "Honey", path: "/honey" },
            { title: "Marmalades", path: "/marmalades" },
            { title: "Sour Cream and Dips", path: "/sour-cream-dips" },
            { title: "Yogurt", path: "/yogurt" },
        ]
    },
    {
        title: "MEAT & SEAFOOD",
        links: [
            { title: "Breakfast Sausage", path: "/breakfast-sausage" },
            { title: "Dinner Sausage", path: "/dinner-sausage" },
            { title: "Beef", path: "/beef" },
            { title: "Chicken", path: "/chicken" },
            { title: "Sliced Deli Meat", path: "/sliced-deli-meat" },
            { title: "Shrimp", path: "/shrimp" },
            { title: "Wild Caught Fillets", path: "/wild-caught-fillets" },
            { title: "Crab and Shellfish", path: "/crab-shellfish" },
            { title: "Farm Raised Fillets", path: "/farm-raised-fillets" },
        ]
    },
    {
        title: "BEVERAGES",
        links: [
            { title: "Water", path: "/water" },
            { title: "Sparkling Water", path: "/sparkling-water" },
            { title: "Soda & Pop", path: "/soda-pop" },
            { title: "Coffee", path: "/coffee" },
            { title: "Milk & Plant-Based Milk", path: "/milk-plant-based" },
            { title: "Tea & Kombucha", path: "/tea-kombucha" },
            { title: "Drink Boxes & Pouches", path: "/drink-boxes-pouches" },
            { title: "Craft Beer", path: "/craft-beer" },
            { title: "Wine", path: "/wine" },
        ]
    },
    {
        title: "BREADS & BAKERY",
        links: [
            { title: "Milk & Flavoured Milk", path: "/milk-flavoured-milk" },
            { title: "Butter and Margarine", path: "/butter-margarine" },
            { title: "Cheese", path: "/cheese" },
            { title: "Eggs Substitutes", path: "/eggs-substitutes" },
            { title: "Honey", path: "/honey" },
            { title: "Marmalades", path: "/marmalades" },
            { title: "Sour Cream and Dips", path: "/sour-cream-dips" },
            { title: "Yogurt", path: "/yogurt" },
        ]
    }
];

export const Footer = () => {
    return (
        <footer>
            <div className="bg-[#233a95] h-[500px] nr:h-[650px] md:h-[400px] lg:h-[450px] flex">
                <div className="container mx-auto flex flex-col md:flex-row h-full justify-between pt-4 items-center">
                    <div className="w-full h-full flex flex-col justify-center items-start">
                        <h4 className="text-[14px] text-white/90 font-normal mb-3">$20 discount for your first order</h4>
                        <h2 className="text-[26px] text-white font-semibold leading-tight mb-4">Join our newsletter and get...</h2>
                        <p className="text-[18px] text-white/70 mb-10 xl:w-[70%]">
                            Join our email subscription now to get updates on promotions and coupons.
                        </p>
                        <form className="flex w-[100%] bg-white rounded-md overflow-hidden h-[70px] justify-between p-2 items-center lg:w-[70%]">
                            <div className="relative flex items-center w-full">
                                <Mail className="w-6 h-6 text-gray-400" />
                                <Input
                                    type="email"
                                    placeholder="Your email address"
                                    className="h-[55px] w-full placeholder:text-[14px] bg-transparent border-0 text-gray-700 placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0 text-[16px] rounded-r-none"
                                />
                            </div>
                            <Button className="h-[45px] w-[80px] bg-[#233a95] hover:bg-[#1b2d73] text-white text-[15px] font-medium rounded-[4px]">
                                Subscribe
                            </Button>
                        </form>
                    </div>

                    <div className="w-full h-full flex justify-end items-end">
                        <img
                            src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/coupon.png"
                            alt="Discount Coupon"
                            className="w-[100%] h-auto object-cover md:object-contain"
                        />
                    </div>
                </div>
            </div>
            <div className="bg-[#f7f8fd] py-8">
                <div className="container mx-auto border-b-[1px] border-[#e4e5ee] pb-10">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:divide-x-[1px] lg:divide-[#e4e5ee]">
                        <div className="w-full flex items-center gap-4 first:pl-0">
                            <div className="w-12 h-12 flex items-center justify-center rounded-full">
                                <ShoppingBag className="w-6 h-6 text-[#233a95]" />
                            </div>
                            <h3 className="text-[15px] font-medium text-gray-900">
                                Everyday fresh products
                            </h3>
                        </div>

                        <div className="w-full flex items-center gap-4">
                            <div className="w-12 h-12 flex items-center justify-center bg-gray-50 rounded-full">
                                <Truck className="w-6 h-6 text-[#233a95]" />
                            </div>
                            <h3 className="text-[15px] font-medium text-gray-900">
                                Free delivery for order over $70
                            </h3>
                        </div>

                        <div className="w-full flex items-center gap-4">
                            <div className="w-12 h-12 flex items-center justify-center bg-gray-50 rounded-full">
                                <Percent className="w-6 h-6 text-[#233a95]" />
                            </div>
                            <h3 className="text-[15px] font-medium text-gray-900">
                                Daily Mega Discounts
                            </h3>
                        </div>

                        <div className="w-full flex items-center gap-4 last:pr-0">
                            <div className="w-12 h-12 flex items-center justify-center bg-gray-50 rounded-full">
                                <DollarSign className="w-6 h-6 text-[#233a95]" />
                            </div>
                            <h3 className="text-[15px] font-medium text-gray-900">
                                Best price on the market
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#f7f8fd] py-16 border-b border-gray-200">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-5">
                        {footerCategories.map((category, index) => (
                            <div key={index} className="flex flex-col">
                                <h3 className="text-[15px] font-bold text-gray-900 mb-5 uppercase tracking-wide">
                                    {category.title}
                                </h3>
                                <ul className="space-y-[11px]">
                                    {category.links.map((link, linkIndex) => (
                                        <li key={linkIndex}>
                                            <Link
                                                href={link.path}
                                                className="text-[14px] text-gray-500 hover:text-[#233a95] transition-colors duration-200"
                                            >
                                                {link.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="bg-[#f7f8fd] py-8">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 nr:grid-cols-2 md:grid-cols-3 flex items-center justify-between gap-10 md:flex">
                        <div className="flex items-center gap-4">
                            <div className="w-[45px] h-[45px] bg-white rounded-full flex items-center justify-center">
                                <Phone className="w-6 h-6 text-[#233a95]" />
                            </div>
                            <div>
                                <h3 className="text-sm md:text-[18px] font-semibold text-gray-900">8 800 555-55</h3>
                                <p className="text-[15px] text-gray-500">Working 8:00 - 22:00</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-5 grid grid-cols-1 md:flex">
                            <div className="flex flex-col">
                                <span className="text-[15px] font-medium text-gray-900 w-full flex">Download App on Mobile :</span>
                                <span className="text-[15px] text-gray-500">15% discount on your first purchase</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Link href="#" className="transition-opacity hover:opacity-80">
                                    <img
                                        src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/google-play.png"
                                        alt="Google Play"
                                        className="w-[115px] h-[38px] object-contain"
                                    />
                                </Link>
                                <Link href="#" className="transition-opacity hover:opacity-80">
                                    <img
                                        src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/app-store.png"
                                        alt="App Store"
                                        className="w-[115px] h-[38px] object-contain"
                                    />
                                </Link>
                            </div>
                            <div className="flex items-center gap-2">
                                <Link href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center transition-colors hover:bg-[#3b5998] group">
                                    <Facebook className="w-5 h-5 text-[#3b5998] group-hover:text-white" />
                                </Link>
                                <Link href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center transition-colors hover:bg-[#1DA1F2] group">
                                    <Twitter className="w-5 h-5 text-[#1DA1F2] group-hover:text-white" />
                                </Link>
                                <Link href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center transition-colors hover:bg-[#E1306C] group">
                                    <Instagram className="w-5 h-5 text-[#E1306C] group-hover:text-white" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#f7f8fd] py-5 border-t border-gray-200">
                <div className="container mx-auto flex flex-col gap-4">
                    <div className="flex gap-2 grid grid-cols-1 md:flex md:justify-between">
                        <p className="text-[14px] text-gray-500">
                            Copyright 2024 © Bacola WordPress Theme. All rights reserved. Powered by KlbTheme.
                        </p>
                        <div className="flex flex-col gap-2 md:flex-row ">
                            <Link href="/privacy-policy" className="text-[14px] text-gray-500 hover:text-[#233a95]">
                                Privacy Policy
                            </Link>
                            <Link href="/terms-conditions" className="text-[14px] text-gray-500 hover:text-[#233a95]">
                                Terms and Conditions
                            </Link>
                            <Link href="/cookie" className="text-[14px] text-gray-500 hover:text-[#233a95]">
                                Cookie
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer">
                        <img
                            src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/payments.jpg"
                            alt="Payment Methods"
                            className="w-[250px] h-auto"
                        />
                    </div>
                </div>
            </div>
        </footer>
    )
}
