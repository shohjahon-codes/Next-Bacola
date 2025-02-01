"use client";

import React from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, totalAmount } = useCart();
  const shippingCost = 5.0;
  const freeShippingThreshold = 35.5;
  const remainingForFreeShipping = freeShippingThreshold - totalAmount;

  return (
    <div className="container mx-auto py-8">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-[#2bbef9]">
            HOME
          </Link>
          <span>/</span>
          <span>CART</span>
        </div>

        {remainingForFreeShipping > 0 && (
          <div className="bg-white p-4 rounded-md border mb-4">
            <div className="flex flex-col gap-2">
              <p>
                Add{" "}
                <span className="text-[#2bbef9] font-semibold">
                  ${remainingForFreeShipping.toFixed(2)}
                </span>{" "}
                to cart and get free shipping!
              </p>
              <div className="w-full bg-gray-200 h-2 rounded-full">
                <div
                  className="bg-[#2bbef9] h-2 rounded-full transition-all"
                  style={{
                    width: `${(totalAmount / freeShippingThreshold) * 100}%`,
                  }}
                />
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-md border">
              <div className="p-6">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left pb-4">Product</th>
                      <th className="text-center pb-4">Price</th>
                      <th className="text-center pb-4">Quantity</th>
                      <th className="text-right pb-4">Subtotal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <tr key={item.id} className="border-b">
                        <td className="py-4">
                          <div className="flex items-center gap-4">
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-gray-400 hover:text-red-500"
                            >
                              <X size={20} />
                            </button>
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-16 h-16 object-cover rounded"
                            />
                            <h3 className="font-medium">{item.name}</h3>
                          </div>
                        </td>
                        <td className="text-center">
                          ${item.price.toFixed(2)}
                        </td>
                        <td className="text-center">
                          <div className="flex items-center justify-center gap-2">
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                              className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"
                            >
                              -
                            </button>
                            <span className="w-8 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                              className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td className="text-right">
                          ${(item.price * item.quantity).toFixed(2)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="border-t p-6 flex items-center justify-between">
                <div className="flex gap-4">
                  <Input placeholder="Coupon code" className="w-[200px]" />
                  <Button>Apply coupon</Button>
                </div>
                <Button variant="outline">Update cart</Button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-md border p-6">
              <h2 className="text-xl font-semibold mb-6">CART TOTALS</h2>
              <div className="space-y-4">
                <div className="flex justify-between pb-4 border-b">
                  <span>Subtotal</span>
                  <span>${totalAmount.toFixed(2)}</span>
                </div>
                <div className="pb-4 border-b">
                  <div className="flex justify-between mb-2">
                    <span>Shipping</span>
                    <span>${shippingCost.toFixed(2)}</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <input
                      type="radio"
                      id="flat"
                      name="shipping"
                      checked
                      className="text-[#2bbef9]"
                    />
                    <label htmlFor="flat">Flat rate: $5.00</label>
                  </div>
                  <div className="flex gap-2 items-center">
                    <input
                      type="radio"
                      id="local"
                      name="shipping"
                      className="text-[#2bbef9]"
                    />
                    <label htmlFor="local">Local pickup</label>
                  </div>
                  <div className="mt-2">
                    <p className="text-sm">
                      Shipping to <span className="font-medium">AL.</span>
                    </p>
                    <button className="text-[#2bbef9] text-sm">
                      Change address
                    </button>
                  </div>
                </div>
                <div className="flex justify-between pb-4 border-b">
                  <span className="font-semibold">Total</span>
                  <span className="font-semibold">
                    ${(totalAmount + shippingCost).toFixed(2)}
                  </span>
                </div>
                <Button className="w-full bg-[#233a95] hover:bg-[#233a95]/90">
                  Proceed to checkout
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
