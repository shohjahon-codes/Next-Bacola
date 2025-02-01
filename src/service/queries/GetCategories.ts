import { CategoryResponse, CategoryList } from "@/types";

export async function getCategories(): Promise<CategoryList[]> {
  try {
    const response = await fetch(`http://localhost:8000/category/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Kategoriyalarni yuklashda xatolik yuz berdi");
    }

    const data: CategoryResponse = await response.json();
    console.log("Categories data:", data);
    return data.results;
  } catch (error) {
    console.error("Kategoriyalarni olishda xatolik:", error);
    return [];
  }
}
