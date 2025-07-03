export interface Variation {
  image: string;
}

export interface productDetail {
  discount_price: string;
  regular_price: string;
}

export interface Product {
  id: string;
  thumbnail: string;
  image: { [key: string]: { url: string }[] };
  name: string;
  product_detail: productDetail;
  variations: Variation[];
  rating_avg: string;
  description: string;
}

export type ApiResponse = {
  success: boolean;
  data: Product;
};
