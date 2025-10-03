export type ProductType = {
    id: String | number;
    name: string;
    shortDescription: string,
    description: string,
    price: number,
    sizes: string[];
    colors: string[];
    images: Record<string, string>;
}

export type ProductsType = ProductType[];