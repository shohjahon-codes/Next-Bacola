"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ProductDataType } from "@/service/queries/GetProduct";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";

interface NewProductsProps {
  productData: ProductDataType[];
}

export function NewProducts({ productData }: NewProductsProps) {
  const router = useRouter();
  const { addToCart, updateQuantity } = useCart();
  const [selectedQuantities, setSelectedQuantities] = useState<
    Record<string, number>
  >({});
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [selectedProduct, setSelectedProduct] =
    useState<ProductDataType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isWishlistModalOpen, setIsWishlistModalOpen] = useState(false);
  const [wishlistProduct, setWishlistProduct] =
    useState<ProductDataType | null>(null);

  const handleAddToCart = (product: ProductDataType) => {
    setSelectedQuantities((prev) => ({ ...prev, [product.id]: 1 }));
    addToCart({
      id: product.id,
      name: product.title,
      price: Number(product.price),
      quantity: 1,
      image: product.image,
      oldPrice: Number(product.price) * 1.3,
    });
  };

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    if (newQuantity < 1) {
      setSelectedQuantities((prev) => {
        const newState = { ...prev };
        delete newState[productId];
        return newState;
      });
      updateQuantity(productId, 0);
      return;
    }
    setSelectedQuantities((prev) => ({ ...prev, [productId]: newQuantity }));
    updateQuantity(productId, newQuantity);
  };

  const handleWishlistClick = (
    e: React.MouseEvent,
    product: ProductDataType
  ) => {
    e.stopPropagation();
    setWishlist((prev) => {
      const newWishlist = prev.includes(product.id)
        ? prev.filter((id) => id !== product.id)
        : [...prev, product.id];
      localStorage.setItem("wishlist", JSON.stringify(newWishlist));
      return newWishlist;
    });

    if (!wishlist.includes(product.id)) {
      setWishlistProduct(product);
      setIsWishlistModalOpen(true);
    }
  };

  const handleQuickView = (e: React.MouseEvent, product: ProductDataType) => {
    e.stopPropagation();
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleContinueShopping = () => {
    setIsWishlistModalOpen(false);
  };

  const handleViewWishlist = () => {
    router.push("/wishlist");
    setIsWishlistModalOpen(false);
  };

  return (
    <div className="Product-left-new-products pt-10">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-bold">
            NEW PRODUCTS <span className="text-[#FF3457]">FOR YOU</span>
          </h2>
          <p className="text-gray-500 text-sm">
            New products with updated stocks
          </p>
        </div>
        <Link
          href="/shop"
          className="text-black hover:text-black flex items-center gap-1"
        >
          <Button
            variant="ghost"
            className="rounded-full border border-gray-300 px-6 py-2 text-sm font-medium hover:bg-gray-100 w-[130px] shadow-[0_1px_2px_rgba(0,0,0,0.2)] hover:shadow-[0_2px_2px_rgba(0,0,0,0.3)] transition-shadow duration-300"
          >
            View All
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-4 gap-6">
        {productData.slice(0, 8).map((product) => (
          <div
            key={product.id}
            className="cursor-pointer group relative h-full"
          >
            <div className="relative flex flex-col border rounded-lg hover:shadow-lg transition-shadow p-3 h-full">
              {/* Badges */}
              <div className="absolute top-2 left-2 z-20 flex flex-col gap-1">
                <div className="bg-[#00B9E7] text-white px-2 py-0.5 rounded text-sm w-[45px] text-center">
                  23%
                </div>
                <div className="bg-[#616161] text-white px-2 py-0.5 rounded-sm text-xs">
                  RECOMMENDED
                </div>
              </div>

              <div className="absolute right-2 top-2 z-10">
                <div className="flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button
                    onClick={(e) => handleQuickView(e, product)}
                    size="icon"
                    variant="secondary"
                    className="w-9 h-9 rounded-full shadow-md"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 8V4m0 0h4M4 4l5 5m11-2V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                      />
                    </svg>
                  </Button>
                  <Button
                    onClick={(e) => handleWishlistClick(e, product)}
                    size="icon"
                    variant="secondary"
                    className="w-9 h-9 rounded-full shadow-md"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-5 w-5 ${
                        wishlist.includes(product.id)
                          ? "fill-red-500 text-red-500"
                          : "text-gray-600"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </Button>
                </div>
              </div>
              <div className="relative w-full h-[160px] mb-2 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-contain transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="flex flex-col justify-between flex-grow">
                <div className="space-y-1.5">
                  <h3 className="text-[#2B2B2B] text-base font-medium leading-tight hover:text-[#00B853] transition-colors line-clamp-2">
                    {product.title}
                  </h3>

                  <p className="text-[#00B853] text-sm font-medium">IN STOCK</p>

                  <div className="flex items-center gap-1">
                    <div className="flex text-[#FFA800]">★★★★★</div>
                    <span className="text-gray-500 text-sm">1</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-gray-400 line-through text-sm">
                      ${(Number(product.price) * 1.3).toFixed(2)}
                    </span>
                    <span className="text-[#D51243] text-lg font-bold">
                      ${Number(product.price).toFixed(2)}
                    </span>
                  </div>
                </div>

                <div className="mt-3">
                  {selectedQuantities[product.id] ? (
                    <div className="flex items-center justify-between bg-gray-100 rounded-full p-1">
                      <Button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleQuantityChange(
                            product.id,
                            selectedQuantities[product.id] - 1
                          );
                        }}
                        size="icon"
                        variant="secondary"
                        className="w-8 h-8 rounded-full"
                      >
                        -
                      </Button>
                      <span className="text-gray-800 font-medium">
                        {selectedQuantities[product.id]}
                      </span>
                      <Button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleQuantityChange(
                            product.id,
                            selectedQuantities[product.id] + 1
                          );
                        }}
                        size="icon"
                        className="w-8 h-8 rounded-full bg-[#00B9E7] hover:bg-[#00a5ce]"
                      >
                        +
                      </Button>
                    </div>
                  ) : (
                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddToCart(product);
                      }}
                      variant="outline"
                      className="w-full border-[#00cdec] text-[#00cdec] hover:bg-[#00cdec] hover:text-white rounded-full transition-colors"
                    >
                      Add to cart
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-4xl p-0">
          <DialogClose className="absolute right-4 top-4 w-[35px] h-[35px] rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.3)] hover:bg-gray-100 transition-colors flex items-center justify-center z-50">
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </DialogClose>

          {selectedProduct && (
            <div className="grid grid-cols-2 gap-6">
              <div className="relative h-[500px] bg-gray-50">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  fill
                  className="object-cover p-8"
                />
              </div>

              <div className="p-6 pr-8">
                {/* Brand Logo */}
                <div className="w-12 h-12 bg-gray-100 rounded-lg mb-6 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    />
                  </svg>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {selectedProduct.title}
                </h2>

                <div className="flex items-center gap-2 mb-4">
                  <div className="flex text-[#FFA800]">★★★★★</div>
                  <span className="text-sm text-gray-600">1 Review</span>
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl font-bold text-[#D51243]">
                    ${Number(selectedProduct.price).toFixed(2)}
                  </span>
                  <span className="text-gray-400 line-through text-lg">
                    ${(Number(selectedProduct.price) * 1.3).toFixed(2)}
                  </span>
                </div>

                <p className="text-[#00B853] font-medium mb-6">IN STOCK</p>

                <div className="flex flex-col gap-4">
                  {selectedQuantities[selectedProduct.id] ? (
                    <div className="flex items-center justify-between bg-gray-100 rounded-full p-1 w-[200px]">
                      <Button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleQuantityChange(
                            selectedProduct.id,
                            selectedQuantities[selectedProduct.id] - 1
                          );
                        }}
                        size="icon"
                        variant="secondary"
                        className="w-10 h-10 rounded-full"
                      >
                        -
                      </Button>
                      <span className="text-gray-800 font-medium px-4">
                        {selectedQuantities[selectedProduct.id]}
                      </span>
                      <Button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleQuantityChange(
                            selectedProduct.id,
                            selectedQuantities[selectedProduct.id] + 1
                          );
                        }}
                        size="icon"
                        className="w-10 h-10 rounded-full bg-[#00B9E7] hover:bg-[#00a5ce]"
                      >
                        +
                      </Button>
                    </div>
                  ) : (
                    <Button
                      onClick={() => handleAddToCart(selectedProduct)}
                      className="w-[250px] bg-[#00cdec] hover:bg-[#00b8d4] text-white rounded-full py-6"
                    >
                      Add to Cart
                    </Button>
                  )}
                  <Button
                    onClick={(e) => handleWishlistClick(e, selectedProduct)}
                    variant="outline"
                    className="w-[250px] bg-white text-gray-600 border-2 border-gray-200 hover:bg-gray-50 rounded-full py-6"
                  >
                    Add to Wishlist
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Dialog open={isWishlistModalOpen} onOpenChange={setIsWishlistModalOpen}>
        <DialogContent className="sm:max-w-[500px] text-center p-6">
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-red-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-red-500"
                fill="currentColor"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold">
                Successfully added to Wishlist
              </h3>
              {wishlistProduct && (
                <p className="text-gray-500">{wishlistProduct.title}</p>
              )}
            </div>

            <div className="flex items-center gap-4 w-full mt-4">
              <Button
                onClick={handleContinueShopping}
                variant="outline"
                className="w-[230px] h-12 rounded-full border-gray-200 text-gray-600"
              >
                Continue Shopping
              </Button>
              <Button
                onClick={handleViewWishlist}
                className="w-[180px] h-12 bg-blue-600 text-white rounded-full hover:bg-blue-700"
              >
                View Wishlist
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
