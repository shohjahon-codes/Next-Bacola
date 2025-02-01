"use client";

import { useEffect, useState } from "react";
import { ProductDataType } from "@/service/queries/GetProduct";
import { ProductCard } from "@/components/ProductCard/ProductCard";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Plus, Filter } from "lucide-react";
import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";

export default function ShopPage() {
  const [products, setProducts] = useState<ProductDataType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const productsPerPage = 12;
  const [priceRange, setPriceRange] = useState([0, 70]);

  const categories = [
    { name: "Beverages", hasChildren: true },
    { name: "Biscuits & Snacks", hasChildren: false },
    { name: "Breads & Bakery", hasChildren: true },
    { name: "Breakfast & Dairy", hasChildren: true },
    { name: "Frozen Foods", hasChildren: false },
    { name: "Fruits & Vegetables", hasChildren: true },
    { name: "Grocery & Staples", hasChildren: false },
    { name: "Household Needs", hasChildren: false },
    { name: "Meats & Seafood", hasChildren: true },
  ];

  const productStatus = [
    { name: "In Stock", count: 0 },
    { name: "On Sale", count: 0 },
  ];

  const brands = [
    { name: "Frito Lay", count: 10 },
    { name: "Nespresso", count: 11 },
    { name: "Oreo", count: 9 },
    { name: "Quaker", count: 10 },
    { name: "Welch's", count: 10 },
  ];

  useEffect(() => {
    fetchProducts();
  }, [currentPage]);

  const fetchProducts = async () => {
    try {
      const offset = (currentPage - 1) * productsPerPage;
      const response = await fetch(
        `http://localhost:8000/product/?offset=${offset}&limit=${productsPerPage}`
      );
      const data = await response.json();
      setProducts(data.results);
      setTotalPages(Math.ceil(data.count / productsPerPage));
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <section>
      <div className="md:hidden container mx-auto px-4 pt-4">
        <Button
          onClick={toggleSidebar}
          className="w-full flex items-center justify-center gap-2 bg-[#2B2B2B] hover:bg-[#000000] text-white"
        >
          <Filter className="w-4 h-4" />
          Filter Products
        </Button>
      </div>

      <div className="container mx-auto px-4 py-8 flex gap-8">
        <div
          className={`
                    fixed md:relative top-0 left-0 h-full md:h-auto w-[280px] bg-white z-50 
                    transition-transform duration-300 ease-in-out
                    ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
                    md:translate-x-0 md:flex-shrink-0
                    overflow-y-auto md:overflow-visible
                    p-4 md:p-0
                    shadow-lg md:shadow-none
                `}
        >
          <div className="md:hidden flex justify-end mb-4">
            <Button
              onClick={toggleSidebar}
              variant="ghost"
              size="sm"
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </Button>
          </div>

          <div className="mb-12">
            <h2 className="text-lg font-bold mb-4 text-[#2B2B2B]">
              PRODUCT CATEGORIES
            </h2>
            <div className="space-y-3">
              {categories.map((category) => (
                <div
                  key={category.name}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-2">
                    <Checkbox id={category.name} />
                    <label
                      htmlFor={category.name}
                      className="text-[#2B2B2B] text-sm cursor-pointer hover:text-[#00B853]"
                    >
                      {category.name}
                    </label>
                  </div>
                  {category.hasChildren && (
                    <Plus className="w-4 h-4 text-gray-400" />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-lg font-bold mb-4 text-[#2B2B2B]">
              FILTER BY PRICE
            </h2>
            <div className="px-1">
              <Slider
                defaultValue={[0, 70]}
                max={70}
                step={1}
                value={priceRange}
                onValueChange={setPriceRange}
                className="mb-4"
              />
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-600">
                  Price: ${priceRange[0]} — ${priceRange[1]}
                </span>
              </div>
              <Button className="w-full bg-[#2B2B2B] hover:bg-[#000000] text-white">
                FILTER
              </Button>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-lg font-bold mb-4 text-[#2B2B2B]">
              PRODUCT STATUS
            </h2>
            <div className="space-y-3">
              {productStatus.map((status) => (
                <div key={status.name} className="flex items-center gap-2">
                  <Checkbox id={status.name} />
                  <label
                    htmlFor={status.name}
                    className="text-[#2B2B2B] text-sm cursor-pointer hover:text-[#00B853] flex-1"
                  >
                    {status.name}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-lg font-bold mb-4 text-[#2B2B2B]">BRANDS</h2>
            <div className="space-y-3">
              {brands.map((brand) => (
                <div
                  key={brand.name}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-2">
                    <Checkbox id={brand.name} />
                    <label
                      htmlFor={brand.name}
                      className="text-[#2B2B2B] text-sm cursor-pointer hover:text-[#00B853]"
                    >
                      {brand.name}
                    </label>
                  </div>
                  <span className="text-sm text-gray-500">({brand.count})</span>
                </div>
              ))}
            </div>
          </div>
          <div className="left-sidebar-gif">
            <Image
              src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/sidebar-banner.gif"
              alt="Shop Banner"
              width={280}
              height={280}
            />
          </div>
        </div>

        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={toggleSidebar}
          />
        )}

        <div className="product-banner flex-1">
          <div className="mb-8">
            <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px]">
              <Image
                src="https://klbtheme.com/bacola/wp-content/uploads/2021/08/bacola-banner-18.jpg"
                alt="Shop Banner"
                fill
                className="object-cover rounded-lg w-full"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full max-w-xl px-4">
                <h5 className="text-sm sm:text-base md:text-lg text-[#2B2B2B] font-normal mb-2 sm:mb-3">
                  Organic Meals Prepared
                </h5>
                <h1 className="text-2xl sm:text-3xl md:text-[40px] leading-tight font-bold mb-2 sm:mb-3">
                  <span className="text-[#2B2B2B]">Delivered to </span>
                  <span className="text-[#00B853]">your Home</span>
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-[#7E7E7E] font-normal">
                  Fully prepared & delivered nationwide.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            {products.map((product) => (
              <div key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center gap-2 mt-8">
            <Button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className={`w-8 sm:w-10 h-8 sm:h-10 rounded-full ${
                currentPage === 1
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-white text-gray-600 border hover:bg-gray-50"
              }`}
            >
              <ChevronLeft className="w-4 sm:w-5 h-4 sm:h-5" />
            </Button>

            {Array.from({ length: totalPages }, (_, i) => i + 1)
              .filter((num) => {
                if (totalPages <= 5) return true;
                if (num === 1) return true;
                if (num === totalPages) return true;
                return Math.abs(currentPage - num) <= 1;
              })
              .map((pageNumber, index, array) => (
                <>
                  {index > 0 && array[index - 1] !== pageNumber - 1 && (
                    <span className="text-gray-400">...</span>
                  )}
                  <Button
                    key={pageNumber}
                    onClick={() => setCurrentPage(pageNumber)}
                    className={`w-8 sm:w-10 h-8 sm:h-10 rounded-full ${
                      currentPage === pageNumber
                        ? "bg-[#00cdec] text-white"
                        : "bg-white text-gray-600 border hover:bg-gray-50"
                    }`}
                  >
                    {pageNumber}
                  </Button>
                </>
              ))}

            {currentPage < totalPages && (
              <Button
                onClick={handleNextPage}
                className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-white text-gray-600 border hover:bg-gray-50"
              >
                <ChevronRight className="w-4 sm:w-5 h-4 sm:h-5" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
