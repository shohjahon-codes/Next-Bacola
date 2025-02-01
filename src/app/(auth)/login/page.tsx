"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { z } from "zod";
import { useState } from "react";
import { motion } from "framer-motion";

const loginSchema = z.object({
  email: z.string().min(1, "Email is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormData = z.infer<typeof loginSchema>;

const LoginPage = () => {
  const [errors, setErrors] = useState<Partial<LoginFormData>>({});
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      loginSchema.parse(formData);
      setErrors({});
      console.log("Form data:", formData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<LoginFormData> = {};
        error.errors.forEach((err) => {
          if (err.path) {
            fieldErrors[err.path[0] as keyof LoginFormData] = err.message;
          }
        });
        setErrors(fieldErrors);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen flex items-center">
      <div className="container mx-auto py-10">
        <div className="max-w-[500px] mx-auto bg-white p-8 rounded border h-[650px]">
          <motion.div
            initial={{ x: -60, opacity: 1 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="h-full"
          >
            <div className="flex justify-center gap-8 mb-8">
              <Link
                href="/login"
                className="text-[20px] font-semibold text-gray-900 border-b-2 border-gray-900 pb-1"
              >
                LOGIN
              </Link>
              <Link
                href="/register"
                className="text-[20px] font-normal text-gray-400 pb-1"
              >
                REGISTER
              </Link>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="text-[15px] text-gray-700">
                  Username or email address
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="h-[52px] bg-[#f3f4f7] border-0 focus-visible:ring-0 text-[15px]"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-[15px] text-gray-700">Password</label>
                <Input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="h-[52px] bg-[#f3f4f7] border-0 focus-visible:ring-0 text-[15px]"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                )}
              </div>

              <div className="flex items-center gap-2">
                <Checkbox
                  id="remember"
                  className="rounded-none data-[state=checked]:bg-[#233a95] data-[state=checked]:border-[#233a95]"
                />
                <label
                  htmlFor="remember"
                  className="text-[15px] text-gray-700 leading-none cursor-pointer"
                >
                  Remember me
                </label>
              </div>

              <Button
                type="submit"
                className="w-full h-[52px] bg-[#233a95] hover:bg-[#233a95]/90 text-[15px] font-medium"
              >
                Log in
              </Button>

              <Link
                href="/forgot-password"
                className="text-[15px] text-[#2bbef9] hover:text-[#233a95] transition-colors block text-center"
              >
                Lost your password?
              </Link>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
