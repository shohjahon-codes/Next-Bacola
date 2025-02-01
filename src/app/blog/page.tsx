"use client";

import Image from "next/image";
import {
  FiClock,
  FiBookmark,
  FiShare2,
  FiArrowLeft,
  FiArrowRight,
} from "react-icons/fi";
import { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaLinkedinIn,
  FaRedditAlien,
} from "react-icons/fa";

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 2;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [currentPage]);

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

  return (
    <section className="container blog-section py-10">
      <div className="blog-container flex flex-col md:flex-row gap-8">
        <div className="blog-content flex-grow">
          {currentPage === 1 && (
            <>
              <div className="flex flex-col gap-6">
                <Image
                  src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/blog-3.jpg"
                  alt="Blog Image"
                  width={1000}
                  height={300}
                  className="rounded-lg w-[900px]"
                />

                <div className="meta-info flex items-center gap-6 text-gray-500 text-sm w-[900px]">
                  <div className="flex items-center gap-2">
                    <FiClock className="w-4 h-4" />
                    <span>May 3, 2021</span>
                  </div>
                  <button className="flex items-center gap-2 hover:text-blue-600">
                    <FiBookmark className="w-4 h-4" />
                    <span>Save</span>
                  </button>
                  <button className="flex items-center gap-2 hover:text-blue-600">
                    <FiShare2 className="w-4 h-4" />
                    <span>Share</span>
                  </button>
                </div>

                <div className="blog-text w-[900px]">
                  <h1 className="text-3xl font-bold mb-4">
                    But I must explain to you how all this mistaken idea
                  </h1>
                  <p className="text-gray-600 leading-relaxed">
                    Pellentesque feugiat, sem id interdum molestie, libero nibh
                    imperdiet velit, sodales elementum enim sem sed lectus.
                    Vivamus viverra diam congue tristique pellentesque. Proin
                    efficitur est vel lectus ultrices rhoncus eu ut lacus.
                  </p>
                </div>

                <div className="flex gap-4 w-[900px]">
                  <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    Read More
                  </button>
                </div>
              </div>

              <div className="w-[900px]">
                <div className="flex flex-col gap-6 mt-12 pt-12 border-t">
                  <Image
                    src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/blog-5.jpg"
                    alt="Blog Image"
                    width={1000}
                    height={300}
                    className="rounded-lg w-full"
                  />

                  <div className="meta-info flex items-center gap-6 text-gray-500 text-sm w-[900px]">
                    <div className="flex items-center gap-2">
                      <FiClock className="w-4 h-4" />
                      <span>May 3, 2021</span>
                    </div>
                    <button className="flex items-center gap-2 hover:text-blue-600">
                      <FiBookmark className="w-4 h-4" />
                      <span>Save</span>
                    </button>
                    <button className="flex items-center gap-2 hover:text-blue-600">
                      <FiShare2 className="w-4 h-4" />
                      <span>Share</span>
                    </button>
                  </div>

                  <div className="blog-text w-[900px]">
                    <h1 className="text-3xl font-bold mb-4">
                      The Problem With Typefaces on the Web
                    </h1>
                    <p className="text-gray-600 leading-relaxed">
                      Pellentesque feugiat, sem id interdum molestie, libero
                      nibh imperdiet velit, sodales elementum enim sem sed
                      lectus. Vivamus viverra diam congue tristique
                      pellentesque. Proin efficitur est vel lectus ultrices
                      rhoncus eu ut lacus.
                    </p>
                  </div>

                  <div className="flex gap-4 w-[900px]">
                    <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                      Read More
                    </button>
                  </div>
                </div>
              </div>

              <div className="w-[900px]">
                <div className="flex flex-col gap-6 mt-12 pt-12 border-t">
                  <Image
                    src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/blog-1.jpg"
                    alt="Blog Image"
                    width={1000}
                    height={300}
                    className="rounded-lg w-full"
                  />

                  <div className="meta-info flex items-center gap-6 text-gray-500 text-sm w-[900px]">
                    <div className="flex items-center gap-2">
                      <FiClock className="w-4 h-4" />
                      <span>May 2, 2021</span>
                    </div>
                    <button className="flex items-center gap-2 hover:text-blue-600">
                      <FiBookmark className="w-4 h-4" />
                      <span>Save</span>
                    </button>
                    <button className="flex items-center gap-2 hover:text-blue-600">
                      <FiShare2 className="w-4 h-4" />
                      <span>Share</span>
                    </button>
                  </div>

                  <div className="blog-text w-[900px]">
                    <h1 className="text-3xl font-bold mb-4">
                      English Breakfast Tea With Tasty Donut Desserts
                    </h1>
                    <p className="text-gray-600 leading-relaxed">
                      Pellentesque feugiat, sem id interdum molestie, libero
                      nibh imperdiet velit, sodales elementum enim sem sed
                      lectus. Vivamus viverra diam congue tristique
                      pellentesque. Proin efficitur est vel lectus ultrices
                      rhoncus eu ut lacus.
                    </p>
                  </div>

                  <div className="flex gap-4 w-[900px]">
                    <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}

          {currentPage === 2 && (
            <>
              <div className="flex flex-col gap-6">
                <Image
                  src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/blog-4.jpg"
                  alt="Blog Image"
                  width={1000}
                  height={300}
                  className="rounded-lg w-[900px]"
                />

                <div className="meta-info flex items-center gap-6 text-gray-500 text-sm w-[900px]">
                  <div className="flex items-center gap-2">
                    <FiClock className="w-4 h-4" />
                    <span>May 1, 2021</span>
                  </div>
                  <button className="flex items-center gap-2 hover:text-blue-600">
                    <FiBookmark className="w-4 h-4" />
                    <span>Save</span>
                  </button>
                  <button className="flex items-center gap-2 hover:text-blue-600">
                    <FiShare2 className="w-4 h-4" />
                    <span>Share</span>
                  </button>
                </div>

                <div className="blog-text w-[900px]">
                  <h1 className="text-3xl font-bold mb-4">
                    On the other hand we provide denounce with righteous
                  </h1>
                  <p className="text-gray-600 leading-relaxed">
                    Pellentesque feugiat, sem id interdum molestie, libero nibh
                    imperdiet velit, sodales elementum enim sem sed lectus.
                    Vivamus viverra diam congue tristique pellentesque. Proin
                    efficitur est vel lectus ultrices rhoncus eu ut lacus.
                  </p>
                </div>

                <div className="flex gap-4 w-[900px]">
                  <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    Read More
                  </button>
                </div>
              </div>

              <div className="w-[900px]">
                <div className="flex flex-col gap-6 mt-12 pt-12 border-t">
                  <Image
                    src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/blog-2.jpg"
                    alt="Blog Image"
                    width={1000}
                    height={300}
                    className="rounded-lg w-full"
                  />

                  <div className="meta-info flex items-center gap-6 text-gray-500 text-sm w-[900px]">
                    <div className="flex items-center gap-2">
                      <FiClock className="w-4 h-4" />
                      <span>May 1, 2021</span>
                    </div>
                    <button className="flex items-center gap-2 hover:text-blue-600">
                      <FiBookmark className="w-4 h-4" />
                      <span>Save</span>
                    </button>
                    <button className="flex items-center gap-2 hover:text-blue-600">
                      <FiShare2 className="w-4 h-4" />
                      <span>Share</span>
                    </button>
                  </div>

                  <div className="blog-text w-[900px]">
                    <h1 className="text-3xl font-bold mb-4">
                      Fresh Vegetables & Essential Foods
                    </h1>
                    <p className="text-gray-600 leading-relaxed">
                      Pellentesque feugiat, sem id interdum molestie, libero
                      nibh imperdiet velit, sodales elementum enim sem sed
                      lectus. Vivamus viverra diam congue tristique
                      pellentesque. Proin efficitur est vel lectus ultrices
                      rhoncus eu ut lacus.
                    </p>
                  </div>

                  <div className="flex gap-4 w-[900px]">
                    <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
          <div className="flex justify-center items-center gap-4 mt-12">
            <button
              onClick={handlePrevPage}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all
                                ${
                                  currentPage === 1
                                    ? "text-gray-400 cursor-not-allowed"
                                    : "text-blue-600 hover:bg-blue-50"
                                }`}
              disabled={currentPage === 1}
            >
              <FiArrowLeft className="w-5 h-5" />
              <span>Previous</span>
            </button>

            <div className="flex items-center gap-2">
              <span className="text-blue-600 font-semibold">{currentPage}</span>
              <span className="text-gray-400">of</span>
              <span className="text-gray-600">{totalPages}</span>
            </div>

            {currentPage < totalPages && (
              <button
                onClick={handleNextPage}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-blue-600 hover:bg-blue-50 transition-all"
              >
                <span>Next</span>
                <FiArrowRight className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>

        <div className="blog-right-sidebar w-full md:w-[320px] flex-shrink-0">
          {/* Search */}
          <div className="search-box mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-3 rounded-lg bg-gray-50 focus:outline-none focus:ring-1 focus:ring-gray-200"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="popular-posts mb-8">
            <h3 className="text-lg font-bold mb-6 pb-2 border-b">
              POPULAR POSTS
            </h3>
            <div className="posts space-y-6">
              <div className="post flex items-start gap-4">
                <div className="relative w-24 h-24 flex-shrink-0">
                  <Image
                    src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/blog-3.jpg"
                    alt="Popular post"
                    fill
                    className="rounded-lg object-cover"
                  />
                  <span className="absolute -top-2 -left-2 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm">
                    1
                  </span>
                </div>
                <h4 className="text-sm font-medium hover:text-blue-600 cursor-pointer leading-5">
                  The Problem With Typefaces on the Web
                </h4>
              </div>

              <div className="post flex items-start gap-4">
                <div className="relative w-24 h-24 flex-shrink-0">
                  <Image
                    src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/blog-5.jpg"
                    alt="Popular post"
                    fill
                    className="rounded-lg object-cover"
                  />
                  <span className="absolute -top-2 -left-2 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm">
                    2
                  </span>
                </div>
                <h4 className="text-sm font-medium hover:text-blue-600 cursor-pointer leading-5">
                  But I must explain to you how all this mistaken idea
                </h4>
              </div>

              <div className="post flex items-start gap-4">
                <div className="relative w-24 h-24 flex-shrink-0">
                  <Image
                    src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/blog-1.jpg"
                    alt="Popular post"
                    fill
                    className="rounded-lg object-cover"
                  />
                  <span className="absolute -top-2 -left-2 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm">
                    3
                  </span>
                </div>
                <h4 className="text-sm font-medium hover:text-blue-600 cursor-pointer leading-5">
                  English Breakfast Tea With Tasty Donut Desserts
                </h4>
              </div>
            </div>
          </div>

          <div className="social-media">
            <h3 className="text-lg font-bold mb-6 pb-2 border-b">
              SOCIAL MEDIA
            </h3>
            <div className="social-links space-y-3">
              <a
                href="#"
                className="flex items-center gap-3 px-5 py-2.5 bg-[#3b5998] text-white rounded-lg hover:opacity-90 font-medium"
              >
                <FaFacebookF className="w-5 h-5" />
                <span>FACEBOOK</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 px-5 py-2.5 bg-[#1da1f2] text-white rounded-lg hover:opacity-90 font-medium"
              >
                <FaTwitter className="w-5 h-5" />
                <span>TWITTER</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 px-5 py-2.5 bg-[#bd081c] text-white rounded-lg hover:opacity-90 font-medium"
              >
                <FaPinterestP className="w-5 h-5" />
                <span>PINTEREST</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 px-5 py-2.5 bg-[#0077b5] text-white rounded-lg hover:opacity-90 font-medium"
              >
                <FaLinkedinIn className="w-5 h-5" />
                <span>LINKEDIN</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 px-5 py-2.5 bg-[#ff4500] text-white rounded-lg hover:opacity-90 font-medium"
              >
                <FaRedditAlien className="w-5 h-5" />
                <span>REDDIT</span>
              </a>
            </div>
          </div>

          <div className="widget-banner pt-10">
            <h3 className="text-lg font-bold mb-6 pb-2">WIDGET BANNER</h3>
            <div className="relative">
              <Image
                src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/sidebar-banner.gif"
                alt="Starbucks Happy Hour"
                width={320}
                height={320}
                className="rounded-lg"
              />
            </div>
          </div>

          <div className="tags">
            <h3 className="text-lg font-bold mb-6 pb-2 border-b">TAGS</h3>
            <div className="flex flex-wrap gap-2">
              <a
                href="#"
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm"
              >
                envato
              </a>
              <a
                href="#"
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm"
              >
                food
              </a>
              <a
                href="#"
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm"
              >
                fresh
              </a>
              <a
                href="#"
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm"
              >
                grocery
              </a>
              <a
                href="#"
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm"
              >
                organic
              </a>
              <a
                href="#"
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm"
              >
                quality
              </a>
              <a
                href="#"
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm"
              >
                store
              </a>
              <a
                href="#"
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm"
              >
                themeforest
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
