export interface BannerType {
  id: number;
  image: string;
}

export interface BannerDataType {
  results: BannerType[];
}

export const GetBannerData = async (): Promise<BannerType[]> => {
  try {
    const response = await fetch("http://localhost:8000/banner/", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
    });

    if (!response.ok) {
      throw new Error("Ma'lumotlarni olishda xatolik yuz berdi");
    }

    const data: BannerDataType = await response.json();
    return data.results;
  } catch (error) {
    console.error("Xatolik:", error);
    return [];
  }
};
