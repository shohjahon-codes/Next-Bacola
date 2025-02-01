"use client";

import { useEffect, useState } from "react";
import { ProductDataType } from "@/service/queries/GetProduct";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Facebook, Twitter, Mail, Link2 } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function WishlistPage() {
  const [wishlistProducts, setWishlistProducts] = useState<ProductDataType[]>(
    []
  );
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const router = useRouter();
  const { addToCart } = useCart();

  useEffect(() => {
    const loadWishlistProducts = async () => {
      try {
        const savedWishlist = localStorage.getItem("wishlist");
        if (savedWishlist) {
          const wishlistIds = JSON.parse(savedWishlist);
          const response = await fetch(`http://localhost:8000/product/`);
          const allProducts = await response.json();

          const filteredProducts = allProducts.results.filter(
            (product: ProductDataType) => wishlistIds.includes(product.id)
          );

          setWishlistProducts(filteredProducts);
        }
      } catch (error) {
        console.error("Error loading wishlist products:", error);
      }
    };

    loadWishlistProducts();
  }, []);

  const removeFromWishlist = (productId: string) => {
    const savedWishlist = localStorage.getItem("wishlist");
    if (savedWishlist) {
      const wishlistIds = JSON.parse(savedWishlist);
      const updatedWishlist = wishlistIds.filter(
        (id: string) => id !== productId
      );
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      setWishlistProducts((prev) =>
        prev.filter((product) => product.id !== productId)
      );
    }
  };

  const handleProductClick = (productId: string) => {
    router.push(`/product/${productId}`);
  };

  const handleAddToCart = (product: ProductDataType) => {
    addToCart({
      id: product.id,
      name: product.title,
      price: Number(product.price),
      quantity: 1,
      image: product.image,
      oldPrice: Number(product.price) * 1.3,
    });
  };

  const handleSelectItem = (productId: string) => {
    setSelectedItems((prev) => {
      if (prev.includes(productId)) {
        return prev.filter((id) => id !== productId);
      }
      return [...prev, productId];
    });
  };

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedItems(wishlistProducts.map((product) => product.id));
    } else {
      setSelectedItems([]);
    }
  };

  const handleAddSelectedToCart = () => {
    const selectedProducts = wishlistProducts.filter((product) =>
      selectedItems.includes(product.id)
    );

    selectedProducts.forEach((product) => {
      addToCart({
        id: product.id,
        name: product.title,
        price: Number(product.price),
        quantity: 1,
        image: product.image,
        oldPrice: Number(product.price) * 1.3,
      });
    });

    alert(`${selectedProducts.length} ta mahsulot savatga qo'shildi`);
  };

  const handleAddAllToCart = () => {
    wishlistProducts.forEach((product) => handleAddToCart(product));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-sm">
        <table className="w-full">
          <thead className="border-b">
            <tr>
              <th className="w-12 p-4">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-300"
                  onChange={handleSelectAll}
                  checked={
                    selectedItems.length === wishlistProducts.length &&
                    wishlistProducts.length > 0
                  }
                />
              </th>
              <th className="w-12 p-4"></th> {/* For remove button */}
              <th className="p-4 text-left">Product Name</th>
              <th className="p-4 text-left">Unit Price</th>
              <th className="p-4 text-left">Date Added</th>
              <th className="p-4 text-left">Stock Status</th>
              <th className="w-[120px] p-4"></th> {/* For Add to Cart button */}
            </tr>
          </thead>
          <tbody className="divide-y">
            {wishlistProducts.map((product) => {
              const oldPrice = Number(product.price) * 1.3;
              const dateAdded = new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              });

              return (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="p-4">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-gray-300"
                      checked={selectedItems.includes(product.id)}
                      onChange={() => handleSelectItem(product.id)}
                    />
                  </td>
                  <td className="p-4">
                    <button
                      onClick={() => removeFromWishlist(product.id)}
                      className="text-gray-400 hover:text-gray-600 text-xl"
                    >
                      ×
                    </button>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-4">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <span className="font-medium text-gray-800">
                        {product.title}
                      </span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex flex-col">
                      <span className="text-gray-400 line-through text-sm">
                        ${oldPrice.toFixed(2)}
                      </span>
                      <span className="text-[#DC2626] font-bold">
                        ${product.price}
                      </span>
                    </div>
                  </td>
                  <td className="p-4 text-gray-600">{dateAdded}</td>
                  <td className="p-4">
                    <span className="text-[#10B981] font-medium">In Stock</span>
                  </td>
                  <td className="p-4">
                    <Button
                      className="w-full bg-[#1E40AF] hover:bg-blue-800 text-white"
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to Cart
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <div className="p-4 border-t">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <select className="border rounded px-3 py-2 text-gray-600">
                <option>Actions</option>
              </select>
              <Button className="bg-[#1E40AF] hover:bg-blue-800 text-white">
                Apply Action
              </Button>
            </div>
            <div className="flex gap-4">
              <Button
                className="bg-[#1E40AF] hover:bg-blue-800 text-white"
                onClick={handleAddSelectedToCart}
                disabled={selectedItems.length === 0}
              >
                Add Selected to Cart ({selectedItems.length})
              </Button>
              <Button
                className="bg-[#1E40AF] hover:bg-blue-800 text-white"
                onClick={handleAddAllToCart}
                disabled={wishlistProducts.length === 0}
              >
                Add All to Cart
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-end gap-4 mt-6 pt-6 border-t">
            <span className="text-gray-600">Share on</span>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-[#3b5998] text-white hover:opacity-90"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1da1f2] text-white hover:opacity-90"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-[#ea4335] text-white hover:opacity-90"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-[#0077b5] text-white hover:opacity-90"
              >
                <Link2 className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-[#25d366] text-white hover:opacity-90"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-[#bd081c] text-white hover:opacity-90"
              >
                <i className="fab fa-pinterest"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
