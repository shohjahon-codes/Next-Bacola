"use client";

import { ProductDetails } from "@/components/Product-Detalies/Product-detalies";
import { useGetProductById } from "@/service/queries/GetProductID";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function ProductPageContent({ params }: { params: { id: string } }) {
  const { data: product, isLoading, error } = useGetProductById(params.id);

  if (isLoading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        Loading...
      </div>
    );
  if (error)
    return (
      <div className="flex justify-center items-center min-h-screen">
        Error loading product
      </div>
    );
  if (!product)
    return (
      <div className="flex justify-center items-center min-h-screen">
        Product not found
      </div>
    );

  return <ProductDetails product={product} />;
}

export default function ProductPage({ params }: { params: { id: string } }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ProductPageContent params={params} />
    </QueryClientProvider>
  );
}
