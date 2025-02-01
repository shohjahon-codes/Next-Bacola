import Image from "next/image";
import { Category } from "@/types";
import styles from "./categories.module.css";

interface CategoryProps {
    categoryData: Category[] | undefined | null;
}

export const Categories = ({ categoryData }: CategoryProps) => {
    if (!categoryData || categoryData.length === 0) {
        return <div>No categories available</div>;
    }

    const mainCategory = categoryData[0];
    const otherCategories = categoryData.slice(1, 9);

    return (
        <div className={styles.categoriesGrid}>
            <div className={styles.mainCardContainer}>
                <div className={`${styles.categoryCard} ${styles.mainCard}`}>
                    <div className={styles.imageContainer}>
                        <Image 
                            src={mainCategory.image || ''} 
                            alt={mainCategory.name} 
                            width={120}
                            height={120}
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.categoryInfo}>
                        <h3 className={styles.categoryName}>{mainCategory.name}</h3>
                        <span className={styles.itemCount}>{mainCategory.itemCount} Items</span>
                    </div>
                </div>
            </div>
            <div className={styles.otherCardsContainer}>
                {otherCategories.map((category: Category) => (
                    <div 
                        key={category.id} 
                        className={styles.categoryCard}
                    >
                        <div className={styles.imageContainer}>
                            <Image 
                                src={category.image || ''} 
                                alt={category.name} 
                                width={60}
                                height={60}
                                className={styles.image}
                            />
                        </div>
                        <div className={styles.categoryInfo}>
                            <h3 className={styles.categoryName}>{category.name}</h3>
                            <span className={styles.itemCount}>{category.itemCount} Items</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}