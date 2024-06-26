export type Product = {
  id: string;
  name: string;
  description: string;
  image_url: string;
  category: string;
  price_in_cents: number;
  sales: number;
  __typename?: "Product";
  quantity?: number;
}

export type SmallProduct = Omit<Product, 'description'>;