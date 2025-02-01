"use client"

import { ProductDataType } from "@/service/queries/GetProduct";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Star, Heart, ZoomIn, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Dialog, DialogContent, DialogFooter, DialogClose } from "@/components/ui/dialog";

interface ProductProps {
    productData: ProductDataType[] | undefined | null;
}

export const Product = ({ productData }: ProductProps) => {
    const { addToCart, updateQuantity } = useCart();
    const [selectedProducts, setSelectedProducts] = useState<{ [key: string]: number }>({});
    const router = useRouter();
    const [wishlist, setWishlist] = useState<string[]>([]);
    const [showWishlistModal, setShowWishlistModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<ProductDataType | null>(null);
    const [showZoomModal, setShowZoomModal] = useState(false);
    const [zoomedProduct, setZoomedProduct] = useState<ProductDataType | null>(null);

    if (!productData || productData.length === 0) {
        return <div>No products available</div>;
    }

    const calculateDiscount = (oldPrice: number, currentPrice: number) => {
        const discount = ((oldPrice - currentPrice) / oldPrice) * 100;
        return Math.round(discount);
    };

    const handleAddToCart = (product: ProductDataType) => {
        setSelectedProducts(prev => ({
            ...prev,
            [product.id]: 1
        }));
        addToCart({
            id: product.id,
            name: product.name || product.title,
            price: Number(product.price),
            quantity: 1,
            image: product.image,
            oldPrice: product.oldPrice || Number(product.price) * 1.3
        });
    };

    const handleQuantityChange = (product: ProductDataType, newQuantity: number) => {
        if (newQuantity < 1) {
            setSelectedProducts(prev => {
                const newSelected = { ...prev };
                delete newSelected[product.id];
                return newSelected;
            });
            updateQuantity(product.id, 0);
            return;
        }

        setSelectedProducts(prev => ({
            ...prev,
            [product.id]: newQuantity
        }));
        updateQuantity(product.id, newQuantity);
    };

    const handleProductClick = (e: React.MouseEvent, productId: string) => {
        const target = e.target as HTMLElement;
        if (!target.closest('button')) {
            router.push(`/product/${productId}`);
        }
    };

    const handleZoomClick = (e: React.MouseEvent, product: ProductDataType) => {
        e.stopPropagation();
        setZoomedProduct(product);
        setShowZoomModal(true);
    };

    const handleWishlistClick = (e: React.MouseEvent, product: ProductDataType) => {
        e.stopPropagation();

        if (!wishlist.includes(product.id)) {
            const newWishlist = [...wishlist, product.id];
            setWishlist(newWishlist);
            localStorage.setItem('wishlist', JSON.stringify(newWishlist));
        }

        setSelectedProduct(product);
        setShowWishlistModal(true);
    };

    const handleViewWishlist = () => {
        setShowWishlistModal(false);
        router.push('/wishlist');
    };

    const handleViewAll = () => {
        router.push('/shop');
    };

    return (
        <>
            <div className="w-[100%] mx-auto">
                <div className='flex justify-between items-center mb-8'>
                    <div className='Product-section-button-text'>
                        <h1 className='Product-section-text-title text-[34px] text-[#1D1F1F] font-bold font-primary'>Best Sellers</h1>
                        <p className='Product-section-text-description text-[#8B8E8F] text-base font-primary'>Do not miss the current offers until the end of March</p>
                    </div>
                    <Button 
                        onClick={handleViewAll}
                        className='Product-section-button bg-white text-[#1D1F1F] hover:bg-[#f5f5f5] border border-[#E4E7E9] rounded-full w-[130px]'
                    >
                        View All
                    </Button>
                </div>
                <div className="relative w-[95%] mx-auto">
                    <Carousel className="w-full" opts={{ align: "start", slidesToScroll: 1 }}>
                        <CarouselContent className="ml-2">
                            {productData.map((product) => {
                                const oldPrice = product.oldPrice || Number(product.price) * 1.3;
                                const discountPercentage = calculateDiscount(oldPrice, Number(product.price));
                                const isSelected = product.id in selectedProducts;

                                return (
                                    <CarouselItem key={product.id} className="basis-1/4">
                                        <div
                                            onClick={(e) => handleProductClick(e, product.id)}
                                            className="cursor-pointer group relative"
                                        >
                                            <div className="relative flex flex-col border rounded-lg h-[450px] w-[230px] hover:shadow-lg transition-shadow p-2">
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

                                                <div className="relative flex justify-center w-[217px] h-[200px] p-2 mb-2 items-center">
                                                    <img
                                                        src={product.image}
                                                        alt=""
                                                        className="w-[100%] h-[100%] object-cover"
                                                    />
                                                    <div className="absolute right-2 top-2 z-10">
                                                        <div className="flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                            <button
                                                                onClick={(e) => handleZoomClick(e, product)}
                                                                className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
                                                            >
                                                                <ZoomIn className="w-5 h-5 text-gray-600" />
                                                            </button>
                                                            <button
                                                                onClick={(e) => handleWishlistClick(e, product)}
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

                                                    {isSelected ? (
                                                        <div className="flex items-center justify-between bg-gray-100 rounded-full p-1">
                                                            <button
                                                                onClick={() => handleQuantityChange(product, (selectedProducts[product.id] || 1) - 1)}
                                                                className="w-8 h-8 flex items-center justify-center bg-white rounded-full text-gray-600 hover:bg-gray-50"
                                                            >
                                                                -
                                                            </button>
                                                            <span className="text-gray-800 font-medium">
                                                                {selectedProducts[product.id] || 1}
                                                            </span>
                                                            <button
                                                                onClick={() => handleQuantityChange(product, (selectedProducts[product.id] || 1) + 1)}
                                                                className="w-8 h-8 flex items-center justify-center bg-yellow-400 rounded-full text-white hover:bg-yellow-500"
                                                            >
                                                                +
                                                            </button>
                                                        </div>
                                                    ) : (
                                                        <Button
                                                            onClick={() => handleAddToCart(product)}
                                                            className="w-full bg-white text-[#00cdec] border-2 border-[#00cdec] hover:bg-[#00cdec] hover:text-white transition-colors rounded-full"
                                                        >
                                                            Add to cart
                                                        </Button>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </CarouselItem>
                                );
                            })}
                        </CarouselContent>
                        <CarouselPrevious className="border-2 border-gray-200 absolute -left-4 top-1/2 transform -translate-y-1/2" />
                        <CarouselNext className="border-2 border-gray-200 absolute -right-4 top-1/2 transform -translate-y-1/2" />
                    </Carousel>
                </div>
            </div>

            <Dialog open={showWishlistModal} onOpenChange={setShowWishlistModal}>
                <DialogContent className="sm:max-w-md">
                    <div className="flex flex-col items-center text-center p-4">
                        <div className="mb-4">
                            <Heart className="w-12 h-12 text-red-500 fill-red-500" />
                        </div>
                        <h2 className="text-xl font-semibold mb-2">
                            Successfully added to Wishlist
                        </h2>
                        <p className="text-gray-600 mb-4">
                            {selectedProduct?.title}
                        </p>
                        <DialogFooter className="flex flex-col sm:flex-row gap-2 mt-4">
                            <button
                                onClick={() => setShowWishlistModal(false)}
                                className="px-6 py-2 border rounded-full text-gray-600 hover:bg-gray-100"
                            >
                                Continue Shopping
                            </button>
                            <button
                                onClick={handleViewWishlist}
                                className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
                            >
                                View Wishlist
                            </button>
                        </DialogFooter>
                    </div>
                </DialogContent>
            </Dialog>

            <Dialog open={showZoomModal} onOpenChange={setShowZoomModal}>
                <DialogContent className="sm:max-w-4xl p-3">
                    <DialogClose className="absolute right-4 top-4 w-[40px] h-[40px] rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.3)] hover:bg-gray-100 transition-colors flex items-center justify-center z-50">
                        <svg width="20" height="20" viewBox="0 0 24 24">
                            <path d="M18 6L6 18M6 6L18 18" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                    </DialogClose>

                    <div className="relative">
                        <div className="grid grid-cols-2 gap-6">

                            <div className="h-[500px] bg-gray-50">
                                <div className="relative aspect-square">
                                    <img
                                        src={zoomedProduct?.image}
                                        alt={zoomedProduct?.title}
                                        className="w-full h-full object-contain rounded-lg"
                                    />
                                </div>
                            </div>


                            <div className="flex flex-col justify-center">
                                <h2 className="text-[28px] font-semibold mb-4">
                                    {zoomedProduct?.title}
                                </h2>

                                <div className="flex items-center gap-2 mb-4">
                                    <div className="flex">
                                        {[1, 2, 3, 4].map((star) => (
                                            <Star key={star} className="w-4 h-4 fill-[#FCD34D] text-[#FCD34D]" />
                                        ))}
                                    </div>
                                    <span className="text-gray-500 text-sm">1 Review</span>
                                </div>

                                <div className="flex items-center gap-2 mb-4">
                                    <span className="text-gray-400 line-through text-sm">
                                        ${(Number(zoomedProduct?.price) * 1.3).toFixed(2)}
                                    </span>
                                    <span className="text-[#DC2626] font-bold text-2xl">
                                        ${zoomedProduct?.price}
                                    </span>
                                </div>

                                <p className="text-[#10B981] text-sm font-medium mb-4">IN STOCK</p>

                                <div className="space-y-4">
                                    <Button
                                        onClick={() => {
                                            if (zoomedProduct) handleAddToCart(zoomedProduct);
                                            setShowZoomModal(false);
                                        }}
                                        className="w-[250px] bg-[#00cdec] hover:bg-[#00b8d4] text-white rounded-full py-6"
                                    >
                                        Add to Cart
                                    </Button>

                                    <Button
                                        onClick={() => {
                                            if (zoomedProduct) handleWishlistClick(new MouseEvent('click') as any, zoomedProduct);
                                            setShowZoomModal(false);
                                        }}
                                        className="w-[250px] bg-white text-gray-600 border-2 border-gray-200 hover:bg-gray-50 rounded-full py-6"
                                    >
                                        Add to Wishlist
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
}