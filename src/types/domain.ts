export interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

export interface CartProduct {
  id: number;
  quantity: number;
  isChecked: boolean;
  product: Product;
}
