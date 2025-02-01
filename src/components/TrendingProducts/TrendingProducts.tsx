"use client";

import Image from "next/image";
import Link from "next/link";

interface TrendingProductsProps {
  products: any[];
}

export default function TrendingProducts({ products }: TrendingProductsProps) {
  return (
    <div className="Product-section-Link bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
      <h3 className="text-xl font-bold mb-4">TRENDING PRODUCTS</h3>
      <div className="space-y-4">
        {products?.slice(0, 5).map((item: any) => (
          <Link
            href={`/product/${item.id}`}
            key={item.id}
            className="flex items-center gap-3 group hover:bg-gray-50 p-2 rounded-lg transition-colors"
          >
            <div className="w-16 h-16 flex-shrink-0">
              <Image
                src={item.image}
                alt={item.title}
                width={80}
                height={80}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <div className="flex-grow">
              <h4 className="text-sm text-gray-700 font-medium group-hover:text-blue-500 transition-colors line-clamp-2">
                {item.title}
              </h4>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-gray-400 line-through text-sm">
                  ${(Number(item.price) * 1.2).toFixed(2)}
                </span>
                <span className="text-red-500 font-bold">
                  ${Number(item.price).toFixed(2)}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
