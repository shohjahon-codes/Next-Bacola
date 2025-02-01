"use client"

import { ProductDataType } from "@/service/queries/GetProduct";
import { Button } from "@/components/ui/button";
import { Star, Heart, ZoomIn } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Clock from "../clock/clock";

interface ProductCardProps {
    product: ProductDataType;
}

export const ProductCard = ({ product }: ProductCardProps) => {
    const { addToCart, updateQuantity } = useCart();
    const [selectedQuantity, setSelectedQuantity] = useState<number>(0);
    const router = useRouter();
    const [wishlist, setWishlist] = useState<string[]>([]);

    const oldPrice = product.oldPrice || Number(product.price) * 1.3;
    const discountPercentage = Math.round(((oldPrice - Number(product.price)) / oldPrice) * 100);

    const handleAddToCart = () => {
        setSelectedQuantity(1);
        addToCart({
            id: product.id,
            name: product.name || product.title,
            price: Number(product.price),
            quantity: 1,
            image: product.image,
            oldPrice: product.oldPrice || Number(product.price) * 1.3
        });
    };

    const handleQuantityChange = (newQuantity: number) => {
        if (newQuantity < 1) {
            setSelectedQuantity(0);
            updateQuantity(product.id, 0);
            return;
        }
        setSelectedQuantity(newQuantity);
        updateQuantity(product.id, newQuantity);
    };

    const handleProductClick = (e: React.MouseEvent) => {
        const target = e.target as HTMLElement;
        if (!target.closest('button')) {
            router.push(`/product/${product.id}`);
        }
    };

    const handleWishlistClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        const newWishlist = [...wishlist, product.id];
        setWishlist(newWishlist);
        localStorage.setItem('wishlist', JSON.stringify(newWishlist));
    };

    return (
        <div
            onClick={handleProductClick}
            className="cursor-pointer group relative"
        >
            <div className="relative flex flex-col border rounded-lg h-[450px] w-[340px] md:w-[230px] hover:shadow-lg transition-shadow p-2">
                <div className="absolute top-2 left-2 z-20">
                    {discountPercentage > 0 && (
                        <div className="bg-[#00cdec] text-white px-2 py-0.5 rounded text-xs w-[45px] text-center">
                            {discountPercentage}%
                        </div>
                    )}
                    <div className="mt-2 bg-[#6B7280] w-[130px] rounded-md text-center">
                        <h1 className="text-white text-[8px]">
                            RECOMMENDED
                        </h1>
                    </div>
                </div>

                <div className="relative flex justify-center w-[100%] h-[200px] p-2 mb-2 items-center">
                    <img
                        src={product.image}
                        alt=""
                        className="w-[100%] h-[100%] object-contain"
                    />
                    <div className="absolute right-2 top-2 z-10">
                        <div className="flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    router.push(`/product/${product.id}`);
                                }}
                                className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
                            >
                                <ZoomIn className="w-5 h-5 text-gray-600" />
                            </button>
                            <button
                                onClick={handleWishlistClick}
                                className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
                            >
                                <Heart
                                    className={`w-5 h-5 ${wishlist.includes(product.id)
                                        ? 'fill-red-500 text-red-500'
                                        : 'text-gray-600'
                                        }`}
                                />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="h-[60px] flex items-start">
                    <h3 className="text-base font-semibold line-clamp-2 text-gray-800">
                        {product.name || product.title}
                    </h3>
                </div>

                <div className="flex flex-col gap-2 h-[60px]">
                    <p className="text-[#10B981] text-sm font-medium">IN STOCK</p>
                    <div className="flex items-center gap-1">
                        <div className="flex">
                            {[1, 2, 3, 4].map((star) => (
                                <Star key={star} className="w-4 h-4 fill-[#FCD34D] text-[#FCD34D]" />
                            ))}
                        </div>
                        <span className="text-gray-500 text-sm">1</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="text-gray-400 line-through text-sm">${oldPrice.toFixed(2)}</span>
                        <span className="text-[#DC2626] font-bold text-xl">${product.price}</span>
                    </div>

                    {selectedQuantity > 0 ? (
                        <div className="flex items-center justify-between bg-gray-100 rounded-full p-1">
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleQuantityChange(selectedQuantity - 1);
                                }}
                                className="w-8 h-8 flex items-center justify-center bg-white rounded-full text-gray-600 hover:bg-gray-50"
                            >
                                -
                            </button>
                            <span className="text-gray-800 font-medium">
                                {selectedQuantity}
                            </span>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleQuantityChange(selectedQuantity + 1);
                                }}
                                className="w-8 h-8 flex items-center justify-center bg-yellow-400 rounded-full text-white hover:bg-yellow-500"
                            >
                                +
                            </button>
                        </div>
                    ) : (
                        <Button
                            onClick={(e) => {
                                e.stopPropagation();
                                handleAddToCart();
                            }}
                            className="w-full bg-white text-[#00cdec] border-2 border-[#00cdec] hover:bg-[#00cdec] hover:text-white transition-colors rounded-full"
                        >
                            Add to cart
                        </Button>
                    )}
                </div>

                {product.discount && (
                    <Clock 
                        hours={47} 
                        minutes={16} 
                        seconds={51} 
                        milliseconds={51} 
                    />
                )}
            </div>
        </div>
    );
}; 