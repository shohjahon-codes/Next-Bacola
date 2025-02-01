"use client"

import React, { useState } from "react"
import Link from "next/link"
import { SecurityIcons } from "@/public/icons/security-icons"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, User, ShoppingCart, ShoppingBag, Menu, Beef, Cookie, Coffee, BookOpen, PhoneCall, Apple, Snowflake, Candy, Carrot, X, ChevronDown, Store, Heart } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import Image from "next/image"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { usePathname } from 'next/navigation'
import { useCart } from '@/context/CartContext'


export const Header = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const { cartItems, totalAmount } = useCart();
    const page = [
        {
            id: 1,
            title: "About Us",
            path: "/about-us",
        },
        {
            id: 2,
            title: "My Account",
            path: "/login",
        },
        {
            id: 3,
            title: "Wishlist",
            path: "/wishlist",
        },
        {
            id: 4,
            title: "Order Tracking",
            path: "/order-tracking",
        },
        {
            id: 5,
            title: "MEATS & SEAFOOD",
            path: "/meats-and-seafood",
        },
        {
            id: 6,
            title: "BAKERY",
            path: "/bakery",
        },
        {
            id: 7,
            title: "BEVERAGES",
            path: "/beverages",
        },
        {
            id: 8,
            title: "BLOG",
            path: "/blog",
        },
        {
            id: 9,
            title: "CONTACT",
            path: "/contact",
        },
    ]

    const pathname = usePathname()

    return (
        <div>
            <header>
                <div className="border-b">
                    <div className="p-3 bg-[#233a95] w-[100%] h-[70px] md:h-[40px] flex items-center justify-center">
                        <div>
                            <h1 className="text-white text-[16px] text-center">Due to the <span className="text-[#ff0000] font-bold">COVID 19</span> epidemic, orders may be processed with a slight delay</h1>
                        </div>
                    </div>
                    <div className="hidden xl:flex flex-col pt-2">
                        <div className="container flex justify-between items-center w-full">
                            <ul className="flex gap-6">
                                {page
                                    .filter(item => item.id <= 4)
                                    .map((item) => (
                                        <li key={item.id}>
                                            <Link href={item.path} className="text-[16px] text-[#3E445A] hover:text-blue-500 transition-colors">
                                                {item.title}
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>

                        </div>
                        <div className="container flex items-center pt-3 pb-2 gap-4 justify-end w-[100%]">
                            <div className="flex items-center gap-2">
                                <SecurityIcons />
                                <h5 className="text-[16px] text-[#3E445A]">100% Secure delivery without contacting the courier</h5>
                            </div>
                            <div className="flex items-center gap-2">
                                <h5 className="text-[16px] text-[#3E445A]">Need help? Call Us:</h5>
                                <a href="tel:+ 0020 500" className="text-[#2bbef9] font-bold">+ 0020 500</a>
                            </div>
                            <select className="text-[16px] text-[#3E445A] outline-none">
                                <option value="en">English</option>
                                <option value="ar">Spanish</option>
                                <option value="ar">German</option>
                            </select>
                            <select className="text-[16px] text-[#3E445A] outline-none">
                                <option value="USD">USD</option>
                                <option value="EUR">EUR</option>
                                <option value="UZB">UZB</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto">
                    <div className="fixed bottom-0 left-0 z-50 w-full h-14 bg-white border-t border-gray-200 xl:hidden">
                        <div className="grid h-full max-w-lg grid-cols-4 mx-auto">
                            <Link href="/" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 group">
                                <Store className="w-6 h-6 text-gray-500 group-hover:text-[#2bbef9]" />
                                <span className="text-xs text-gray-500 group-hover:text-[#2bbef9]">Store</span>
                            </Link>
                            <Link href="/search" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 group">
                                <Search className="w-6 h-6 text-gray-500 group-hover:text-[#2bbef9]" />
                                <span className="text-xs text-gray-500 group-hover:text-[#2bbef9]">Search</span>
                            </Link>
                            <Link href="/wishlist" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 group">
                                <Heart className="w-6 h-6 text-gray-500 group-hover:text-[#2bbef9]" />
                                <span className="text-xs text-gray-500 group-hover:text-[#2bbef9]">Wishlist</span>
                            </Link>
                            <Link href="/login" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 group">
                                <User className="w-6 h-6 text-gray-500 group-hover:text-[#2bbef9]" />
                                <span className="text-xs text-gray-500 group-hover:text-[#2bbef9]">Account</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
            <nav>
                <div className="container mx-auto w-full flex items-center justify-between xxl:gap-[100px] shadow-[0_1px_10px_rgba(0,0,0,0.15)] md:shadow-none h-[70px] pt-2">
                    <Sheet>
                        <SheetTrigger asChild>
                            <span className="burger-menu cursor-pointer md:hidden">
                                <Menu className="w-6 h-6 text-[#3E445A]" strokeWidth={2} />
                            </span>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-full sm:max-w-[400px] p-0 block md:hidden">
                            <SheetHeader className="p-4 border-b flex flex-row justify-between items-center">
                                <div className="flex items-center md:hidden">
                                    <Link href="/">
                                        <Image
                                            src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/bacola-logo.png"
                                            alt="Bacola Market"
                                            width={145}
                                            height={45}
                                            className="h-auto"
                                            priority
                                        />
                                    </Link>
                                </div>
                            </SheetHeader>
                            <div className="px-4 py-6 flex flex-col gap-6">
                                <div className="mt-5 md:hidden w-full">
                                    <div className="container mx-auto w-full">
                                        <div className="flex items-center justify-between py-4 w-full">
                                            <Accordion type="single" collapsible className="w-full">
                                                <AccordionItem value="categories" className="border-0">
                                                    <AccordionTrigger className="hover:no-underline bg-[#2bbef9] hover:bg-[#2bbef9]/90  h-[50px] rounded-sm flex items-center gap-2 px-6 w-full">
                                                        <Button className="relative bg-transparent border-none shadow-none">
                                                            <div className="flex items-center gap-3">
                                                                <Menu className="w-6 h-6" strokeWidth={2} />
                                                                <span className="font-medium text-[15px]">ALL CATEGORIES</span>
                                                            </div>
                                                        </Button>
                                                    </AccordionTrigger>
                                                    <AccordionContent className="mt-1">
                                                        <div className="py-2">
                                                            <Link href="/fruits-vegetables" className="flex items-center gap-3 px-6 py-3 hover:bg-gray-100 transition-colors">
                                                                <Apple className="w-5 h-5 text-[#2bbef9]" />
                                                                <span className="text-[15px] text-gray-700">Fruits & Vegetables</span>
                                                            </Link>
                                                            <Link href="/meats-seafood" className="flex items-center gap-3 px-6 py-3 hover:bg-gray-100 transition-colors">
                                                                <Beef className="w-5 h-5 text-[#2bbef9]" />
                                                                <span className="text-[15px] text-gray-700">Meats & Seafood</span>
                                                            </Link>
                                                            <Link href="/breakfast-dairy" className="flex items-center gap-3 px-6 py-3 hover:bg-gray-100 transition-colors">
                                                                <Coffee className="w-5 h-5 text-[#2bbef9]" />
                                                                <span className="text-[15px] text-gray-700">Breakfast & Dairy</span>
                                                            </Link>
                                                            <Link href="/beverages" className="flex items-center gap-3 px-6 py-3 hover:bg-gray-100 transition-colors">
                                                                <Coffee className="w-5 h-5 text-[#2bbef9]" />
                                                                <span className="text-[15px] text-gray-700">Beverages</span>
                                                            </Link>
                                                            <Link href="/breads-bakery" className="flex items-center gap-3 px-6 py-3 hover:bg-gray-100 transition-colors">
                                                                <Cookie className="w-5 h-5 text-[#2bbef9]" />
                                                                <span className="text-[15px] text-gray-700">Breads & Bakery</span>
                                                            </Link>
                                                            <Link href="/frozen-foods" className="flex items-center gap-3 px-6 py-3 hover:bg-gray-100 transition-colors">
                                                                <Snowflake className="w-5 h-5 text-[#2bbef9]" />
                                                                <span className="text-[15px] text-gray-700">Frozen Foods</span>
                                                            </Link>
                                                            <Link href="/biscuits-snacks" className="flex items-center gap-3 px-6 py-3 hover:bg-gray-100 transition-colors">
                                                                <Candy className="w-5 h-5 text-[#2bbef9]" />
                                                                <span className="text-[15px] text-gray-700">Biscuits & Snacks</span>
                                                            </Link>
                                                            <Link href="/grocery-staples" className="flex items-center gap-3 px-6 py-3 hover:bg-gray-100 transition-colors">
                                                                <Carrot className="w-5 h-5 text-[#2bbef9]" />
                                                                <span className="text-[15px] text-gray-700">Grocery & Staples</span>
                                                            </Link>
                                                            <div className="border-t mt-2 pt-2">
                                                                <Link href="/value-of-the-day" className="flex items-center gap-3 px-6 py-3 hover:bg-gray-100 transition-colors">
                                                                    <span className="text-[15px] text-gray-700">Value of the Day</span>
                                                                </Link>
                                                                <Link href="/top-100-offers" className="flex items-center gap-3 px-6 py-3 hover:bg-gray-100 transition-colors">
                                                                    <span className="text-[15px] text-gray-700">Top 100 Offers</span>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </AccordionContent>
                                                </AccordionItem>
                                            </Accordion>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    {page
                                        .filter(item => item.id > 4)
                                        .map((item) => {
                                            const icon = {
                                                'MEATS & SEAFOOD': <Beef className="w-5 h-5" />,
                                                'BAKERY': <Cookie className="w-5 h-5" />,
                                                'BEVERAGES': <Coffee className="w-5 h-5" />,
                                                'BLOG': <BookOpen className="w-5 h-5" />,
                                                'CONTACT': <PhoneCall className="w-5 h-5" />
                                            }[item.title]

                                            return (
                                                <Link
                                                    key={item.id}
                                                    href={item.path}
                                                    className="flex items-center gap-3 py-3 text-[#3E445A] hover:text-blue-500 transition-colors"
                                                >
                                                    {icon}
                                                    <span>{item.title}</span>
                                                </Link>
                                            )
                                        })
                                    }
                                </div>

                                <div className="flex flex-col gap-3">
                                    <div className="flex flex-col gap-4 border-t pt-4">
                                        <div className="flex items-center gap-2">
                                            <p className="text-[16px] text-[#3E445A]">Copyright © 2024 Bacola Market. All rights reserved. Powered by <span className="text-[#2bbef9]">Next</span></p>
                                        </div>
                                    </div>

                                    <Select>
                                        <SelectTrigger className="text-[16px] text-[#3E445A] outline-none border-none focus:ring-0 focus:ring-offset-0 p-2 w-full">
                                            <SelectValue placeholder="English" />
                                        </SelectTrigger>
                                        <SelectContent side="bottom" align="start" className="border-none">
                                            <SelectItem value="en">English</SelectItem>
                                            <SelectItem value="es">Spanish</SelectItem>
                                            <SelectItem value="de">German</SelectItem>
                                        </SelectContent>
                                    </Select>

                                    <Select>
                                        <SelectTrigger className="text-[16px] text-[#3E445A] outline-none border-none focus:ring-0 focus:ring-offset-0 p-2 w-full">
                                            <SelectValue placeholder="USD" />
                                        </SelectTrigger>
                                        <SelectContent side="bottom" align="start" className="border-none">
                                            <SelectItem value="usd">USD</SelectItem>
                                            <SelectItem value="eur">EUR</SelectItem>
                                            <SelectItem value="uzb">UZB</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>

                    <div className="mobile-tab-des flex items-center gap-[30px] md:hidden">
                        <Link href="/">
                            <Image
                                src="	https://klbtheme.com/bacola/wp-content/uploads/2021/04/bacola-logo-mobile.png"
                                alt="Mobile Logo"
                                width={120}
                                height={38}
                                className="h-auto"
                                priority
                            /></Link>
                        </div>

                    <div className="bacola-img w-[180px] hidden md:flex flex-col items-start">
                        <Link href="/">
                            <div className="flex flex-col">
                                <Image
                                    src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/bacola-logo.png"
                                    alt="Bacola Market"
                                    width={145}
                                    height={45}
                                    className="h-auto"
                                    priority
                                />
                                <span className="text-[#3E445A] text-[12px] mt-1 whitespace-nowrap hidden md:hidden lg:block">
                                    Online Grocery Shopping Center
                                </span>
                            </div>
                        </Link>
                    </div>

                    <form className="hidden md:flex outline-none items-center w-full h-[60px] bg-[#f3f4f6] rounded-md md:w-[40%] lg:w-[40%] xl:w-[50%]">
                        <Input
                            type="text"
                            placeholder="Search for products..."
                            className="h-[65px] border-none bg-transparent focus:ring-0 outline-none text-black px-6 text-[20px] placeholder:text-[14px]"
                        />
                        <Button
                            variant="outline"
                            size="icon"
                            className="border-none outline-none bg-transparent shadow-none h-[65px] w-[65px] hover:bg-transparent flex items-center justify-center"
                        >
                            <Search className="w-[30px] h-[30px] text-[#3E445A]" strokeWidth={1.8} />
                        </Button>
                    </form>

                    <div className="flex items-center gap-8">
                        <Link href="/login" className="user-accaunt hidden md:flex">
                            <Button variant="ghost" className="flex items-center gap-2 hover:bg-transparent">
                                <div className="flex flex-col">
                                    <span className="text-[13px] text-gray-500 hidden md:hidden lg:block text:block">Sign in</span>
                                </div>
                                <div className="w-[55px] h-[55px] rounded-full bg-[#f3f4f6] flex items-center justify-center hover:bg-blue-500 transition-colors duration-200">
                                    <User
                                        className="w-[28px] h-[28px] text-[#3E445A] hover:text-white transition-colors duration-200"
                                        strokeWidth={1.8}
                                    />
                                </div>
                            </Button>
                        </Link>

                        <div className="mobile-items flex items-center">
                            <div
                                className="relative"
                                onMouseEnter={() => setIsCartOpen(true)}
                                onMouseLeave={() => setIsCartOpen(false)}
                            >
                                <Button variant="ghost" className="flex items-center gap-4 p-0 hover:bg-transparent">
                                    <div className="hidden tab:flex">
                                        <p className="text-[15px] font-medium text-[#3E445A]">${totalAmount.toFixed(2)}</p>
                                    </div>
                                    <div className="w-[55px] h-[55px] rounded-full bg-[#f3f4f6] flex items-center justify-center hover:bg-blue-500 transition-colors duration-200 relative">
                                        <ShoppingCart
                                            className="w-[28px] h-[28px] text-[#3E445A] hover:text-white transition-colors duration-200"
                                            strokeWidth={1.8}
                                        />
                                        <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#ed174a] text-white text-xs flex items-center justify-center">
                                            {cartItems.length}
                                        </span>
                                    </div>
                                </Button>

                                {isCartOpen && (
                                    <div className="absolute top-full right-0 mt-2 w-[400px] bg-white rounded-md shadow-lg border border-gray-100 z-50">
                                        <div className="p-6">
                                            {cartItems.length > 0 ? (
                                                <div className="flex flex-col gap-4">
                                                    {cartItems.map((item) => (
                                                        <div key={item.id} className="flex items-center gap-4">
                                                            <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                                                            <div className="flex-1">
                                                                <h3 className="text-sm font-medium text-gray-900">{item.name}</h3>
                                                                <p className="text-sm text-gray-500">
                                                                    {item.quantity} × ${item.price}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                    <div className="border-t pt-4 mt-4">
                                                        <div className="flex justify-between">
                                                            <span className="font-medium">Total:</span>
                                                            <span className="font-medium">${totalAmount.toFixed(2)}</span>
                                                        </div>
                                                        <Link href="/cart">
                                                            <Button className="w-full mt-4 bg-[#2bbef9]">
                                                                View Cart
                                                            </Button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="flex flex-col items-center justify-center py-8">
                                                    <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                                                        <ShoppingBag className="w-8 h-8 text-gray-400" />
                                                    </div>
                                                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                                                        No products in the cart.
                                                    </h3>
                                                    <p className="text-gray-500 text-center mb-6">
                                                        We reduce shipping prices to only 2.49 €!
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                </div>
                {/* Categories */}
                <div className="mt-5 hidden md:hidden lg:hidden xl:hidden xxl:block border-b pb-2">
                    <div className="container mx-auto">
                        <div className="flex items-center justify-between py-4 gap-2">
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button className="relative bg-[#2bbef9] hover:bg-[#2bbef9]/90 text-white w-[280px] h-[50px] rounded-[50px] flex items-center gap-2 px-6 lg:w-[200px] xxl:w-[250px]">
                                        <div className="flex items-center gap-3">
                                            <Menu className="w-6 h-6" strokeWidth={2} />
                                            <span className="font-medium text-[15px]">ALL CATEGORIES</span>
                                        </div>
                                        <p className="absolute -bottom-[13px] left-1/2 -translate-x-1/2 bg-[#E4EAF2] text-[#71778E] px-4 py-1 rounded-full whitespace-nowrap lg:w-[180px] lg:h-[25px] lg:text-[8px] lg:flex lg:items-center lg:justify-center">
                                            TOTAL 63 PRODUCTS
                                        </p>
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-[280px] p-0 mt-[26px] bg-white" align="start" side="bottom">
                                    <div className="py-2">
                                        <Link href="/fruits-vegetables" className="flex items-center gap-3 px-6 py-3 hover:bg-gray-100 transition-colors">
                                            <Apple className="w-5 h-5 text-[#2bbef9]" />
                                            <span className="text-[15px] text-gray-700">Fruits & Vegetables</span>
                                        </Link>
                                        <Link href="/meats-seafood" className="flex items-center gap-3 px-6 py-3 hover:bg-gray-100 transition-colors">
                                            <Beef className="w-5 h-5 text-[#2bbef9]" />
                                            <span className="text-[15px] text-gray-700">Meats & Seafood</span>
                                        </Link>
                                        <Link href="/breakfast-dairy" className="flex items-center gap-3 px-6 py-3 hover:bg-gray-100 transition-colors">
                                            <Coffee className="w-5 h-5 text-[#2bbef9]" />
                                            <span className="text-[15px] text-gray-700">Breakfast & Dairy</span>
                                        </Link>
                                        <Link href="/beverages" className="flex items-center gap-3 px-6 py-3 hover:bg-gray-100 transition-colors">
                                            <Coffee className="w-5 h-5 text-[#2bbef9]" />
                                            <span className="text-[15px] text-gray-700">Beverages</span>
                                        </Link>
                                        <Link href="/breads-bakery" className="flex items-center gap-3 px-6 py-3 hover:bg-gray-100 transition-colors">
                                            <Cookie className="w-5 h-5 text-[#2bbef9]" />
                                            <span className="text-[15px] text-gray-700">Breads & Bakery</span>
                                        </Link>
                                        <Link href="/frozen-foods" className="flex items-center gap-3 px-6 py-3 hover:bg-gray-100 transition-colors">
                                            <Snowflake className="w-5 h-5 text-[#2bbef9]" />
                                            <span className="text-[15px] text-gray-700">Frozen Foods</span>
                                        </Link>
                                        <Link href="/biscuits-snacks" className="flex items-center gap-3 px-6 py-3 hover:bg-gray-100 transition-colors">
                                            <Candy className="w-5 h-5 text-[#2bbef9]" />
                                            <span className="text-[15px] text-gray-700">Biscuits & Snacks</span>
                                        </Link>
                                        <Link href="/grocery-staples" className="flex items-center gap-3 px-6 py-3 hover:bg-gray-100 transition-colors">
                                            <Carrot className="w-5 h-5 text-[#2bbef9]" />
                                            <span className="text-[15px] text-gray-700">Grocery & Staples</span>
                                        </Link>
                                        <div className="border-t mt-2 pt-2">
                                            <Link href="/value-of-the-day" className="flex items-center gap-3 px-6 py-3 hover:bg-gray-100 transition-colors">
                                                <span className="text-[15px] text-gray-700">Value of the Day</span>
                                            </Link>
                                            <Link href="/top-100-offers" className="flex items-center gap-3 px-6 py-3 hover:bg-gray-100 transition-colors">
                                                <span className="text-[15px] text-gray-700">Top 100 Offers</span>
                                            </Link>
                                        </div>
                                    </div>
                                </PopoverContent>
                            </Popover>

                            <div className="flex items-center gap-8 lg:gap-4">
                                <Link
                                    href="/meats-and-seafood"
                                    className={`flex items-center gap-2 text-[15px] lg:text-[12px] font-medium lg:font-normal text-gray-700 hover:bg-[#f0faff] hover:text-[#2bbef9] transition-colors group h-[45px] px-2 rounded-full  justify-center ${pathname === '/meats-and-seafood' ? 'bg-[#f0faff] text-[#2bbef9]' : ''}`}
                                >
                                    <div className={`w-10 h-10 lg:w-8 lg:h-8 xxl:w-10 xxl:h-10 bg-[#F3F5F9] rounded-full flex items-center justify-center group-hover:bg-[#f0faff] ${pathname === '/meats-and-seafood' ? 'text-[#2bbef9]' : ''}`}>
                                        <Beef className="w-5 h-5 lg:w-4 lg:h-4 text-[#2bbef9] xxl:w-6 xxl:h-6" />
                                    </div>
                                    <span className={pathname === '/meats-and-seafood' ? 'text-[#2bbef9]' : ''}>MEATS & SEAFOOD</span>
                                </Link>
                                <Link
                                    href="/bakery"
                                    className={`flex items-center gap-2 text-[15px] lg:text-[12px] font-medium lg:font-normal text-gray-700 hover:bg-[#f0faff] hover:text-[#2bbef9] transition-colors group h-[45px] px-2 rounded-full  justify-center ${pathname === '/bakery' ? 'bg-[#f0faff] text-[#2bbef9]' : ''}`}
                                >
                                    <div className={`w-10 h-10 lg:w-8 lg:h-8 xxl:w-10 xxl:h-10 bg-[#F3F5F9] rounded-full flex items-center justify-center group-hover:bg-[#f0faff] ${pathname === '/bakery' ? 'text-[#2bbef9]' : ''}`}>
                                        <Cookie className="w-5 h-5 lg:w-4 lg:h-4 text-[#2bbef9] xxl:w-6 xxl:h-6" />
                                    </div>
                                    <span className={pathname === '/bakery' ? 'text-[#2bbef9]' : ''}>BAKERY</span>
                                </Link>
                                <Link
                                    href="/beverages"
                                    className={`gap-2 text-[15px] lg:text-[12px] font-medium lg:font-normal text-gray-700 hover:bg-[#f0faff] hover:text-[#2bbef9] transition-colors group h-[45px] px-2 rounded-full flex items-center justify-center ${pathname === '/beverages' ? 'bg-[#f0faff] text-[#2bbef9]' : ''}`}
                                >
                                    <div className={`w-10 h-10 lg:w-8 lg:h-8 xxl:w-10 xxl:h-10 bg-[#F3F5F9] rounded-full flex items-center justify-center group-hover:bg-[#f0faff] ${pathname === '/beverages' ? 'text-[#2bbef9]' : ''}`}>
                                        <Coffee className="w-5 h-5 lg:w-4 lg:h-4 text-[#2bbef9] xxl:w-6 xxl:h-6" />
                                    </div>
                                    <span className={pathname === '/beverages' ? 'text-[#2bbef9]' : ''}>BEVERAGES</span>
                                </Link>
                                <Link
                                    href="/blog"
                                    className={`gap-2 text-[15px] lg:text-[12px] font-medium lg:font-normal text-gray-700 hover:bg-[#f0faff] hover:text-[#2bbef9] transition-colors group h-[45px] px-2 rounded-full flex items-center justify-center ${pathname === '/blog' ? 'bg-[#f0faff] text-[#2bbef9]' : ''}`}
                                >
                                    <div className={`w-10 h-10 lg:w-8 lg:h-8 xxl:w-10 xxl:h-10 bg-[#F3F5F9] rounded-full flex items-center justify-center group-hover:bg-[#f0faff] ${pathname === '/blog' ? 'text-[#2bbef9]' : ''}`}>
                                        <BookOpen className="w-5 h-5 lg:w-4 lg:h-4 text-[#2bbef9] xxl:w-6 xxl:h-6" />
                                    </div>
                                    <span className={pathname === '/blog' ? 'text-[#2bbef9]' : ''}>BLOG</span>
                                </Link>
                                <Link
                                    href="/contact"
                                    className={`gap-2 text-[15px] lg:text-[12px] font-medium lg:font-normal text-gray-700 hover:bg-[#f0faff] hover:text-[#2bbef9] transition-colors group h-[45px] px-2 rounded-full flex items-center justify-center ${pathname === '/contact' ? 'bg-[#f0faff] text-[#2bbef9]' : ''}`}
                                >
                                    <div className={`w-10 h-10 lg:w-8 lg:h-8 xxl:w-10 xxl:h-10 bg-[#F3F5F9] rounded-full flex items-center justify-center group-hover:bg-[#f0faff] ${pathname === '/contact' ? 'text-[#2bbef9]' : ''}`}>
                                        <PhoneCall className="w-5 h-5 lg:w-4 lg:h-4 text-[#2bbef9] xxl:w-6 xxl:h-6" />
                                    </div>
                                    <span className={pathname === '/contact' ? 'text-[#2bbef9]' : ''}>CONTACT</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

