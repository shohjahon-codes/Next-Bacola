import { GetBannerData } from '@/service/queries/GetBanner';
import BannerCarousel from '@/components/Banner/BannerCarousel';
import { Product } from '@/components/product/product';
import { GetProductData } from '@/service/queries/GetProduct';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Categories } from '@/components/categories/category';
import { getCategories } from '@/service/queries/GetCategories';
import TrendingProducts from '@/components/TrendingProducts/TrendingProducts';
import CountdownTimer from '@/components/clock/clock';
import Link from 'next/link';
import { NewProducts } from '@/components/NewProducts/NewProducts';


export default async function Home() {
  const bannerData = await GetBannerData();
  const productData = await GetProductData();
  const categoryData = await getCategories()
  console.log(categoryData);
  return (
    <div className='container mx-auto pt-5 pb-10'>
      <section className='Banner-section'>
        <BannerCarousel banners={bannerData || []} />
      </section>
      <section className='Product-section pt-10'>
        <div className='Product-section-container grid grid-cols-4 gap-6'>
          {/*sidebar-banner*/}
          <div className='Product-section-container-right col-span-1'>
            <div className='Product-section-container-right-top-image flex flex-col gap-6'>
              <div className='relative transition-transform hover:scale-[1.02] duration-300'>
                <Image
                  src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/banner-box.jpg"
                  alt='Product Section Right Top'
                  width={200}
                  height={200}
                  className='rounded-lg w-full h-auto object-cover'
                />
                <div className='absolute top-6 left-6 text-left'>
                  <p className='text-lg font-medium text-gray-600 mb-1'>Bacola Natural Foods</p>
                  <h3 className='text-2xl font-bold mb-2'>Special Organic</h3>
                  <h2 className='text-2xl font-bold mb-3'>Roats Burger</h2>
                  <p className='text-sm text-gray-600 mb-2'>only-from</p>
                  <p className='text-2xl font-bold text-red-500'>$14.99</p>
                </div>
              </div>

              <div className='relative transition-transform hover:scale-[1.02] duration-300'>
                <Image
                  src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/bacola-banner-04.jpg"
                  alt='Product Section Right Top'
                  width={200}
                  height={200}
                  className='rounded-lg w-full h-auto object-cover'
                />
                <div className='absolute top-6 left-6 text-left'>
                  <p className='text-lg font-medium text-gray-600 mb-1'>Best Bakery</p>
                  <p className='text-lg font-medium text-gray-600'>Products</p>
                  <h2 className='text-2xl font-bold mb-1'>Freshest</h2>
                  <h2 className='text-2xl font-bold mb-3'>Products</h2>
                  <h1 className='text-3xl font-bold mb-3'>every hour.</h1>
                  <p className='text-sm text-gray-600 mb-2'>only-from</p>
                  <p className='text-2xl font-bold text-red-500 mb-4'>$24.99</p>
                  <button className='bg-blue-400 text-white px-6 py-2 rounded-full hover:bg-blue-500 transition-colors'>
                    Shop Now
                  </button>
                </div>
              </div>
              <div className='Product-section-container-right-Apps bg-white rounded-lg p-6 border border-gray-200 shadow-sm mb-6'>
                <div className='flex items-center gap-4 pb-6 border-b border-gray-200'>
                  <div className='text-gray-600'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                    </svg>
                  </div>
                  <div>
                    <p className='text-gray-700 text-lg font-medium'>Download the Bacola</p>
                    <p className='text-gray-700 text-lg font-medium'>App to your Phone.</p>
                  </div>
                </div>

                <div className='flex items-center gap-4 py-6 border-b border-gray-200'>
                  <div className='text-gray-600'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className='text-gray-700 text-lg font-medium'>Order now so you</p>
                    <p className='text-gray-700 text-lg font-medium'>dont miss the</p>
                    <p className='text-gray-700 text-lg font-medium'>opportunities.</p>
                  </div>
                </div>

                <div className='flex items-center gap-4 pt-6'>
                  <div className='text-gray-600'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className='text-gray-700 text-lg font-medium'>Your order will arrive</p>
                    <p className='text-gray-700 text-lg font-medium'>at your door in 15</p>
                    <p className='text-gray-700 text-lg font-medium'>minutes.</p>
                  </div>
                </div>
              </div>

              <TrendingProducts products={productData} />
              <div className="bg-[#FFF9F0] rounded-lg p-8 mt-6">
                <h3 className="text-[#1E212C] text-lg font-bold mb-2">CUSTOMER COMMENT</h3>
                <div className="mt-4">
                  <h4 className="text-[#1E212C] text-xl font-bold mb-2">The Best Marketplace</h4>
                  <p className="text-[#77798C] mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
                  </p>
                  <div className="flex items-center gap-3">
                    <Image
                      src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/avatar-3.jpg"
                      alt="Tina Mcdonnell"
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <div>
                      <h5 className="text-[#1E212C] font-bold">Tina Mcdonnell</h5>
                      <p className="text-[#77798C] text-sm">Sales Manager</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main product content */}
          <div className='Product-section-container-left col-span-3'>
            <div className='Product-section-container-left-top'>
              <Product productData={productData} />
            </div>

            <div className='Product-left-banner relative h-[200px] mt-8 bg-[#F3F3F3] rounded-lg overflow-hidden'>
              <div className='Product-left-banner-image relative w-full h-full'>
                <Image
                  src="https://klbtheme.com/bacola/wp-content/plugins/bacola-core/elementor/images/banner-box2.jpg"
                  alt='Product Section Left Bottom'
                  width={350}
                  height={230}
                  className='object-contain absolute -right-8 h-full'
                  style={{ maxWidth: 'none' }}
                />
              </div>
              <div className='absolute top-1/2 left-8 transform -translate-y-1/2'>
                <p className='text-[#7E7E7E] text-sm md:text-base mb-1'>Always Taking Care</p>
                <h3 className='text-[#2B2B2B] text-base md:text-lg font-semibold max-w-[100%] leading-[1.4]'>
                  In store or online your health & safety is our top priority
                </h3>
              </div>
            </div>

            <div className='Product-left-banner-week-link flex flex-col gap-4 pt-10'>
              <div className='flex justify-between items-center mb-2'>
                <div>
                  <h2 className='text-xl font-bold'>
                    HOT PRODUCT FOR <span className='text-[#FF3457]'>THIS WEEK</span>
                  </h2>
                  <p className='text-gray-500 text-sm'>
                    Dont miss this opportunity at a special discount just for this week.
                  </p>
                </div>
                <Link
                  href="/shop"
                  className='text-black hover:text-black flex items-center gap-1'
                >
                  <Button
                    variant="ghost"
                    className="rounded-full border border-gray-300 px-6 py-2 text-sm font-medium hover:bg-gray-100 w-[130px] shadow-[0_1px_2px_rgba(0,0,0,0.2)] hover:shadow-[0_2px_2px_rgba(0,0,0,0.3)] transition-shadow duration-300"
                  >
                    View All
                  </Button>
                </Link>
              </div>
              <div className='Product-left-banner-clock bg-white mt-8 p-6 rounded-lg border border-red-500'>
                <div className='flex gap-8 mt-6 items-center'>
                  <div className='relative w-[140px]'>
                    <div className='absolute top-0 left-0 bg-[#FF3457] text-white rounded-full w-12 h-12 flex items-center justify-center'>
                      19%
                    </div>
                    <Image
                      src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg"
                      alt="Chobani Complete Vanilla Greek Yogurt"
                      width={140}
                      height={140}
                      className='object-contain'
                    />
                  </div>

                  <div className='flex-1'>
                    <div className='flex items-center gap-2 mb-2'>
                      <span className='text-gray-400 line-through'>$5.49</span>
                      <span className='text-xl font-bold text-[#FF3457]'>$4.49</span>
                    </div>

                    <h3 className='text-lg font-medium mb-1'>Chobani Complete Vanilla Greek Yogurt</h3>
                    <div className='flex items-center gap-2 mb-4'>
                      <span className='text-sm text-gray-500'>1 kg</span>
                      <span className='text-sm text-green-500'>IN STOCK</span>
                    </div>

                    <div className='w-full bg-gray-200 rounded-full h-2 mb-4'>
                      <div className='bg-gradient-to-r from-[#FF3457] to-[#FFB800] h-2 rounded-full w-[75%]'></div>
                    </div>
                    <CountdownTimer />
                  </div>
                </div>
              </div>
              <div className='Product-left-banner-week-link-cupon'>
                <Link href="/shop" className='block'>
                  <div className='bg-[#FEF2F4] rounded-lg p-6'>
                    <div className='flex items-center justify-center gap-4'>
                      <p className='text-[#FF3457] text-base mb-1'>
                        Super discount for your{' '}
                        <span className='font-semibold underline'>first purchase</span>
                      </p>
                      <div className='flex items-center gap-4'>
                        <div className='bg-white border border-dashed border-[#FF3457] rounded px-4 py-2'>
                          <span className='text-[#FF3457] font-semibold'>FREE25BAC</span>
                        </div>
                        <span className='text-gray-500 text-sm'>
                          Use discount code in checkout!
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <NewProducts productData={productData} />
            <div className="grid grid-cols-2 gap-6 mt-10">
              <Link href="/shop" className="block relative h-[280px] bg-[#F3F3F3] rounded-lg overflow-hidden group">
                <div className="absolute inset-0">
                  <Image
                    src="https://klbtheme.com/bacola/wp-content/uploads/2021/08/bacola-banner-01.jpg"
                    alt="Legumes and Cereals"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-full p-10 flex flex-col justify-between z-10">
                  <div className='flex flex-col'>
                    <span className="text-green-500 font-medium text-lg mb-2 block">WEEKEND DISCOUNT 40%</span>
                    <h3 className="text-[#1E212C] text-3xl font-bold mb-2">Legumes & Cereals</h3>
                    <p className="text-[#77798C] text-lg">Feed your family the best</p>
                  </div>
                  <Link 
                    href="/shop" 
                    className="bg-[#DEE0EA] text-white w-fit px-8 py-2 rounded-full hover:bg-[#C9CBDA] transition-colors duration-300 text-sm font-bold"
                  >
                    Shop Now
                  </Link>
                </div>
              </Link>

              <Link href="/shop" className="block relative h-[280px] bg-[#F3F3F3] rounded-lg overflow-hidden group">
                <div className="absolute inset-0">
                  <Image
                    src="https://klbtheme.com/bacola/wp-content/uploads/2021/08/bacola-banner-02.jpg"
                    alt="Dairy and Eggs"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-full p-10 flex flex-col justify-between z-10">
                  <div>
                    <span className="text-green-500 font-medium text-lg mb-2 block">WEEKEND DISCOUNT 40%</span>
                    <h3 className="text-[#1E212C] text-3xl font-bold mb-2">Dairy & Eggs</h3>
                    <p className="text-[#77798C] text-lg">A different kind of grocery store</p>
                  </div>
                  <Link 
                    href="/shop" 
                    className="bg-[#DEE0EA] text-white w-fit px-8 py-2 rounded-full hover:bg-[#C9CBDA] transition-colors duration-300 text-sm font-bold"
                  >
                    Shop Now
                  </Link>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <Categories categoryData={categoryData} />
      </section>
    </div>
  );
}

