import { useQuery } from "@tanstack/react-query";
import { ProductDataType } from "./GetProduct";

export const useGetProductById = (id: string) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      try {
        const response = await fetch(`http://localhost:8000/product/${id}/`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log("Product data:", data);
        return data as ProductDataType;
      } catch (error) {
        console.error("Error fetching product:", error);
        throw error;
      }
    },
  });
};
