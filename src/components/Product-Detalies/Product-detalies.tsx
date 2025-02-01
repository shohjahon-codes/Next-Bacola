"use client"

import { ProductDataType } from "@/service/queries/GetProduct";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

interface ProductDetailsProps {
    product: ProductDataType;
}

export const ProductDetails = ({ product }: ProductDetailsProps) => {
    const { addToCart, updateQuantity } = useCart();
    const [quantity, setQuantity] = useState(1);
    const oldPrice = 9.35;
    const [selectedImage, setSelectedImage] = useState(0);

    const handleAddToCart = () => {
        addToCart({
            id: product.id,
            name: product.title,
            price: Number(product.price),
            quantity: quantity,
            image: product.image,
            oldPrice: oldPrice
        });
    };

    const handleQuantityChange = (newQuantity: number) => {
        if (newQuantity < 1) return;
        setQuantity(newQuantity);
        updateQuantity(product.id, newQuantity);
    };

    const thumbnails = [
        { id: 1, image: product.image },
        { id: 2, image: product.image },
        { id: 3, image: product.image }
    ];

    return (
        <div className="flex justify-center w-full bg-white pt-10 pb-20">
            <div className="w-full max-w-[1340px] mx-auto px-4 py-8 shadow-[0_0_10px_rgba(0,0,0,0.1)] bg-white rounded-lg">
              
                <div className="flex flex-col lg:flex-row gap-8">
                   
                    <div className="flex-1">
                       
                        <h1 className="text-2xl font-bold text-gray-800 mb-4 lg:hidden">
                            All Natural Italian-Style Chicken Meatballs
                        </h1>

                     
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-6 lg:hidden">
                            <span>Brands: Welch's</span>
                            <div className="flex items-center gap-1">
                                <div className="flex">
                                    {[1, 2, 3].map((star) => (
                                        <Star key={star} className="w-4 h-4 fill-[#FCD34D] text-[#FCD34D]" />
                                    ))}
                                    <Star className="w-4 h-4 fill-[#FCD34D] text-[#FCD34D] opacity-50" />
                                </div>
                                <span className="ml-1">1 REVIEW</span>
                            </div>
                            <span>SKU: ZU49VOR</span>
                        </div>

                        <div className="flex flex-col lg:flex-row gap-8">
                          
                            <div className="w-full lg:w-1/2 order-1">
                                <div className="relative mb-4 max-w-[400px] mx-auto">
                                    <div className="absolute top-2 left-2 z-10">
                                        <div className="bg-[#00cdec] text-white px-3 py-1 rounded-md text-sm">
                                            23%
                                        </div>
                                    </div>
                                    <div className="absolute top-12 left-2 z-10">
                                        <div className="bg-[#6B7280] text-white px-2 py-1 rounded-md text-xs">
                                            RECOMMENDED
                                        </div>
                                    </div>
                                    <img 
                                        src={thumbnails[selectedImage].image} 
                                        alt="Product"
                                        className="w-full h-[400px] object-contain rounded-lg shadow-md"
                                    />
                                </div>
                                <div className="flex justify-center gap-4 mt-4">
                                    {thumbnails.map((thumb, index) => (
                                        <div 
                                            key={thumb.id} 
                                            onClick={() => setSelectedImage(index)}
                                            className={`border rounded-lg cursor-pointer overflow-hidden ${
                                                selectedImage === index ? 'border-blue-500' : 'border-gray-200'
                                            }`}
                                            style={{ width: '80px', height: '80px' }}
                                        >
                                            <img 
                                                src={thumb.image} 
                                                alt={`Thumbnail ${index + 1}`}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>

                           
                            <div className="w-full lg:w-1/2 order-2">
                                {/* Desktop Title and Brand Info */}
                                <div className="hidden lg:block">
                                    <h1 className="text-2xl font-bold text-gray-800 mb-4">
                                        All Natural Italian-Style Chicken Meatballs
                                    </h1>
                                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                                        <span>Brands: Welch's</span>
                                        <div className="flex items-center gap-1">
                                            <div className="flex">
                                                {[1, 2, 3].map((star) => (
                                                    <Star key={star} className="w-4 h-4 fill-[#FCD34D] text-[#FCD34D]" />
                                                ))}
                                                <Star className="w-4 h-4 fill-[#FCD34D] text-[#FCD34D] opacity-50" />
                                            </div>
                                            <span className="ml-1">1 REVIEW</span>
                                        </div>
                                        <span>SKU: ZU49VOR</span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-gray-400 line-through text-xl">${oldPrice}</span>
                                    <span className="text-[#DC2626] font-bold text-3xl">${product.price}</span>
                                </div>

                                <div className="mb-4">
                                    <span className="text-[#10B981] text-sm font-medium">IN STOCK</span>
                                </div>

                                <p className="text-gray-600 mb-6">
                                    Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt.
                                    Class aptent taciti sociosqu ad litora torquent
                                </p>

                                <div className="flex items-center gap-4 mb-6">
                                    <div className="flex items-center justify-between bg-gray-100 rounded-full p-2 w-32">
                                        <button 
                                            onClick={() => handleQuantityChange(quantity - 1)}
                                            className="w-8 h-8 flex items-center justify-center bg-white rounded-full text-gray-600"
                                        >
                                            -
                                        </button>
                                        <span className="text-gray-800 font-medium">{quantity}</span>
                                        <button 
                                            onClick={() => handleQuantityChange(quantity + 1)}
                                            className="w-8 h-8 flex items-center justify-center bg-white rounded-full text-gray-600"
                                        >
                                            +
                                        </button>
                                    </div>
                                    <Button 
                                        onClick={handleAddToCart}
                                        className="w-[200px] bg-[#1E40AF] hover:bg-blue-800 text-white rounded-full py-6"
                                    >
                                        Add to cart
                                    </Button>
                                </div>

                                <div className="flex gap-4 mb-8">
                                    <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800 px-4 py-2 border rounded-full">
                                        <span>ADD TO WISHLIST</span>
                                    </button>
                                    <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800 px-4 py-2 border rounded-full">
                                        <span>COMPARE</span>
                                    </button>
                                </div>

                                <div className="space-y-2 mb-6">
                                    <div className="flex items-center gap-2">
                                        <span className="text-gray-600">Type:</span>
                                        <span>Organic</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-gray-600">MFG:</span>
                                        <span>Jun 4.2021</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-gray-600">LIFE:</span>
                                        <span>30 days</span>
                                    </div>
                                </div>

                                <div className="border-t pt-4">
                                    <div className="mb-2">
                                        <span className="text-gray-600">Category:</span>
                                        <span className="ml-2">Meats & Seafood</span>
                                    </div>
                                    <div>
                                        <span className="text-gray-600">Tags:</span>
                                        <span className="ml-2">chicken, natural, organic</span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 mt-6 pt-6 border-t">
                                    <span className="text-gray-600">Share:</span>
                                    <div className="flex gap-2">
                                        <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-[#3b5998] text-white hover:opacity-90">
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                        <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1da1f2] text-white hover:opacity-90">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                        <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-[#0077b5] text-white hover:opacity-90">
                                            <i className="fab fa-linkedin-in"></i>
                                        </a>
                                        <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-[#e60023] text-white hover:opacity-90">
                                            <i className="fab fa-pinterest"></i>
                                        </a>
                                        <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-[#25d366] text-white hover:opacity-90">
                                            <i className="fab fa-whatsapp"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                   
                    <div className="w-full lg:w-[300px] shrink-0 self-start order-3">
                        <div className="bg-red-50 p-4 rounded-lg mb-6">
                            <p className="text-red-500">Covid-19 Info: We keep delivering.</p>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-lg space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-8 h-8 shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                                    </svg>
                                </div>
                                <p className="text-sm">Free Shipping apply to all orders over $100</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-8 h-8 shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                    </svg>
                                </div>
                                <p className="text-sm">Guaranteed 100% Organic from natural farms</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-8 h-8 shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <p className="text-sm">1 Day Returns if you change your mind</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
